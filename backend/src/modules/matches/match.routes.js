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
 *     summary: Registrar resultado de un partido (Equipo participante)
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
 *             required: [matchDate, set1TeamOne, set1TeamTwo, set2TeamOne, set2TeamTwo]
 *             properties:
 *               matchDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha real en que se disputó el partido (YYYY-MM-DD)
 *               set1TeamOne:
 *                 type: integer
 *                 minimum: 0
 *                 description: Juegos ganados por Equipo 1 en Set 1
 *               set1TeamTwo:
 *                 type: integer
 *                 minimum: 0
 *                 description: Juegos ganados por Equipo 2 en Set 1
 *               set2TeamOne:
 *                 type: integer
 *                 minimum: 0
 *                 description: Juegos ganados por Equipo 1 en Set 2
 *               set2TeamTwo:
 *                 type: integer
 *                 minimum: 0
 *                 description: Juegos ganados por Equipo 2 en Set 2
 *               set3TeamOne:
 *                 type: integer
 *                 nullable: true
 *                 description: Juegos ganados por Equipo 1 en Set 3 (Desempate si 1-1)
 *               set3TeamTwo:
 *                 type: integer
 *                 nullable: true
 *                 description: Juegos ganados por Equipo 2 en Set 3 (Desempate si 1-1)
 *               setsTeamOne:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 2
 *                 description: Sets ganados por Equipo 1 (calculados automáticamente si se omiten)
 *               setsTeamTwo:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 2
 *                 description: Sets ganados por Equipo 2 (calculados automáticamente si se omiten)
 *     responses:
 *       200:
 *         description: Resultado registrado, pendiente de confirmación
 *       400:
 *         description: Datos inválidos o tanteo no reglamentario
 *       403:
 *         description: Sin permisos sobre este partido
 *       409:
 *         description: El partido no está en estado correcto
 */
router.post('/:id/result', authenticate, [
  body('matchDate').isISO8601().withMessage('La fecha del partido debe ser una fecha válida (YYYY-MM-DD).'),
  body('set1TeamOne').optional().isInt({ min: 0 }).withMessage('Set 1 Equipo 1 debe ser un entero >= 0.'),
  body('set1TeamTwo').optional().isInt({ min: 0 }).withMessage('Set 1 Equipo 2 debe ser un entero >= 0.'),
  body('set2TeamOne').optional().isInt({ min: 0 }).withMessage('Set 2 Equipo 1 debe ser un entero >= 0.'),
  body('set2TeamTwo').optional().isInt({ min: 0 }).withMessage('Set 2 Equipo 2 debe ser un entero >= 0.'),
  body('set3TeamOne').optional({ nullable: true }).isInt({ min: 0 }).withMessage('Set 3 Equipo 1 debe ser un entero >= 0.'),
  body('set3TeamTwo').optional({ nullable: true }).isInt({ min: 0 }).withMessage('Set 3 Equipo 2 debe ser un entero >= 0.'),
  body('setsTeamOne').optional().isInt({ min: 0, max: 2 }).withMessage('Sets del equipo 1 debe ser 0, 1 o 2.'),
  body('setsTeamTwo').optional().isInt({ min: 0, max: 2 }).withMessage('Sets del equipo 2 debe ser 0, 1 o 2.'),
], validateRequest, ctrl.submitResult);

/**
 * @swagger
 * /api/matches/{id}/confirm:
 *   post:
 *     summary: Confirmar resultado de un partido (Equipo rival)
 *     tags: [Matches]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resultado confirmado oficialmente y clasificación recalculada
 *       403:
 *         description: Solo el equipo rival puede confirmar
 */
router.post('/:id/confirm', authenticate, ctrl.confirmResult);

/**
 * @swagger
 * /api/matches/{id}/dispute:
 *   post:
 *     summary: Comunicar incidencia sobre un resultado (Equipo rival)
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
 *             required: [description]
 *             properties:
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Incidencia registrada y partido marcado como DISPUTED
 */
router.post('/:id/dispute', authenticate, [
  body('description').notEmpty().withMessage('La descripción de la incidencia es obligatoria.'),
], validateRequest, ctrl.disputeResult);

/**
 * @swagger
 * /api/matches/{id}/admin-override:
 *   put:
 *     summary: Modificación administrativa de acta / resultado (solo ADMIN)
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
 *             properties:
 *               matchDate:
 *                 type: string
 *                 format: date
 *               set1TeamOne:
 *                 type: integer
 *               set1TeamTwo:
 *                 type: integer
 *               set2TeamOne:
 *                 type: integer
 *               set2TeamTwo:
 *                 type: integer
 *               set3TeamOne:
 *                 type: integer
 *                 nullable: true
 *               set3TeamTwo:
 *                 type: integer
 *                 nullable: true
 *               setsTeamOne:
 *                 type: integer
 *               setsTeamTwo:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [CONFIRMED, PENDING_CONFIRMATION, PENDING_RESULT, DISPUTED, CANCELLED]
 *               reason:
 *                 type: string
 *                 description: Motivo opcional de la resolución auditada
 *     responses:
 *       200:
 *         description: Acta de partido modificada y clasificación actualizada
 */
router.put('/:id', authenticate, authorize('ADMIN'), ctrl.adminUpdate);
router.put('/:id/admin-override', authenticate, authorize('ADMIN'), ctrl.adminUpdate);

module.exports = router;
