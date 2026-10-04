'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const config = require('../../config/env');
const authModel = require('./auth.model');
const { createError } = require('../../utils/validators');
const emailService = require('../../services/email/email.service');
const auditService = require('../audit/audit.service');

const BCRYPT_ROUNDS = 12;

/**
 * auth.service.js — Lógica de negocio de autenticación.
 */

/**
 * Genera un JWT para el usuario dado.
 * @param {object} user - { id, role, teamId }
 * @returns {string} JWT token
 */
function generateJwt(user) {
  return jwt.sign(
    {
      sub: user.id,
      role: user.role,
      teamId: user.teamId || null,
    },
    config.jwt.secret,
    { expiresIn: config.jwt.expiration }
  );
}

/**
 * Autentica un usuario con email + contraseña.
 * @param {string} email
 * @param {string} password
 * @returns {{ token: string, user: object }}
 */
async function login(email, password) {
  const user = authModel.findUserByEmail(email);

  if (!user) {
    // Timing-safe: siempre comparar para evitar user enumeration
    await bcrypt.compare(password, '$2b$12$invalidhashtopreventtimingattack123456');
    throw createError(401, 'Credenciales incorrectas.');
  }

  if (!user.passwordHash) {
    throw createError(401, 'Acceso no configurado. Revisa tu email de bienvenida.');
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    throw createError(401, 'Credenciales incorrectas.');
  }

  const token = generateJwt(user);

  await auditService.log({
    userId: user.id,
    action: 'LOGIN',
    entity: 'User',
    entityId: user.id,
    data: { email: user.email },
  });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      teamId: user.teamId,
      teamName: user.teamName,
    },
  };
}

/**
 * Establece la contraseña inicial mediante token de setup.
 * @param {string} token
 * @param {string} password
 */
async function setupPassword(token, password) {
  const user = authModel.findUserBySetupToken(token);
  if (!user) {
    throw createError(400, 'Token de configuración inválido o expirado.');
  }

  validatePasswordStrength(password);

  const hash = await bcrypt.hash(password, BCRYPT_ROUNDS);
  authModel.setPassword(user.id, hash);

  await auditService.log({
    userId: user.id,
    action: 'SETUP_PASSWORD',
    entity: 'User',
    entityId: user.id,
    data: {},
  });
}

/**
 * Inicia el proceso de recuperación de contraseña.
 * @param {string} email
 */
async function forgotPassword(email) {
  const user = authModel.findUserByEmail(email);

  // No revelar si el email existe o no (seguridad)
  if (!user) return;

  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(); // 2 horas

  authModel.saveResetToken(user.id, token, expiresAt);

  await emailService.sendPasswordResetEmail({
    to: user.email,
    resetLink: `${config.frontend.url}/auth/reset-password?token=${token}`,
  });
}

/**
 * Restablece la contraseña con un token de reset válido.
 * @param {string} token
 * @param {string} password
 */
async function resetPassword(token, password) {
  const user = authModel.findUserByResetToken(token);
  if (!user) {
    throw createError(400, 'Token de recuperación inválido o expirado.');
  }

  validatePasswordStrength(password);

  const hash = await bcrypt.hash(password, BCRYPT_ROUNDS);
  authModel.resetPassword(user.id, hash);

  await auditService.log({
    userId: user.id,
    action: 'RESET_PASSWORD',
    entity: 'User',
    entityId: user.id,
    data: {},
  });
}

/**
 * Obtiene el perfil del usuario autenticado.
 * @param {string} userId
 * @returns {object}
 */
function getProfile(userId) {
  const user = authModel.findUserById(userId);
  if (!user) throw createError(404, 'Usuario no encontrado.');

  return {
    id: user.id,
    email: user.email,
    role: user.role,
    teamId: user.teamId,
    teamName: user.teamName,
  };
}

/**
 * Valida la fortaleza de una contraseña.
 * Mínimo: 8 caracteres.
 * @param {string} password
 */
function validatePasswordStrength(password) {
  if (!password || password.length < 8) {
    throw createError(400, 'La contraseña debe tener al menos 8 caracteres.');
  }
}

module.exports = { login, setupPassword, forgotPassword, resetPassword, getProfile, generateJwt };
