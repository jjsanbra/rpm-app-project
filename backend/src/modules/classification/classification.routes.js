'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('./classification.controller');
const { authenticateOptional } = require('../../middleware/auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Classification
 *   description: Consulta de tablas de clasificación (Oficial y Provisional)
 */

/**
 * @swagger
 * /api/classification/{rankingId}/official:
 *   get:
 *     summary: Obtener clasificación oficial (solo partidos confirmados)
 *     tags: [Classification]
 *     parameters:
 *       - in: path
 *         name: rankingId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista ordenada de equipos por puntos totales, diferencia de sets, diferencia de juegos y diferencia de puntos.
 */
router.get('/:rankingId', authenticateOptional, ctrl.getOfficialClassification);
router.get('/:rankingId/official', authenticateOptional, ctrl.getOfficialClassification);

/**
 * @swagger
 * /api/classification/{rankingId}/provisional:
 *   get:
 *     summary: Obtener clasificación provisional (incluye partidos pendientes de confirmar)
 *     tags: [Classification]
 *     parameters:
 *       - in: path
 *         name: rankingId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista ordenada provisional de clasificación.
 */
router.get('/:rankingId/provisional', authenticateOptional, ctrl.getProvisionalClassification);
router.get('/ranking/:rankingId', authenticateOptional, ctrl.getOfficialClassification);
router.get('/ranking/:rankingId/provisional', authenticateOptional, ctrl.getProvisionalClassification);

module.exports = router;
