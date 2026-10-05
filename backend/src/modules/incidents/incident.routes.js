'use strict';

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const ctrl = require('./incident.controller');
const { authenticate } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

/**
 * @swagger
 * tags:
 *   name: Incidents
 *   description: Comunicación y resolución de incidencias arbitrales
 */

/**
 * @swagger
 * /api/incidents:
 *   get:
 *     summary: Listar incidencias (Admin ve todas, equipos ven las de sus partidos)
 *     tags: [Incidents]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: matchId
 *         schema:
 *           type: string
 *         description: Filtrar por ID de partido
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [OPEN, IN_REVIEW, RESOLVED, REJECTED]
 *         description: Filtrar por estado
 *     responses:
 *       200:
 *         description: Lista de incidencias
 */
router.get('/', authenticate, ctrl.getAll);

/**
 * @swagger
 * /api/incidents/{id}:
 *   get:
 *     summary: Obtener detalle de una incidencia
 *     tags: [Incidents]
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
 *         description: Detalle de la incidencia
 *       404:
 *         description: Incidencia no encontrada
 */
router.get('/:id', authenticate, ctrl.getById);

/**
 * @swagger
 * /api/incidents/{id}/resolve:
 *   post:
 *     summary: Resolver o rechazar una incidencia arbitral (solo ADMIN)
 *     tags: [Incidents]
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
 *             required: [resolution, status]
 *             properties:
 *               resolution:
 *                 type: string
 *                 description: Detalle de la resolución arbitral
 *               status:
 *                 type: string
 *                 enum: [RESOLVED, REJECTED]
 *     responses:
 *       200:
 *         description: Incidencia resuelta
 *       403:
 *         description: Requiere rol ADMIN
 */
router.post('/:id/resolve', authenticate, authorize('ADMIN'), [
  body('resolution').notEmpty().withMessage('La resolución es obligatoria.'),
  body('status').isIn(['RESOLVED', 'REJECTED']).withMessage('Estado inválido.'),
], validateRequest, ctrl.resolve);

/**
 * @swagger
 * /api/incidents/{id}/review:
 *   patch:
 *     summary: Marcar una incidencia en revisión (solo ADMIN)
 *     tags: [Incidents]
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
 *         description: Estado cambiado a IN_REVIEW
 *       403:
 *         description: Requiere rol ADMIN
 */
router.patch('/:id/review', authenticate, authorize('ADMIN'), ctrl.markInReview);

module.exports = router;
