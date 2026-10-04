'use strict';

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const ctrl = require('./incident.controller');
const { authenticate } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

// Todos los autenticados pueden ver incidencias de su equipo; admin ve todas
router.get('/', authenticate, ctrl.getAll);
router.get('/:id', authenticate, ctrl.getById);

// Solo ADMIN puede resolver/gestionar
router.post('/:id/resolve', authenticate, authorize('ADMIN'), [
  body('resolution').notEmpty().withMessage('La resolución es obligatoria.'),
  body('status').isIn(['RESOLVED', 'REJECTED']).withMessage('Estado inválido.'),
], validateRequest, ctrl.resolve);

router.patch('/:id/review', authenticate, authorize('ADMIN'), ctrl.markInReview);

module.exports = router;
