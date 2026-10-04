'use strict';

const { getDb } = require('../../database/db');

/**
 * match.model.js — Acceso a datos para Partidos.
 */

const MATCH_SELECT = `
  SELECT
    m.*,
    t1.name as teamOneName, t1.player1Name as t1p1Name, t1.player1Surname as t1p1Surname,
    t1.player2Name as t1p2Name, t1.player2Surname as t1p2Surname,
    t2.name as teamTwoName, t2.player1Name as t2p1Name, t2.player1Surname as t2p1Surname,
    t2.player2Name as t2p2Name, t2.player2Surname as t2p2Surname,
    u_sub.email as submittedByEmail,
    u_conf.email as confirmedByEmail,
    u_disp.email as disputedByEmail,
    r.name as rankingName, r.startDate as rankingStartDate, r.endDate as rankingEndDate
  FROM matches m
  JOIN teams t1 ON t1.id = m.teamOneId
  JOIN teams t2 ON t2.id = m.teamTwoId
  JOIN rankings r ON r.id = m.rankingId
  LEFT JOIN users u_sub ON u_sub.id = m.resultSubmittedBy
  LEFT JOIN users u_conf ON u_conf.id = m.confirmedBy
  LEFT JOIN users u_disp ON u_disp.id = m.disputedBy
`;

function findAll({ rankingId, teamId, status } = {}) {
  const db = getDb();
  let query = MATCH_SELECT + ' WHERE 1=1';
  const params = [];

  if (rankingId) { query += ' AND m.rankingId = ?'; params.push(rankingId); }
  if (teamId) { query += ' AND (m.teamOneId = ? OR m.teamTwoId = ?)'; params.push(teamId, teamId); }
  if (status) { query += ' AND m.status = ?'; params.push(status); }

  query += ' ORDER BY m.createdAt DESC';
  return db.prepare(query).all(...params);
}

function findById(id) {
  const db = getDb();
  return db.prepare(MATCH_SELECT + ' WHERE m.id = ?').get(id);
}

function findExisting(rankingId, teamOneId, teamTwoId) {
  const db = getDb();
  return db.prepare(`
    SELECT * FROM matches
    WHERE rankingId = ?
    AND ((teamOneId = ? AND teamTwoId = ?) OR (teamOneId = ? AND teamTwoId = ?))
  `).get(rankingId, teamOneId, teamTwoId, teamTwoId, teamOneId);
}

function createMany(matches) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO matches (id, rankingId, teamOneId, teamTwoId, status, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, 'PENDING_RESULT', ?, ?)
  `);
  const insertMany = db.transaction((items) => {
    for (const m of items) stmt.run(m.id, m.rankingId, m.teamOneId, m.teamTwoId, m.createdAt, m.updatedAt);
  });
  insertMany(matches);
}

function updateResult(id, data) {
  const db = getDb();
  db.prepare(`
    UPDATE matches SET
      matchDate = ?, setsTeamOne = ?, setsTeamTwo = ?,
      pointsTeamOne = ?, pointsTeamTwo = ?,
      resultSubmittedBy = ?, resultSubmittedAt = ?,
      status = 'PENDING_CONFIRMATION', updatedAt = ?
    WHERE id = ?
  `).run(
    data.matchDate, data.setsTeamOne, data.setsTeamTwo,
    data.pointsTeamOne, data.pointsTeamTwo,
    data.resultSubmittedBy, data.resultSubmittedAt,
    new Date().toISOString(), id
  );
  return findById(id);
}

function confirm(id, userId, confirmedAt) {
  const db = getDb();
  db.prepare(`
    UPDATE matches SET status = 'CONFIRMED', confirmedBy = ?, confirmedAt = ?, updatedAt = ? WHERE id = ?
  `).run(userId, confirmedAt, new Date().toISOString(), id);
  return findById(id);
}

function dispute(id, userId, disputedAt) {
  const db = getDb();
  db.prepare(`
    UPDATE matches SET status = 'DISPUTED', disputedBy = ?, disputedAt = ?, updatedAt = ? WHERE id = ?
  `).run(userId, disputedAt, new Date().toISOString(), id);
  return findById(id);
}

function adminUpdate(id, data) {
  const db = getDb();
  const allowed = ['matchDate', 'setsTeamOne', 'setsTeamTwo', 'pointsTeamOne', 'pointsTeamTwo', 'status'];
  const fields = [];
  const values = [];

  for (const field of allowed) {
    if (data[field] !== undefined) {
      fields.push(`${field} = ?`);
      values.push(data[field]);
    }
  }
  if (fields.length === 0) return findById(id);
  fields.push('updatedAt = ?');
  values.push(new Date().toISOString());
  values.push(id);

  db.prepare(`UPDATE matches SET ${fields.join(', ')} WHERE id = ?`).run(...values);
  return findById(id);
}

function cancel(id) {
  const db = getDb();
  db.prepare(`UPDATE matches SET status = 'CANCELLED', updatedAt = ? WHERE id = ?`).run(new Date().toISOString(), id);
  return findById(id);
}

module.exports = { findAll, findById, findExisting, createMany, updateResult, confirm, dispute, adminUpdate, cancel };
