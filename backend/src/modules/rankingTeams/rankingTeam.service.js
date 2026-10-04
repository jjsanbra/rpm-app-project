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
    WHERE rt.rankingId = ?
    ORDER BY t.name
  `).all(rankingId);
}

async function addTeam(rankingId, teamId, adminUserId) {
  const db = getDb();
  const ranking = rankingModel.findById(rankingId);
  if (!ranking) throw createError(404, 'Ranking no encontrado.');

  // Verificar si ya está registrado
  const existing = db.prepare('SELECT * FROM ranking_teams WHERE rankingId = ? AND teamId = ?').get(rankingId, teamId);
  if (existing) {
    if (existing.status === 'ACTIVE') throw createError(409, 'El equipo ya está registrado en este ranking.');
    // Reactivar si estaba inactivo
    db.prepare('UPDATE ranking_teams SET status = \'ACTIVE\', updatedAt = ? WHERE id = ?').run(new Date().toISOString(), existing.id);
    return db.prepare('SELECT * FROM ranking_teams WHERE id = ?').get(existing.id);
  }

  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  db.prepare(`
    INSERT INTO ranking_teams (id, rankingId, teamId, status, createdAt, updatedAt)
    VALUES (?, ?, ?, 'ACTIVE', ?, ?)
  `).run(id, rankingId, teamId, now, now);

  await auditService.log({
    userId: adminUserId,
    action: 'ADD_TEAM_TO_RANKING',
    entity: 'RankingTeam',
    entityId: id,
    data: { rankingId, teamId },
  });

  return db.prepare('SELECT * FROM ranking_teams WHERE id = ?').get(id);
}

async function removeTeam(rankingId, teamId, adminUserId) {
  const db = getDb();
  const reg = db.prepare('SELECT * FROM ranking_teams WHERE rankingId = ? AND teamId = ?').get(rankingId, teamId);
  if (!reg) throw createError(404, 'El equipo no está registrado en este ranking.');

  db.prepare('UPDATE ranking_teams SET status = \'INACTIVE\', updatedAt = ? WHERE rankingId = ? AND teamId = ?').run(
    new Date().toISOString(), rankingId, teamId
  );

  await auditService.log({
    userId: adminUserId,
    action: 'REMOVE_TEAM_FROM_RANKING',
    entity: 'RankingTeam',
    entityId: reg.id,
    data: { rankingId, teamId },
  });
}

async function generateMatches(rankingId, adminUserId) {
  const db = getDb();
  const activeTeams = db.prepare(`
    SELECT teamId FROM ranking_teams WHERE rankingId = ? AND status = 'ACTIVE'
  `).all(rankingId);

  const teamIds = activeTeams.map(t => t.teamId);
  const count = await matchService.generateMatchesForRanking(rankingId, teamIds, adminUserId);
  return count;
}

module.exports = { getRegistrations, addTeam, removeTeam, generateMatches };
