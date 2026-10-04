'use strict';

/**
 * errorHandler.js — Manejador centralizado de errores HTTP.
 *
 * Formato de respuesta de error consistente en toda la API:
 * {
 *   "error": {
 *     "status": 400,
 *     "message": "Descripción del error",
 *     "details": [...] // opcional, para errores de validación
 *   }
 * }
 */

/**
 * Middleware de manejo de errores (debe ser el último middleware registrado).
 */
function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  const status = err.statusCode || err.status || 500;
  const message = err.message || 'Error interno del servidor.';

  // Log en consola para debugging (en producción usar un logger estructurado)
  if (status >= 500) {
    console.error(`[ERROR] ${req.method} ${req.path} →`, err);
  }

  const response = {
    error: {
      status,
      message,
    },
  };

  if (err.details) {
    response.error.details = err.details;
  }

  res.status(status).json(response);
}

/**
 * Middleware para rutas no encontradas (404).
 */
function notFoundHandler(req, res) {
  res.status(404).json({
    error: {
      status: 404,
      message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
    },
  });
}

module.exports = { errorHandler, notFoundHandler };
