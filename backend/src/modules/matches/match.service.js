'use strict';

const crypto = require('crypto');
const { getDb } = require('../../database/db');
const matchModel = require('./match.model');
const rankingModel = require('../rankings/ranking.model');
const teamModel = require('../teams/team.model');
const incidentModel = require('../incidents/incident.model');
const { calculatePoints, validateSets, calculateMatchFromGames } = require('../../utils/scoring');
const { validateMatchDate, createError } = require('../../utils/validators');
const { generateRoundRobinPairs } = require('../../utils/matchGenerator');
const emailService = require('../../services/email/email.service');
const auditService = require('../audit/audit.service');
const config = require('../../config/env');

/**
 * match.service.js — Lógica de negocio central para Partidos.
 *
 * Contiene el flujo crítico de la aplicación:
 *   PENDING_RESULT → PENDING_CONFIRMATION → CONFIRMED / DISPUTED
 */

function getAll(filters = {}) {
  return matchModel.findAll(filters);
}

function getById(id) {
  const match = matchModel.findById(id);
  if (!match) throw createError(404, 'Partido no encontrado.');
  return match;
}

/**
 * Genera todos los partidos round-robin para un ranking con soporte de múltiples vueltas.
 * Se llama cuando el admin u organizador genera el calendario.
 */
async function generateMatchesForRanking(rankingId, teamIds, user, rounds = 1) {
  const ranking = rankingModel.findById(rankingId);
  if (!ranking) throw createError(404, 'Ranking no encontrado.');

  const userId = typeof user === 'object' ? user.id : user;
  const userRole = typeof user === 'object' ? user.role : 'ADMIN';

  if (userRole === 'ORGANIZER' && ranking.createdBy !== userId) {
    throw createError(403, 'No tienes permisos para generar partidos en un ranking que no te pertenece.');
  }

  let finalTeamIds = Array.isArray(teamIds) && teamIds.length > 0 ? teamIds : [];
  if (finalTeamIds.length === 0) {
    const enrolledTeams = rankingModel.getTeams(rankingId);
    finalTeamIds = enrolledTeams.map(t => t.id);
  }

  if (finalTeamIds.length < 4) {
    throw createError(400, `Se necesitan al menos 4 equipos inscritos en el ranking para generar el calendario. Actualmente hay ${finalTeamIds.length} equipos inscritos.`);
  }

  const numRounds = Math.max(1, parseInt(rounds, 10) || 1);
  const db = getDb();

  // Comprobar si ya existen partidos generados para este ranking
  const existingMatches = matchModel.findAll({ rankingId });
  let preservedPlayedMatches = [];

  if (existingMatches && existingMatches.length > 0) {
    const existingTeamIds = new Set(existingMatches.flatMap(m => [m.teamOneId, m.teamTwoId]));
    const isSameTeams = existingTeamIds.size === finalTeamIds.length && finalTeamIds.every(id => existingTeamIds.has(id));

    if (isSameTeams) {
      throw createError(400, 'El calendario para este ranking ya ha sido generado previamente con estos mismos equipos y no se puede volver a generar.');
    }

    const activeSet = new Set(finalTeamIds);

    // 1. Eliminar partidos de equipos que ya no están inscritos en el ranking (Opción A)
    for (const m of existingMatches) {
      if (!activeSet.has(m.teamOneId) || !activeSet.has(m.teamTwoId)) {
        db.prepare("DELETE FROM matches WHERE id = ?").run(m.id);
      }
    }

    // 2. Preservar partidos ya disputados entre los equipos que siguen activos
    const remainingMatches = db.prepare("SELECT * FROM matches WHERE rankingId = ?").all(rankingId);
    preservedPlayedMatches = remainingMatches.filter(m => m.status !== 'PENDING_RESULT');

    // 3. Eliminar únicamente los partidos pendientes antiguos para regenerar el fixture
    db.prepare("DELETE FROM matches WHERE rankingId = ? AND status = 'PENDING_RESULT'").run(rankingId);
  }

  // Generar las parejas esperadas para los equipos activos y las vueltas solicitadas
  const pairs = generateRoundRobinPairs(finalTeamIds, numRounds);

  // Mapa de partidos jugados preservados para no duplicar enfrentamientos ya disputados
  const playedCounts = new Map();
  for (const pm of preservedPlayedMatches) {
    const key = [pm.teamOneId, pm.teamTwoId].sort().join('__');
    playedCounts.set(key, (playedCounts.get(key) || 0) + 1);
  }

  const now = new Date().toISOString();
  const matchesToCreate = [];

  for (const pair of pairs) {
    const key = [pair.teamOneId, pair.teamTwoId].sort().join('__');
    const available = playedCounts.get(key) || 0;
    if (available > 0) {
      playedCounts.set(key, available - 1);
    } else {
      matchesToCreate.push({
        id: crypto.randomUUID(),
        rankingId,
        teamOneId: pair.teamOneId,
        teamTwoId: pair.teamTwoId,
        createdAt: now,
        updatedAt: now,
      });
    }
  }

  if (matchesToCreate.length > 0) {
    matchModel.createMany(matchesToCreate);
  }

  await auditService.log({
    userId,
    action: 'GENERATE_MATCHES',
    entity: 'Ranking',
    entityId: rankingId,
    data: {
      matchesCreated: matchesToCreate.length,
      preservedMatches: preservedPlayedMatches.length,
      teamCount: finalTeamIds.length,
      rounds: numRounds
    },
  });

  return matchesToCreate.length;
}

