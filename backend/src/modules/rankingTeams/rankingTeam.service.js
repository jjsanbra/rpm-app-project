'use strict';

const crypto = require('crypto');
const { getDb } = require('../../database/db');
const rankingModel = require('../rankings/ranking.model');
const matchService = require('../matches/match.service');
const { createError } = require('../../utils/validators');
const auditService = require('../audit/audit.service');

/**
 * rankingTeam.service.js — Gestión de la relación Ranking ↔ Equipo.
 *
 * Cuando se asocia un equipo a un ranking, se registra en ranking_teams.
 * Cuando hay 4+ equipos activos, el admin puede generar partidos round-robin.
 */

function getRegistrations(rankingId) {
  const db = getDb();
  return db.prepare(`
    SELECT rt.*, t.name as teamName, t.player1Name, t.player1Surname, t.player2Name, t.player2Surname
    FROM ranking_teams rt
    JOIN teams t ON t.id = rt.teamId
    WHERE rt.rankingId = ? AND rt.status = 'ACTIVE'
    ORDER BY t.name
  `).all(rankingId);
}

function _checkRankingOwnership(ranking, user) {
  if (!user || user.role === 'ADMIN') return;
  if (user.role === 'ORGANIZER') {
    if (ranking.createdBy && ranking.createdBy !== user.id) {
      throw createError(403, 'No tienes permisos para gestionar este ranking.');
    }
  }
}

const { generateRoundRobinPairs } = require('../../utils/matchGenerator');

function _handleAutoCalendarSync(rankingId, userId) {
  const db = getDb();
  const existingMatches = db.prepare("SELECT * FROM matches WHERE rankingId = ?").all(rankingId);
  
  // Si no había calendario generado para este ranking, no hacemos nada
  if (!existingMatches || existingMatches.length === 0) {
    return;
  }

  const activeTeams = db.prepare("SELECT teamId FROM ranking_teams WHERE rankingId = ? AND status = 'ACTIVE'").all(rankingId);
  const activeTeamIds = activeTeams.map(t => t.teamId);
  const activeSet = new Set(activeTeamIds);

  // 1. Eliminar partidos de equipos que ya no están inscritos en el ranking (Opción A)
  for (const m of existingMatches) {
    if (!activeSet.has(m.teamOneId) || !activeSet.has(m.teamTwoId)) {
      db.prepare("DELETE FROM matches WHERE id = ?").run(m.id);
    }
  }

  // Caso 1: Hay menos de 4 equipos -> El calendario queda invalidado y se retiran los partidos pendientes
  if (activeTeamIds.length < 4) {
    db.prepare("DELETE FROM matches WHERE rankingId = ? AND status = 'PENDING_RESULT'").run(rankingId);
    auditService.log({
      userId: userId || 'SYSTEM',
      action: 'CLEAR_MATCHES_INSUFFICIENT_TEAMS',
      entity: 'Ranking',
      entityId: rankingId,
      data: { remainingActiveTeams: activeTeamIds.length }
    });
    return;
  }

  // Caso 2: Hay 4 o más equipos -> Comprobar si los equipos cambiaron
  const currentMatchTeamIds = new Set(existingMatches.flatMap(m => [m.teamOneId, m.teamTwoId]));
  const isSameTeams = currentMatchTeamIds.size === activeTeamIds.length && activeTeamIds.every(id => currentMatchTeamIds.has(id));

  // Si son los mismos equipos, no regeneramos
  if (isSameTeams) {
    return;
  }

  // Preservar partidos ya jugados entre los equipos que siguen activos
  const remainingMatches = db.prepare("SELECT * FROM matches WHERE rankingId = ?").all(rankingId);
  const preservedPlayedMatches = remainingMatches.filter(m => m.status !== 'PENDING_RESULT');

  // Eliminar únicamente los partidos pendientes antiguos
  db.prepare("DELETE FROM matches WHERE rankingId = ? AND status = 'PENDING_RESULT'").run(rankingId);

  // Si cambiaron los equipos, deducimos las vueltas y regeneramos los partidos pendientes faltantes
  const prevPairsCount = (currentMatchTeamIds.size * (currentMatchTeamIds.size - 1)) / 2;
  const rounds = prevPairsCount > 0 ? Math.max(1, Math.round(existingMatches.length / prevPairsCount)) : 1;

  const pairs = generateRoundRobinPairs(activeTeamIds, rounds);

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
    const stmt = db.prepare(`
      INSERT INTO matches (id, rankingId, teamOneId, teamTwoId, status, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, 'PENDING_RESULT', ?, ?)
    `);
    const insertMany = db.transaction((matches) => {
      for (const m of matches) {
        stmt.run(m.id, m.rankingId, m.teamOneId, m.teamTwoId, m.createdAt, m.updatedAt);
      }
    });
    insertMany(matchesToCreate);
  }

  auditService.log({
    userId: userId || 'SYSTEM',
    action: 'REGENERATE_MATCHES_AUTO',
    entity: 'Ranking',
    entityId: rankingId,
    data: {
      matchesCreated: matchesToCreate.length,
      preservedMatches: preservedPlayedMatches.length,
      teamCount: activeTeamIds.length,
      rounds
    }
  });
}

