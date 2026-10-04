'use strict';

/**
 * crudFactory.js — Factory de CRUD genérico para entidades auxiliares desacopladas.
 *
 * Genera model, service, controller y routes para entidades simples como:
 * Level, Category, Sponsor, Location, CourtType.
 *
 * Esto sigue el principio DRY y facilita la extensión futura.
 */

const express = require('express');
const crypto = require('crypto');
const { getDb } = require('../database/db');
const { authenticate, authenticateOptional } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/authz.middleware');
const { validateRequest } = require('../middleware/validateRequest');

/**
 * Crea un router Express con CRUD completo para una tabla dada.
 * @param {string} tableName - Nombre de la tabla SQL
 * @param {string[]} writableFields - Campos que se pueden crear/actualizar
 * @param {object[]} [validationRules] - Reglas de express-validator opcionales
 */
function createCrudRouter(tableName, writableFields, validationRules = []) {
  const router = express.Router();

  // GET ALL
  router.get('/', authenticateOptional, (req, res, next) => {
    try {
      const db = getDb();
      const rows = db.prepare(`SELECT * FROM ${tableName} ORDER BY name`).all();
      res.json({ data: rows });
    } catch (err) { next(err); }
  });

  // GET BY ID
  router.get('/:id', authenticateOptional, (req, res, next) => {
    try {
      const db = getDb();
      const row = db.prepare(`SELECT * FROM ${tableName} WHERE id = ?`).get(req.params.id);
      if (!row) return next({ statusCode: 404, message: 'No encontrado.' });
      res.json({ data: row });
    } catch (err) { next(err); }
  });

  // CREATE (solo ADMIN)
  router.post('/', authenticate, authorize('ADMIN'), validationRules, validateRequest, (req, res, next) => {
    try {
      const db = getDb();
      const id = crypto.randomUUID();
      const now = new Date().toISOString();
      const fields = ['id', ...writableFields, 'createdAt', 'updatedAt'];
      const placeholders = fields.map(() => '?').join(', ');
      const values = [id, ...writableFields.map(f => req.body[f] ?? null), now, now];

      db.prepare(`INSERT INTO ${tableName} (${fields.join(', ')}) VALUES (${placeholders})`).run(...values);
      const created = db.prepare(`SELECT * FROM ${tableName} WHERE id = ?`).get(id);
      res.status(201).json({ data: created });
    } catch (err) { next(err); }
  });

  // UPDATE (solo ADMIN)
  router.put('/:id', authenticate, authorize('ADMIN'), (req, res, next) => {
    try {
      const db = getDb();
      const existing = db.prepare(`SELECT * FROM ${tableName} WHERE id = ?`).get(req.params.id);
      if (!existing) return next({ statusCode: 404, message: 'No encontrado.' });

      const fieldsToUpdate = writableFields.filter(f => req.body[f] !== undefined);
      if (fieldsToUpdate.length === 0) return res.json({ data: existing });

      const setClause = [...fieldsToUpdate.map(f => `${f} = ?`), 'updatedAt = ?'].join(', ');
      const values = [...fieldsToUpdate.map(f => req.body[f]), new Date().toISOString(), req.params.id];

      db.prepare(`UPDATE ${tableName} SET ${setClause} WHERE id = ?`).run(...values);
      const updated = db.prepare(`SELECT * FROM ${tableName} WHERE id = ?`).get(req.params.id);
      res.json({ data: updated });
    } catch (err) { next(err); }
  });

  // DELETE (solo ADMIN)
  router.delete('/:id', authenticate, authorize('ADMIN'), (req, res, next) => {
    try {
      const db = getDb();
      db.prepare(`DELETE FROM ${tableName} WHERE id = ?`).run(req.params.id);
      res.json({ data: { message: 'Eliminado correctamente.' } });
    } catch (err) { next(err); }
  });

  return router;
}

module.exports = { createCrudRouter };
