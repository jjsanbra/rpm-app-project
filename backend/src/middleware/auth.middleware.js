'use strict';

/**
 * auth.middleware.js — Middleware de autenticación JWT.
 *
 * Verifica el token JWT y adjunta req.user al request:
 * req.user = { id, role, teamId }
 *
 * Nunca confiar en teamId enviado por el frontend.
 */

const jwt = require('jsonwebtoken');
const config = require('../config/env');
const { createError } = require('../utils/validators');

/**
 * Middleware que verifica el JWT y adjunta req.user.
 * Devuelve 401 si no hay token o el token es inválido/expirado.
 */
function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(createError(401, 'Token de autenticación requerido.'));
  }

  const token = authHeader.substring(7);

  try {
    const payload = jwt.verify(token, config.jwt.secret);
    req.user = {
      id: payload.sub,
      role: payload.role,
      teamId: payload.teamId || null,
    };
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return next(createError(401, 'El token ha expirado.'));
    }
    return next(createError(401, 'Token de autenticación inválido.'));
  }
}

/**
 * Middleware opcional: verifica JWT si existe pero no lo requiere.
 * Útil para rutas públicas que tienen comportamiento diferente si el usuario está autenticado.
 */
function authenticateOptional(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    req.user = null;
    return next();
  }

  const token = authHeader.substring(7);

  try {
    const payload = jwt.verify(token, config.jwt.secret);
    req.user = {
      id: payload.sub,
      role: payload.role,
      teamId: payload.teamId || null,
    };
  } catch {
    req.user = null;
  }

  next();
}

module.exports = { authenticate, authenticateOptional };
