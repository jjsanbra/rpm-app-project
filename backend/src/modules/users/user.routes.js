'use strict';

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const ctrl = require('./user.controller');
const { authenticate } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

router.get('/', authenticate, authorize('ADMIN'), ctrl.getAll);
router.get('/:id', authenticate, authorize('ADMIN'), ctrl.getById);
router.patch('/:id/active', authenticate, authorize('ADMIN'), [
  body('active').isBoolean().withMessage('active debe ser true o false.'),
], validateRequest, ctrl.toggleActive);

module.exports = router;
