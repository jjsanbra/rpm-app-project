'use strict';

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const ctrl = require('./team.controller');
const { authenticate, authenticateOptional } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

// Consultas públicas
router.get('/', authenticateOptional, ctrl.getAll);
router.get('/:id', authenticateOptional, ctrl.getById);

// Solo ADMIN
router.post('/', authenticate, authorize('ADMIN'), [
  body('name').notEmpty().withMessage('El nombre es obligatorio.'),
  body('player1Name').notEmpty().withMessage('El titular 1 (nombre) es obligatorio.'),
  body('player1Surname').notEmpty().withMessage('El titular 1 (apellido) es obligatorio.'),
  body('player2Name').notEmpty().withMessage('El titular 2 (nombre) es obligatorio.'),
  body('player2Surname').notEmpty().withMessage('El titular 2 (apellido) es obligatorio.'),
  body('emails').isArray({ min: 1, max: 2 }).withMessage('Entre 1 y 2 emails son obligatorios.'),
  body('emails.*').isEmail().withMessage('Email inválido.'),
], validateRequest, ctrl.create);

router.put('/:id', authenticate, authorize('ADMIN'), ctrl.update);
router.patch('/:id/active', authenticate, authorize('ADMIN'), [
  body('active').isBoolean().withMessage('active debe ser true o false.'),
], validateRequest, ctrl.toggleActive);
router.post('/:id/resend-welcome', authenticate, authorize('ADMIN'), ctrl.resendWelcomeEmail);

module.exports = router;
