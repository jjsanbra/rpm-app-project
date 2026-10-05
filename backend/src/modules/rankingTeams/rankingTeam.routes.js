'use strict';

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const ctrl = require('./rankingTeam.controller');
const { authenticate } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

/**
 * @swagger
 * tags:
 *   name: RankingTeams
 *   description: Inscripción de equipos en rankings y generación de calendarios
 */

/**
 * @swagger
 * /api/ranking-team-registrations/{rankingId}/teams:
 *   get:
 *     summary: Listar equipos inscritos en un ranking
 *     tags: [RankingTeams]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: rankingId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de equipos inscritos
 */
router.get('/:rankingId/teams', authenticate, ctrl.getRegistrations);

/**
 * @swagger
 * /api/ranking-team-registrations/{rankingId}/teams:
 *   post:
 *     summary: Inscribir un equipo en un ranking (ADMIN u ORGANIZER)
 *     tags: [RankingTeams]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: rankingId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [teamId]
 *             properties:
 *               teamId:
 *                 type: string
 *                 format: uuid
 *     responses:
 *       201:
 *         description: Equipo inscrito correctamente
 *       400:
 *         description: El equipo ya está inscrito o datos inválidos
 */
router.post('/:rankingId/teams', authenticate, authorize('ADMIN', 'ORGANIZER'), [
  body('teamId').isUUID().withMessage('teamId inválido.'),
], validateRequest, ctrl.addTeam);

/**
 * @swagger
 * /api/ranking-team-registrations/{rankingId}/teams/{teamId}:
 *   delete:
 *     summary: Desinscribir un equipo de un ranking (ADMIN u ORGANIZER)
 *     tags: [RankingTeams]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: rankingId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Equipo desinscrito del ranking
 */
router.delete('/:rankingId/teams/:teamId', authenticate, authorize('ADMIN', 'ORGANIZER'), ctrl.removeTeam);

/**
 * @swagger
 * /api/ranking-team-registrations/{rankingId}/generate-matches:
 *   post:
 *     summary: Generar calendario de partidos Round-Robin para los equipos inscritos (mínimo 4 equipos)
 *     tags: [RankingTeams]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: rankingId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Partidos generados exitosamente
 *       400:
 *         description: Menos de 4 equipos inscritos o error de validación
 */
router.post('/:rankingId/generate-matches', authenticate, authorize('ADMIN', 'ORGANIZER'), ctrl.generateMatches);

module.exports = router;
