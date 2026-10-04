'use strict';

const crypto = require('crypto');
const matchModel = require('./match.model');
const rankingModel = require('../rankings/ranking.model');
const teamModel = require('../teams/team.model');
const incidentModel = require('../incidents/incident.model');
const { calculatePoints, validateSets } = require('../../utils/scoring');
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
 * Genera todos los partidos round-robin para un ranking.
 * Se llama cuando el admin asocia equipos al ranking.
 */
async function generateMatchesForRanking(rankingId, teamIds, adminUserId) {
  const ranking = rankingModel.findById(rankingId);
  if (!ranking) throw createError(404, 'Ranking no encontrado.');

  if (teamIds.length < 4) {
    throw createError(400, 'Un ranking necesita al menos 4 equipos para generar partidos.');
  }

  // Eliminar partidos anteriores en PENDING_RESULT (si se regenera)
  const now = new Date().toISOString();
  const pairs = generateRoundRobinPairs(teamIds);

  const matchesToCreate = pairs
    .filter(pair => !matchModel.findExisting(rankingId, pair.teamOneId, pair.teamTwoId))
    .map(pair => ({
      id: crypto.randomUUID(),
      rankingId,
      teamOneId: pair.teamOneId,
      teamTwoId: pair.teamTwoId,
      createdAt: now,
      updatedAt: now,
    }));

  if (matchesToCreate.length > 0) {
    matchModel.createMany(matchesToCreate);
  }

  await auditService.log({
    userId: adminUserId,
    action: 'GENERATE_MATCHES',
    entity: 'Ranking',
    entityId: rankingId,
    data: { matchesCreated: matchesToCreate.length, teamCount: teamIds.length },
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

  // 4. Validar sets
  const setsValidation = validateSets(data.setsTeamOne, data.setsTeamTwo);
  if (!setsValidation.valid) {
    throw createError(400, setsValidation.error);
  }

  // 5. Calcular puntos — EXCLUSIVAMENTE en backend
  const { pointsTeamOne, pointsTeamTwo } = calculatePoints(data.setsTeamOne, data.setsTeamTwo);

  const now = new Date().toISOString();
  const updated = matchModel.updateResult(matchId, {
    matchDate: data.matchDate,
    setsTeamOne: Number(data.setsTeamOne),
    setsTeamTwo: Number(data.setsTeamTwo),
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
    data: { matchDate: data.matchDate, sets: `${data.setsTeamOne}-${data.setsTeamTwo}`, pointsTeamOne, pointsTeamTwo },
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
 * FLUJO: Modificación de resultado por ADMIN (con recálculo de puntos).
 */
async function adminUpdateMatch(matchId, data, adminUserId) {
  const match = getById(matchId);

  // Si se modifican sets, recalcular puntos
  if (data.setsTeamOne !== undefined && data.setsTeamTwo !== undefined) {
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
    userId: adminUserId,
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
