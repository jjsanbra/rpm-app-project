'use strict';

const { getDb } = require('../../database/db');

/**
 * incident.model.js
 */

function findAll({ matchId, status } = {}) {
  const db = getDb();
  let query = `
    SELECT i.*,
           u_rep.email as reportedByEmail,
           u_res.email as resolvedByEmail,
           m.rankingId, m.teamOneId, m.teamTwoId,
           t1.name as teamOneName, t2.name as teamTwoName
    FROM incidents i
    JOIN matches m ON m.id = i.matchId
    JOIN teams t1 ON t1.id = m.teamOneId
    JOIN teams t2 ON t2.id = m.teamTwoId
    LEFT JOIN users u_rep ON u_rep.id = i.reportedBy
    LEFT JOIN users u_res ON u_res.id = i.resolvedBy
    WHERE 1=1
  `;
  const params = [];
  if (matchId) { query += ' AND i.matchId = ?'; params.push(matchId); }
  if (status) { query += ' AND i.status = ?'; params.push(status); }
  query += ' ORDER BY i.reportedAt DESC';
  return db.prepare(query).all(...params);
}

function findById(id) {
  const db = getDb();
  return db.prepare(`
    SELECT i.*,
           u_rep.email as reportedByEmail,
           u_res.email as resolvedByEmail,
           m.rankingId, m.teamOneId, m.teamTwoId,
           t1.name as teamOneName, t2.name as teamTwoName
    FROM incidents i
    JOIN matches m ON m.id = i.matchId
    JOIN teams t1 ON t1.id = m.teamOneId
    JOIN teams t2 ON t2.id = m.teamTwoId
    LEFT JOIN users u_rep ON u_rep.id = i.reportedBy
    LEFT JOIN users u_res ON u_res.id = i.resolvedBy
    WHERE i.id = ?
  `).get(id);
}

function create(data) {
  const db = getDb();
  db.prepare(`
    INSERT INTO incidents (id, matchId, reportedBy, reportedAt, description, status, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, 'OPEN', ?, ?)
  `).run(data.id, data.matchId, data.reportedBy, data.reportedAt, data.description, data.createdAt, data.updatedAt);
  return findById(data.id);
}

function resolve(id, data) {
  const db = getDb();
  db.prepare(`
    UPDATE incidents SET status = ?, resolution = ?, resolvedBy = ?, resolvedAt = ?, updatedAt = ? WHERE id = ?
  `).run(data.status, data.resolution, data.resolvedBy, data.resolvedAt, new Date().toISOString(), id);
  return findById(id);
}

function updateStatus(id, status) {
  const db = getDb();
  db.prepare('UPDATE incidents SET status = ?, updatedAt = ? WHERE id = ?').run(status, new Date().toISOString(), id);
  return findById(id);
}

module.exports = { findAll, findById, create, resolve, updateStatus };
