'use strict';

/**
 * validators.js — Utilidades de validación reutilizables.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Valida formato de email.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return typeof email === 'string' && EMAIL_REGEX.test(email.trim());
}

/**
 * Valida formato UUID v4.
 * @param {string} id
 * @returns {boolean}
 */
function isValidUUID(id) {
  return typeof id === 'string' && UUID_REGEX.test(id);
}

/**
 * Valida que una fecha en formato ISO (YYYY-MM-DD) sea válida.
 * @param {string} dateStr
 * @returns {boolean}
 */
function isValidDate(dateStr) {
  if (typeof dateStr !== 'string') return false;
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

/**
 * Valida que matchDate esté dentro del rango del ranking.
 * ranking.startDate <= matchDate <= ranking.endDate
 * @param {string} matchDate — YYYY-MM-DD
 * @param {string} startDate — YYYY-MM-DD
 * @param {string} endDate   — YYYY-MM-DD
 * @returns {{ valid: boolean, error?: string }}
 */
function validateMatchDate(matchDate, startDate, endDate) {
  if (!isValidDate(matchDate)) {
    return { valid: false, error: 'Fecha del partido inválida.' };
  }

  const match = new Date(matchDate);
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Comparar solo fechas (sin hora)
  match.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  if (match < start) {
    return {
      valid: false,
      error: `La fecha del partido (${matchDate}) no puede ser anterior al inicio del ranking (${startDate}).`,
    };
  }

  if (match > end) {
    return {
      valid: false,
      error: `La fecha del partido (${matchDate}) no puede ser posterior al fin del ranking (${endDate}).`,
    };
  }

  return { valid: true };
}

/**
 * Crea un objeto de error HTTP estándar.
 * @param {number} statusCode
 * @param {string} message
 * @param {any} [details]
 * @returns {{ statusCode: number, message: string, details?: any }}
 */
function createError(statusCode, message, details) {
  const err = new Error(message);
  err.statusCode = statusCode;
  if (details) err.details = details;
  return err;
}

module.exports = { isValidEmail, isValidUUID, isValidDate, validateMatchDate, createError };