async function addTeam(rankingId, teamId, user) {
  const db = getDb();
  const ranking = rankingModel.findById(rankingId);
  if (!ranking) throw createError(404, 'Ranking no encontrado.');
  _checkRankingOwnership(ranking, user);

  // Verificar si ya está registrado
  const existing = db.prepare('SELECT * FROM ranking_teams WHERE rankingId = ? AND teamId = ?').get(rankingId, teamId);
  if (existing) {
    if (existing.status === 'ACTIVE') throw createError(409, 'El equipo ya está registrado en este ranking.');
    // Reactivar si estaba inactivo
    db.prepare('UPDATE ranking_teams SET status = \'ACTIVE\', updatedAt = ? WHERE id = ?').run(new Date().toISOString(), existing.id);
    _handleAutoCalendarSync(rankingId, user?.id);
    return db.prepare('SELECT * FROM ranking_teams WHERE id = ?').get(existing.id);
  }

  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  db.prepare(`
    INSERT INTO ranking_teams (id, rankingId, teamId, status, createdAt, updatedAt)
    VALUES (?, ?, ?, 'ACTIVE', ?, ?)
  `).run(id, rankingId, teamId, now, now);

  await auditService.log({
    userId: user?.id || 'SYSTEM',
    action: 'ADD_TEAM_TO_RANKING',
    entity: 'RankingTeam',
    entityId: id,
    data: { rankingId, teamId },
  });

  _handleAutoCalendarSync(rankingId, user?.id);
  return db.prepare('SELECT * FROM ranking_teams WHERE id = ?').get(id);
}

async function removeTeam(rankingId, teamId, user) {
  const db = getDb();
  const ranking = rankingModel.findById(rankingId);
  if (!ranking) throw createError(404, 'Ranking no encontrado.');
  _checkRankingOwnership(ranking, user);

  const reg = db.prepare('SELECT * FROM ranking_teams WHERE rankingId = ? AND teamId = ?').get(rankingId, teamId);
  if (!reg) throw createError(404, 'El equipo no está registrado en este ranking.');

  db.prepare('UPDATE ranking_teams SET status = \'INACTIVE\', updatedAt = ? WHERE rankingId = ? AND teamId = ?').run(
    new Date().toISOString(), rankingId, teamId
  );

  await auditService.log({
    userId: user?.id || 'SYSTEM',
    action: 'REMOVE_TEAM_FROM_RANKING',
    entity: 'RankingTeam',
    entityId: reg.id,
    data: { rankingId, teamId },
  });

  _handleAutoCalendarSync(rankingId, user?.id);
}

async function generateMatches(rankingId, user, rounds = 1) {
  const db = getDb();
  const ranking = rankingModel.findById(rankingId);
  if (!ranking) throw createError(404, 'Ranking no encontrado.');
  _checkRankingOwnership(ranking, user);

  const activeTeams = db.prepare(`
    SELECT teamId FROM ranking_teams WHERE rankingId = ? AND status = 'ACTIVE'
  `).all(rankingId);

  const teamIds = activeTeams.map(t => t.teamId);
  const count = await matchService.generateMatchesForRanking(rankingId, teamIds, user?.id || 'SYSTEM', rounds);
  return count;
}

module.exports = { getRegistrations, addTeam, removeTeam, generateMatches };