/**
 * FLUJO CRÍTICO: Registro de resultado por TEAM_USER.
 *
 * Validaciones:
 * 1. Permiso: el usuario debe pertenecer a uno de los equipos del partido.
 * 2. Estado: el partido debe estar en PENDING_RESULT.
 * 3. Fecha: startDate <= matchDate <= endDate (backend definitivo).
 * 4. Sets: resultado coherente.
 * 5. Puntos: calculados exclusivamente en backend.
 */
async function submitResult(matchId, data, user) {
  const match = getById(matchId);

  // 1. Verificar ownership (CRÍTICO — nunca confiar en teamId del frontend)
  if (user.role !== 'ADMIN') {
    if (user.teamId !== match.teamOneId && user.teamId !== match.teamTwoId) {
      throw createError(403, 'No tienes permisos sobre este partido.');
    }
  }

  // 2. Verificar estado
  if (match.status !== 'PENDING_RESULT') {
    throw createError(409, `No se puede registrar resultado. Estado actual: ${match.status}`);
  }

  // 3. Validar fecha (CRÍTICO — regla principal del negocio)
  const dateValidation = validateMatchDate(data.matchDate, match.rankingStartDate, match.rankingEndDate);
  if (!dateValidation.valid) {
    throw createError(400, dateValidation.error);
  }

  // 4. Validar y calcular sets, juegos y puntos
  let setsTeamOne, setsTeamTwo, gamesTeamOne, gamesTeamTwo, pointsTeamOne, pointsTeamTwo;
  let set1TeamOne = null, set1TeamTwo = null, set2TeamOne = null, set2TeamTwo = null, set3TeamOne = null, set3TeamTwo = null;

  if (data.set1TeamOne !== undefined && data.set1TeamTwo !== undefined) {
    const res = calculateMatchFromGames(data);
    if (!res.valid) {
      throw createError(400, res.error);
    }
    set1TeamOne = res.set1TeamOne;
    set1TeamTwo = res.set1TeamTwo;
    set2TeamOne = res.set2TeamOne;
    set2TeamTwo = res.set2TeamTwo;
    set3TeamOne = res.set3TeamOne;
    set3TeamTwo = res.set3TeamTwo;
    setsTeamOne = res.setsTeamOne;
    setsTeamTwo = res.setsTeamTwo;
    gamesTeamOne = res.gamesTeamOne;
    gamesTeamTwo = res.gamesTeamTwo;
    pointsTeamOne = res.pointsTeamOne;
    pointsTeamTwo = res.pointsTeamTwo;
  } else {
    // Compatibilidad en caso de envío directo de sets
    const setsValidation = validateSets(data.setsTeamOne, data.setsTeamTwo);
    if (!setsValidation.valid) {
      throw createError(400, setsValidation.error);
    }
    const pts = calculatePoints(data.setsTeamOne, data.setsTeamTwo);
    setsTeamOne = Number(data.setsTeamOne);
    setsTeamTwo = Number(data.setsTeamTwo);
    pointsTeamOne = pts.pointsTeamOne;
    pointsTeamTwo = pts.pointsTeamTwo;
  }

  const now = new Date().toISOString();
  const updated = matchModel.updateResult(matchId, {
    matchDate: data.matchDate,
    set1TeamOne,
    set1TeamTwo,
    set2TeamOne,
    set2TeamTwo,
    set3TeamOne,
    set3TeamTwo,
    gamesTeamOne,
    gamesTeamTwo,
    setsTeamOne,
    setsTeamTwo,
    pointsTeamOne,
    pointsTeamTwo,
    resultSubmittedBy: user.id,
    resultSubmittedAt: now,
  });

  // 6. Notificar al equipo rival por email
  const rivalTeamId = user.teamId === match.teamOneId ? match.teamTwoId : match.teamTwoId === user.teamId ? match.teamOneId : match.teamTwoId;
  const actualRivalTeamId = match.teamOneId === user.teamId ? match.teamTwoId : match.teamOneId;

  await _notifyRival(updated, actualRivalTeamId, user);

  await auditService.log({
    userId: user.id,
    action: 'SUBMIT_RESULT',
    entity: 'Match',
    entityId: matchId,
    data: {
      matchDate: data.matchDate,
      sets: `${setsTeamOne}-${setsTeamTwo}`,
      games: `${gamesTeamOne ?? '-'}-${gamesTeamTwo ?? '-'}`,
      pointsTeamOne,
      pointsTeamTwo
    },
  });

  return updated;
}

