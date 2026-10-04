'use strict';

/**
 * authz.middleware.js — Middleware de autorización por rol.
 *
 * Separa autenticación (¿quién eres?) de autorización (¿qué puedes hacer?).
 * La autorización siempre se comprueba en backend — nunca confiar solo en el frontend.
 */

const { createError } = require('../utils/validators');

/**
 * Genera un middleware que verifica que el usuario autenticado tiene uno de los roles permitidos.
 * @param {...string} allowedRoles - Roles permitidos (ej: 'ADMIN', 'TEAM_USER')
 * @returns {Function} Express middleware
 */
function authorize(...allowedRoles) {
  return function authorizationMiddleware(req, res, next) {
    if (!req.user) {
      return next(createError(401, 'No autenticado.'));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(createError(403, 'No tienes permisos para realizar esta acción.'));
    }

    next();
  };
}

/**
 * Middleware que verifica que un TEAM_USER solo puede actuar sobre su propio equipo.
 * Se usa en combinación con el contexto del recurso solicitado.
 *
 * Uso: usar en el controller tras obtener el match/resource,
 * comparando req.user.teamId con resource.teamOneId / resource.teamTwoId.
 */
function requireTeamOwnership(teamOneId, teamTwoId) {
  return function ownershipMiddleware(req, res, next) {
    if (!req.user) {
      return next(createError(401, 'No autenticado.'));
    }

    // Los admins tienen acceso total
    if (req.user.role === 'ADMIN') {
      return next();
    }

    // TEAM_USER: debe pertenecer a uno de los dos equipos del partido
    if (req.user.teamId !== teamOneId && req.user.teamId !== teamTwoId) {
      return next(createError(403, 'No tienes permisos sobre este partido.'));
    }

    next();
  };
}

module.exports = { authorize, requireTeamOwnership };
