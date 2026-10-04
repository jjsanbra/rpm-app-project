'use strict';

const { getDb } = require('../../database/db');

/**
 * auth.model.js — Acceso a datos para autenticación.
 * Consultas directas a SQLite sin lógica de negocio.
 */

/**
 * Busca un usuario activo por email.
 * @param {string} email
 * @returns {object|undefined}
 */
function findUserByEmail(email) {
  const db = getDb();
  return db.prepare(`
    SELECT u.*, t.name as teamName
    FROM users u
    LEFT JOIN teams t ON u.teamId = t.id
    WHERE u.email = ? AND u.active = 1
  `).get(email.toLowerCase().trim());
}

/**
 * Busca un usuario por ID.
 * @param {string} id
 * @returns {object|undefined}
 */
function findUserById(id) {
  const db = getDb();
  return db.prepare(`
    SELECT u.*, t.name as teamName
    FROM users u
    LEFT JOIN teams t ON u.teamId = t.id
    WHERE u.id = ?
  `).get(id);
}

/**
 * Busca un usuario por token de setup de contraseña.
 * @param {string} token
 * @returns {object|undefined}
 */
function findUserBySetupToken(token) {
  const db = getDb();
  return db.prepare(`
    SELECT * FROM users
    WHERE setupToken = ?
    AND setupTokenExpiresAt > datetime('now')
    AND active = 1
  `).get(token);
}

/**
 * Busca un usuario por token de reset de contraseña.
 * @param {string} token
 * @returns {object|undefined}
 */
function findUserByResetToken(token) {
  const db = getDb();
  return db.prepare(`
    SELECT * FROM users
    WHERE resetToken = ?
    AND resetTokenExpiresAt > datetime('now')
    AND active = 1
  `).get(token);
}

/**
 * Actualiza la contraseña y limpia el token de setup.
 * @param {string} userId
 * @param {string} passwordHash
 */
function setPassword(userId, passwordHash) {
  const db = getDb();
  db.prepare(`
    UPDATE users
    SET passwordHash = ?,
        setupToken = NULL,
        setupTokenExpiresAt = NULL,
        updatedAt = datetime('now')
    WHERE id = ?
  `).run(passwordHash, userId);
}

/**
 * Guarda el token de reset de contraseña.
 * @param {string} userId
 * @param {string} token
 * @param {string} expiresAt — ISO datetime string
 */
function saveResetToken(userId, token, expiresAt) {
  const db = getDb();
  db.prepare(`
    UPDATE users
    SET resetToken = ?,
        resetTokenExpiresAt = ?,
        updatedAt = datetime('now')
    WHERE id = ?
  `).run(token, expiresAt, userId);
}

/**
 * Restablece la contraseña y limpia el token de reset.
 * @param {string} userId
 * @param {string} passwordHash
 */
function resetPassword(userId, passwordHash) {
  const db = getDb();
  db.prepare(`
    UPDATE users
    SET passwordHash = ?,
        resetToken = NULL,
        resetTokenExpiresAt = NULL,
        updatedAt = datetime('now')
    WHERE id = ?
  `).run(passwordHash, userId);
}

module.exports = {
  findUserByEmail,
  findUserById,
  findUserBySetupToken,
  findUserByResetToken,
  setPassword,
  saveResetToken,
  resetPassword,
};
