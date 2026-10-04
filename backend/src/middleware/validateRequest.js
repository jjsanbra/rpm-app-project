'use strict';

const { validationResult } = require('express-validator');

/**
 * validateRequest.js — Middleware que lee los resultados de express-validator
 * y devuelve un error 400 si hay campos inválidos.
 */
function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error('Datos de entrada inválidos.');
    err.statusCode = 400;
    err.details = errors.array().map(e => ({ field: e.path, message: e.msg }));
    return next(err);
  }
  next();
}

module.exports = { validateRequest };
