'use strict';

const { getDb } = require('../../database/db');

/**
 * audit.service.js — Servicio de auditoría mínima.
 *
 * Registra acciones sensibles: registro de resultados, confirmaciones,
 * incidencias, resoluciones, modificaciones administrativas, cambios de permisos.
 */

/**
 * Registra una entrada en el log de auditoría.
 * @param {object} params
 * @param {string} params.userId - ID del usuario que realiza la acción
 * @param {string} params.action - Acción realizada (ej: 'SUBMIT_RESULT', 'CONFIRM_RESULT')
 * @param {string} params.entity - Entidad afectada (ej: 'Match', 'Team')
 * @param {string} params.entityId - ID de la entidad afectada
 * @param {object} [params.data] - Datos relevantes adicionales
 */
async function log({ userId, action, entity, entityId, data }) {
  try {
    const db = getDb();
    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO audit_logs (id, userId, action, entity, entityId, data, createdAt)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      userId || null,
      action,
      entity,
      entityId,
      data ? JSON.stringify(data) : null,
      now
    );
  } catch (err) {
    // La auditoría nunca debe romper el flujo principal
    console.error('[AUDIT ERROR]', err.message);
  }
}

/**
 * Obtiene todos los logs de auditoría con paginación.
 * @param {object} options
 * @param {number} [options.limit=50]
 * @param {number} [options.offset=0]
 * @param {string} [options.entity] - Filtrar por entidad
 * @param {string} [options.entityId] - Filtrar por ID de entidad
 * @returns {object[]}
 */
function getLogs({ limit = 50, offset = 0, entity, entityId } = {}) {
  const db = getDb();
  let query = `
    SELECT al.*, u.email as userEmail
    FROM audit_logs al
    LEFT JOIN users u ON al.userId = u.id
    WHERE 1=1
  `;
  const params = [];

  if (entity) {
    query += ' AND al.entity = ?';
    params.push(entity);
  }

  if (entityId) {
    query += ' AND al.entityId = ?';
    params.push(entityId);
  }

  query += ' ORDER BY al.createdAt DESC LIMIT ? OFFSET ?';
  params.push(limit, offset);

  const logs = db.prepare(query).all(...params);
  return logs.map(l => ({
    ...l,
    data: l.data ? JSON.parse(l.data) : null,
  }));
}

module.exports = { log, getLogs };
