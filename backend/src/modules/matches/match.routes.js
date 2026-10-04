'use strict';

/**
 * @swagger
 * tags:
 *   name: Matches
 *   description: Gestión de partidos, resultados y confirmaciones
 */

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const ctrl = require('./match.controller');
const { authenticate, authenticateOptional } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

// Consulta pública
router.get('/', authenticateOptional, ctrl.getAll);
router.get('/:id', authenticateOptional, ctrl.getById);

// Generar partidos round-robin (solo ADMIN)
router.post('/ranking/:rankingId/generate', authenticate, authorize('ADMIN'), [
  body('teamIds').isArray({ min: 4 }).withMessage('Se necesitan al menos 4 equipos.'),
], validateRequest, ctrl.generateMatches);

/**
 * @swagger
 * /api/matches/{id}/result:
 *   post:
 *     summary: Registrar resultado de un partido
 *     tags: [Matches]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [matchDate, setsTeamOne, setsTeamTwo]
 *             properties:
 *               matchDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha real en que se disputó el partido (YYYY-MM-DD)
 *               setsTeamOne:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 2
 *               setsTeamTwo:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 2
 *     responses:
 *       200:
 *         description: Resultado registrado, pendiente de confirmación
 *       400:
 *         description: Datos inválidos o fecha fuera de rango
 *       403:
 *         description: Sin permisos sobre este partido
 *       409:
 *         description: El partido no está en estado correcto
 */
router.post('/:id/result', authenticate, [
  body('matchDate').isISO8601().withMessage('La fecha del partido debe ser una fecha válida (YYYY-MM-DD).'),
  body('setsTeamOne').isInt({ min: 0, max: 2 }).withMessage('Sets del equipo 1 debe ser 0, 1 o 2.'),
  body('setsTeamTwo').isInt({ min: 0, max: 2 }).withMessage('Sets del equipo 2 debe ser 0, 1 o 2.'),
], validateRequest, ctrl.submitResult);

/**
 * @swagger
 * /api/matches/{id}/confirm:
 *   post:
 *     summary: Confirmar resultado de un partido (equipo rival)
 *     tags: [Matches]
 *     security:
 *       - bearerAuth: []
 */
router.post('/:id/confirm', authenticate, ctrl.confirmResult);

/**
 * @swagger
 * /api/matches/{id}/dispute:
 *   post:
 *     summary: Comunicar incidencia sobre un resultado
 *     tags: [Matches]
 *     security:
 *       - bearerAuth: []
 */
router.post('/:id/dispute', authenticate, [
  body('description').notEmpty().withMessage('La descripción de la incidencia es obligatoria.'),
], validateRequest, ctrl.disputeResult);

/**
 * @swagger
 * /api/matches/{id}:
 *   put:
 *     summary: Modificar resultado (solo ADMIN)
 *     tags: [Matches]
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id', authenticate, authorize('ADMIN'), ctrl.adminUpdate);
router.put('/:id/admin-override', authenticate, authorize('ADMIN'), ctrl.adminUpdate);

module.exports = router;
