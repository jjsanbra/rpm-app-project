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
 *     description: Inscribe un equipo en el ranking. Si el ranking ya cuenta con calendario generado, sincroniza y regenera automáticamente los partidos pendientes conservando los resultados ya disputados entre equipos activos.
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
 *         description: Equipo inscrito correctamente y calendario sincronizado
 *       400:
 *         description: El equipo ya está inscrito o datos inválidos
 *       403:
 *         description: No autorizado
 *       404:
 *         description: Ranking no encontrado
 */
router.post('/:rankingId/teams', authenticate, authorize('ADMIN', 'ORGANIZER'), [
  body('teamId').isUUID().withMessage('teamId inválido.'),
], validateRequest, ctrl.addTeam);

/**
 * @swagger
 * /api/ranking-team-registrations/{rankingId}/teams/{teamId}:
 *   delete:
 *     summary: Desinscribir un equipo de un ranking (ADMIN u ORGANIZER)
 *     description: Da de baja a un equipo de un ranking. Elimina los partidos asociados a dicho equipo y, si quedan al menos 4 equipos activos, regenera los partidos pendientes conservando los resultados jugados entre el resto de equipos.
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
 *         description: Equipo desinscrito del ranking y calendario sincronizado
 *       403:
 *         description: No autorizado
 *       404:
 *         description: El equipo no está registrado en este ranking
 */
router.delete('/:rankingId/teams/:teamId', authenticate, authorize('ADMIN', 'ORGANIZER'), ctrl.removeTeam);

/**
 * @swagger
 * /api/ranking-team-registrations/{rankingId}/generate-matches:
 *   post:
 *     summary: Generar calendario de partidos Round-Robin para los equipos inscritos (mínimo 4 equipos)
 *     description: Genera los partidos round-robin para todos los equipos inscritos activos en el ranking con soporte multivuelta. Preserva resultados disputados existentes.
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
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rounds:
 *                 type: integer
 *                 default: 1
 *                 minimum: 1
 *                 maximum: 10
 *                 description: Número de vueltas (1 = Ida, 2 = Ida y Vuelta, etc.)
 *     responses:
 *       200:
 *         description: Partidos generados exitosamente
 *       400:
 *         description: Menos de 4 equipos inscritos o calendario ya generado previamente con los mismos equipos
 */
router.post('/:rankingId/generate-matches', authenticate, authorize('ADMIN', 'ORGANIZER'), [
  body('rounds').optional().isInt({ min: 1, max: 10 }).withMessage('El número de vueltas debe ser entre 1 y 10.'),
], validateRequest, ctrl.generateMatches);

module.exports = router;
