'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('./classification.controller');
const { authenticateOptional } = require('../../middleware/auth.middleware');

// Clasificación pública
router.get('/:rankingId', authenticateOptional, ctrl.getOfficialClassification);
router.get('/:rankingId/official', authenticateOptional, ctrl.getOfficialClassification);
router.get('/:rankingId/provisional', authenticateOptional, ctrl.getProvisionalClassification);
router.get('/ranking/:rankingId', authenticateOptional, ctrl.getOfficialClassification);
router.get('/ranking/:rankingId/provisional', authenticateOptional, ctrl.getProvisionalClassification);

module.exports = router;
