'use strict';

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const ctrl = require('./rankingTeam.controller');
const { authenticate } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

router.get('/:rankingId/teams', authenticate, ctrl.getRegistrations);
router.post('/:rankingId/teams', authenticate, authorize('ADMIN'), [
  body('teamId').isUUID().withMessage('teamId inválido.'),
], validateRequest, ctrl.addTeam);
router.delete('/:rankingId/teams/:teamId', authenticate, authorize('ADMIN'), ctrl.removeTeam);
router.post('/:rankingId/generate-matches', authenticate, authorize('ADMIN'), ctrl.generateMatches);

module.exports = router;
