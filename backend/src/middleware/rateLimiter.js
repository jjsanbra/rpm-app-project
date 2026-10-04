'use strict';

const rateLimit = require('express-rate-limit');
const config = require('../config/env');

/**
 * Rate limiter para endpoints de autenticación (login, reset password).
 * Previene ataques de fuerza bruta.
 */
const authRateLimiter = rateLimit({
  windowMs: config.rateLimit.auth.windowMin * 60 * 1000,
  max: config.rateLimit.auth.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: {
      status: 429,
      message: `Demasiados intentos. Por favor espera ${config.rateLimit.auth.windowMin} minutos antes de intentarlo de nuevo.`,
    },
  },
  skipSuccessfulRequests: true,
});

/**
 * Rate limiter general para endpoints sensibles.
 */
const generalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: {
      status: 429,
      message: 'Demasiadas solicitudes. Por favor inténtalo más tarde.',
    },
  },
});

module.exports = { authRateLimiter, generalRateLimiter };
