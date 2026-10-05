'use strict';

/**
 * @swagger
 * tags:
 *   name: Rankings
 *   description: Gestión de rankings de pádel
 */

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const ctrl = require('./ranking.controller');
const { authenticate, authenticateOptional } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

const rankingValidation = [
  body('name').notEmpty().withMessage('El nombre es obligatorio.'),
  body('startDate').isISO8601().withMessage('Fecha de inicio inválida.'),
  body('endDate').isISO8601().withMessage('Fecha de fin inválida.'),
];

/**
 * @swagger
 * /api/rankings:
 *   get:
 *     summary: Listar todos los rankings (público / admin)
 *     tags: [Rankings]
 *     responses:
 *       200:
 *         description: Lista de rankings disponibles
 */
router.get('/', authenticateOptional, ctrl.getAll);

/**
 * @swagger
 * /api/rankings/{id}:
 *   get:
 *     summary: Obtener detalle completo de un ranking
 *     tags: [Rankings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Información detallada del ranking
 *       404:
 *         description: Ranking no encontrado
 */
router.get('/:id', authenticateOptional, ctrl.getById);

/**
 * @swagger
 * /api/rankings/{id}/teams:
 *   get:
 *     summary: Listar equipos inscritos en el ranking
 *     tags: [Rankings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de equipos inscritos
 */
router.get('/:id/teams', authenticateOptional, ctrl.getTeams);

/**
 * @swagger
 * /api/rankings/{id}/sponsors:
 *   get:
 *     summary: Listar patrocinadores asociados al ranking
 *     tags: [Rankings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de patrocinadores
 */
router.get('/:id/sponsors', authenticateOptional, ctrl.getSponsors);

/**
 * @swagger
 * /api/rankings:
 *   post:
 *     summary: Crear un nuevo ranking (ADMIN u ORGANIZER)
 *     tags: [Rankings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, startDate, endDate]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ranking de Pádel Otoño 2026
 *               description:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *                 example: '2026-09-01'
 *               endDate:
 *                 type: string
 *                 format: date
 *                 example: '2026-12-15'
 *               rules:
 *                 type: string
 *               locationId:
 *                 type: string
 *               levelId:
 *                 type: string
 *               categoryId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ranking creado con éxito
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autenticado
 *       403:
 *         description: Requiere rol ADMIN u ORGANIZER
 */
router.post('/', authenticate, authorize('ADMIN', 'ORGANIZER'), rankingValidation, validateRequest, ctrl.create);

/**
 * @swagger
 * /api/rankings/{id}:
 *   put:
 *     summary: Actualizar datos de un ranking (ADMIN u ORGANIZER propietario)
 *     tags: [Rankings]
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               rules:
 *                 type: string
 *               locationId:
 *                 type: string
 *               levelId:
 *                 type: string
 *               categoryId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ranking actualizado
 *       403:
 *         description: Sin permisos sobre este ranking
 */
router.put('/:id', authenticate, authorize('ADMIN', 'ORGANIZER'), rankingValidation, validateRequest, ctrl.update);

/**
 * @swagger
 * /api/rankings/{id}/active:
 *   patch:
 *     summary: Activar o pausar/desactivar un ranking (ADMIN u ORGANIZER propietario)
 *     tags: [Rankings]
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
 *             required: [active]
 *             properties:
 *               active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Estado del ranking modificado
 *       403:
 *         description: Sin permisos sobre este ranking
 */
router.patch('/:id/active', authenticate, authorize('ADMIN', 'ORGANIZER'), [
  body('active').isBoolean().withMessage('active debe ser true o false.'),
], validateRequest, ctrl.toggleActive);

/**
 * @swagger
 * /api/rankings/{id}:
 *   delete:
 *     summary: Eliminar un ranking (ADMIN u ORGANIZER propietario)
 *     tags: [Rankings]
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
 *         description: Ranking eliminado
 *       403:
 *         description: Sin permisos sobre este ranking
 */
router.delete('/:id', authenticate, authorize('ADMIN', 'ORGANIZER'), ctrl.remove);

module.exports = router;
