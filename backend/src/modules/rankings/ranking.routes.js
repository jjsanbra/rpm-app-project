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

// Rutas públicas (con auth opcional para cambiar comportamiento según rol)
router.get('/', authenticateOptional, ctrl.getAll);
router.get('/:id', authenticateOptional, ctrl.getById);
router.get('/:id/teams', authenticateOptional, ctrl.getTeams);
router.get('/:id/sponsors', authenticateOptional, ctrl.getSponsors);

// Rutas protegidas — solo ADMIN
router.post('/', authenticate, authorize('ADMIN'), rankingValidation, validateRequest, ctrl.create);
router.put('/:id', authenticate, authorize('ADMIN'), rankingValidation, validateRequest, ctrl.update);
router.patch('/:id/active', authenticate, authorize('ADMIN'), [
  body('active').isBoolean().withMessage('active debe ser true o false.'),
], validateRequest, ctrl.toggleActive);

module.exports = router;
