'use strict';

const { getDb } = require('../../database/db');

/**
 * ranking.model.js — Acceso a datos para Rankings.
 */

function findAll({ includeInactive = false } = {}) {
  const db = getDb();
  const query = `
    SELECT r.*,
           l.name as locationName,
           lv.name as levelName,
           c.name as categoryName,
           (SELECT COUNT(*) FROM ranking_teams rt WHERE rt.rankingId = r.id AND rt.status = 'ACTIVE') as teamCount
    FROM rankings r
    LEFT JOIN locations l ON r.locationId = l.id
    LEFT JOIN levels lv ON r.levelId = lv.id
    LEFT JOIN categories c ON r.categoryId = c.id
    ${includeInactive ? '' : 'WHERE r.active = 1'}
    ORDER BY r.createdAt DESC
  `;
  return db.prepare(query).all();
}

function findById(id) {
  const db = getDb();
  return db.prepare(`
    SELECT r.*,
           l.name as locationName,
           lv.name as levelName,
           c.name as categoryName,
           (SELECT COUNT(*) FROM ranking_teams rt WHERE rt.rankingId = r.id AND rt.status = 'ACTIVE') as teamCount
    FROM rankings r
    LEFT JOIN locations l ON r.locationId = l.id
    LEFT JOIN levels lv ON r.levelId = lv.id
    LEFT JOIN categories c ON r.categoryId = c.id
    WHERE r.id = ?
  `).get(id);
}

function create(data) {
  const db = getDb();
  db.prepare(`
    INSERT INTO rankings (id, name, description, startDate, endDate, regulation, active, poster, rankingConfig, locationId, levelId, categoryId, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    data.id, data.name, data.description || null, data.startDate, data.endDate,
    data.regulation || null, data.active ?? 1, data.poster || null,
    data.rankingConfig ? JSON.stringify(data.rankingConfig) : null,
    data.locationId || null, data.levelId || null, data.categoryId || null,
    data.createdAt, data.updatedAt
  );
  return findById(data.id);
}

function update(id, data) {
  const db = getDb();
  const fields = [];
  const values = [];

  const allowed = ['name', 'description', 'startDate', 'endDate', 'regulation', 'active', 'poster', 'rankingConfig', 'locationId', 'levelId', 'categoryId'];
  for (const field of allowed) {
    if (data[field] !== undefined) {
      fields.push(`${field} = ?`);
      values.push(field === 'rankingConfig' && data[field] ? JSON.stringify(data[field]) : data[field]);
    }
  }

  if (fields.length === 0) return findById(id);

  fields.push('updatedAt = ?');
  values.push(new Date().toISOString());
  values.push(id);

  db.prepare(`UPDATE rankings SET ${fields.join(', ')} WHERE id = ?`).run(...values);
  return findById(id);
}

function remove(id) {
  const db = getDb();
  db.prepare('DELETE FROM rankings WHERE id = ?').run(id);
}

function getTeams(rankingId) {
  const db = getDb();
  return db.prepare(`
    SELECT t.*, rt.status as registrationStatus, rt.id as registrationId, rt.createdAt as registeredAt
    FROM teams t
    JOIN ranking_teams rt ON rt.teamId = t.id
    WHERE rt.rankingId = ?
    ORDER BY t.name
  `).all(rankingId);
}

function getSponsors(rankingId) {
  const db = getDb();
  return db.prepare(`
    SELECT s.*
    FROM sponsors s
    JOIN ranking_sponsors rs ON rs.sponsorId = s.id
    WHERE rs.rankingId = ?
  `).all(rankingId);
}

module.exports = { findAll, findById, create, update, remove, getTeams, getSponsors };