/**
 * FLUJO: Confirmación de resultado por equipo rival.
 */
async function confirmResult(matchId, user) {
  const match = getById(matchId);

  // Solo el equipo rival puede confirmar (no quien registró)
  if (user.role !== 'ADMIN') {
    if (user.teamId !== match.teamOneId && user.teamId !== match.teamTwoId) {
      throw createError(403, 'No tienes permisos sobre este partido.');
    }
    // No puede confirmar quien registró
    if (user.teamId === _getSubmitterTeamId(match)) {
      throw createError(403, 'No puedes confirmar un resultado que tú mismo has registrado.');
    }
  }

  if (match.status !== 'PENDING_CONFIRMATION') {
    throw createError(409, `El partido no está pendiente de confirmación. Estado: ${match.status}`);
  }

  const now = new Date().toISOString();
  const confirmed = matchModel.confirm(matchId, user.id, now);

  // Notificar a ambos equipos
  await _notifyConfirmation(confirmed);

  await auditService.log({
    userId: user.id,
    action: 'CONFIRM_RESULT',
    entity: 'Match',
    entityId: matchId,
    data: { confirmedAt: now },
  });

  return confirmed;
}

/**
 * FLUJO: Comunicar incidencia por equipo rival.
 */
async function disputeResult(matchId, data, user) {
  const match = getById(matchId);

  if (user.role !== 'ADMIN') {
    if (user.teamId !== match.teamOneId && user.teamId !== match.teamTwoId) {
      throw createError(403, 'No tienes permisos sobre este partido.');
    }
    if (user.teamId === _getSubmitterTeamId(match)) {
      throw createError(403, 'No puedes comunicar incidencia sobre un resultado que tú mismo has registrado.');
    }
  }

  if (match.status !== 'PENDING_CONFIRMATION') {
    throw createError(409, `El partido no está pendiente de confirmación. Estado: ${match.status}`);
  }

  if (!data.description?.trim()) {
    throw createError(400, 'La descripción de la incidencia es obligatoria.');
  }

  const now = new Date().toISOString();
  matchModel.dispute(matchId, user.id, now);

  // Crear incidencia
  const incidentId = crypto.randomUUID();
  incidentModel.create({
    id: incidentId,
    matchId,
    reportedBy: user.id,
    reportedAt: now,
    description: data.description,
    createdAt: now,
    updatedAt: now,
  });

  // Notificar a administradores
  await _notifyAdminIncident(match, data.description, user.id);

  await auditService.log({
    userId: user.id,
    action: 'DISPUTE_RESULT',
    entity: 'Match',
    entityId: matchId,
    data: { description: data.description, incidentId },
  });

  return { match: matchModel.findById(matchId), incidentId };
}

/**
 * FLUJO: Modificación de resultado por ADMIN u ORGANIZER (con recálculo de puntos).
 */
