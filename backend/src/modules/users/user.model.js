'use strict';

const { getDb } = require('../../database/db');

/**
 * user.model.js — Acceso a datos para Usuarios.
 */

function findByEmail(email) {
  const db = getDb();
  return db.prepare('SELECT * FROM users WHERE LOWER(email) = LOWER(?) AND active = 1').get(email.trim());
}

function findById(id) {
  const db = getDb();
  return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}

function findAll({ includeInactive = false } = {}) {
  const db = getDb();
  return db.prepare(`
    SELECT u.id, u.email, u.role, u.teamId, u.active, u.createdAt, u.updatedAt, t.name as teamName
    FROM users u
    LEFT JOIN teams t ON u.teamId = t.id
    ${includeInactive ? '' : 'WHERE u.active = 1'}
    ORDER BY u.role, u.email
  `).all();
}

function create(data) {
  const db = getDb();
  db.prepare(`
    INSERT INTO users (id, email, passwordHash, role, teamId, active, setupToken, setupTokenExpiresAt, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, 1, ?, ?, ?, ?)
  `).run(
    data.id, data.email.toLowerCase().trim(), data.passwordHash || null,
    data.role, data.teamId || null, data.setupToken || null,
    data.setupTokenExpiresAt || null, data.createdAt, data.updatedAt
  );
  return findById(data.id);
}

function update(id, data) {
  const db = getDb();
  const allowed = ['email', 'passwordHash', 'role', 'teamId', 'active', 'setupToken', 'setupTokenExpiresAt', 'resetToken', 'resetTokenExpiresAt'];
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

  db.prepare(`UPDATE users SET ${fields.join(', ')} WHERE id = ?`).run(...values);
  return findById(id);
}

function saveSetupToken(userId, token, expiresAt) {
  const db = getDb();
  db.prepare(`
    UPDATE users SET setupToken = ?, setupTokenExpiresAt = ?, updatedAt = ? WHERE id = ?
  `).run(token, expiresAt, new Date().toISOString(), userId);
}

function findOrganizers() {
  const db = getDb();
  return db.prepare(`
    SELECT u.id, u.email, u.role, u.active, u.createdAt, u.updatedAt,
           (SELECT COUNT(*) FROM rankings r WHERE r.createdBy = u.id) as rankingCount
    FROM users u
    WHERE u.role = 'ORGANIZER'
    ORDER BY u.createdAt DESC
  `).all();
}

function remove(id) {
  const db = getDb();
  db.prepare('DELETE FROM users WHERE id = ?').run(id);
}

module.exports = { findByEmail, findById, findAll, findOrganizers, create, update, remove, saveSetupToken };