async function adminUpdateMatch(matchId, data, user) {
  const match = getById(matchId);

  const userId = typeof user === 'object' ? user.id : user;
  const userRole = typeof user === 'object' ? user.role : 'ADMIN';

  if (userRole === 'ORGANIZER' && match.rankingCreatedBy !== userId) {
    throw createError(403, 'No tienes permisos para modificar un partido de un ranking que no te pertenece.');
  }

  // Si se modifican juegos o sets, recalcular
  if (data.set1TeamOne !== undefined && data.set1TeamTwo !== undefined) {
    const res = calculateMatchFromGames(data);
    if (!res.valid) throw createError(400, res.error);
    data.set1TeamOne = res.set1TeamOne;
    data.set1TeamTwo = res.set1TeamTwo;
    data.set2TeamOne = res.set2TeamOne;
    data.set2TeamTwo = res.set2TeamTwo;
    data.set3TeamOne = res.set3TeamOne;
    data.set3TeamTwo = res.set3TeamTwo;
    data.setsTeamOne = res.setsTeamOne;
    data.setsTeamTwo = res.setsTeamTwo;
    data.gamesTeamOne = res.gamesTeamOne;
    data.gamesTeamTwo = res.gamesTeamTwo;
    data.pointsTeamOne = res.pointsTeamOne;
    data.pointsTeamTwo = res.pointsTeamTwo;
  } else if (data.setsTeamOne !== undefined && data.setsTeamTwo !== undefined) {
    const setsValidation = validateSets(data.setsTeamOne, data.setsTeamTwo);
    if (!setsValidation.valid) throw createError(400, setsValidation.error);

    const { pointsTeamOne, pointsTeamTwo } = calculatePoints(data.setsTeamOne, data.setsTeamTwo);
    data.pointsTeamOne = pointsTeamOne;
    data.pointsTeamTwo = pointsTeamTwo;
  }

  if (data.matchDate) {
    const dateValidation = validateMatchDate(data.matchDate, match.rankingStartDate, match.rankingEndDate);
    if (!dateValidation.valid) throw createError(400, dateValidation.error);
  }

  const updated = matchModel.adminUpdate(matchId, data);

  await auditService.log({
    userId,
    action: 'ADMIN_UPDATE_MATCH',
    entity: 'Match',
    entityId: matchId,
    data: { previous: { sets: `${match.setsTeamOne}-${match.setsTeamTwo}` }, updated: data },
  });

  return updated;
}

// ─── Helpers privados ────────────────────────────────────────────────────────

function _getSubmitterTeamId(match) {
  if (!match.resultSubmittedBy) return null;
  const { getDb } = require('../../database/db');
  const db = getDb();
  const user = db.prepare('SELECT teamId FROM users WHERE id = ?').get(match.resultSubmittedBy);
  return user ? user.teamId : null;
}

async function _notifyRival(match, rivalTeamId, submitterUser) {
  try {
    const rivalEmails = teamModel.getEmails(rivalTeamId);
    const toAddresses = rivalEmails.map(e => e.email).join(', ');

    await emailService.sendResultNotificationEmail({
      to: toAddresses,
      rankingName: match.rankingName,
      teamOneName: match.teamOneName,
      teamTwoName: match.teamTwoName,
      matchDate: match.matchDate,
      setsTeamOne: match.setsTeamOne,
      setsTeamTwo: match.setsTeamTwo,
      pointsTeamOne: match.pointsTeamOne,
      pointsTeamTwo: match.pointsTeamTwo,
      set1TeamOne: match.set1TeamOne,
      set1TeamTwo: match.set1TeamTwo,
      set2TeamOne: match.set2TeamOne,
      set2TeamTwo: match.set2TeamTwo,
      set3TeamOne: match.set3TeamOne,
      set3TeamTwo: match.set3TeamTwo,
      gamesTeamOne: match.gamesTeamOne,
      gamesTeamTwo: match.gamesTeamTwo,
      submittedByEmail: match.submittedByEmail,
      confirmLink: `${config.frontend.url}/matches/${match.id}/confirm`,
      disputeLink: `${config.frontend.url}/matches/${match.id}/dispute`,
    });
  } catch (err) {
    console.error('[EMAIL]', err.message);
  }
}

async function _notifyConfirmation(match) {
  try {
    const team1Emails = teamModel.getEmails(match.teamOneId).map(e => e.email).join(', ');
    const team2Emails = teamModel.getEmails(match.teamTwoId).map(e => e.email).join(', ');
    const toAll = [team1Emails, team2Emails].filter(Boolean).join(', ');

    await emailService.sendResultConfirmedEmail({
      to: toAll,
      rankingName: match.rankingName,
      teamOneName: match.teamOneName,
      teamTwoName: match.teamTwoName,
      matchDate: match.matchDate,
      setsTeamOne: match.setsTeamOne,
      setsTeamTwo: match.setsTeamTwo,
    });
  } catch (err) {
    console.error('[EMAIL]', err.message);
  }
}

async function _notifyAdminIncident(match, description, reportedById) {
  try {
    const { getDb } = require('../../database/db');
    const db = getDb();
    const admins = db.prepare(`SELECT email FROM users WHERE role = 'ADMIN' AND active = 1`).all();
    const reportedByUser = db.prepare('SELECT email FROM users WHERE id = ?').get(reportedById);

    for (const admin of admins) {
      await emailService.sendIncidentNotificationEmail({
        to: admin.email,
        rankingName: match.rankingName,
        teamOneName: match.teamOneName,
        teamTwoName: match.teamTwoName,
        incidentDescription: description,
        reportedByEmail: reportedByUser?.email || 'Desconocido',
      });
    }
  } catch (err) {
    console.error('[EMAIL]', err.message);
  }
}

module.exports = { getAll, getById, generateMatchesForRanking, submitResult, confirmResult, disputeResult, adminUpdateMatch };
