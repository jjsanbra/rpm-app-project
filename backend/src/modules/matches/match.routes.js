'use strict';

/**
 * @swagger
 * tags:
 *   name: Matches
 *   description: Gestión de partidos, resultados y confirmaciones
 */

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const ctrl = require('./match.controller');
const { authenticate, authenticateOptional } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Listar partidos con filtros opcionales (rankingId, teamId, status)
 *     tags: [Matches]
 *     parameters:
 *       - in: query
 *         name: rankingId
 *         schema:
 *           type: string
 *         description: Filtrar por ID de ranking
 *       - in: query
 *         name: teamId
 *         schema:
 *           type: string
 *         description: Filtrar por ID de equipo
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [PENDING_RESULT, PENDING_CONFIRMATION, CONFIRMED, DISPUTED, CANCELLED]
 *         description: Filtrar por estado del partido
 *     responses:
 *       200:
 *         description: Lista de partidos
 */
router.get('/', authenticateOptional, ctrl.getAll);

/**
 * @swagger
 * /api/matches/{id}:
 *   get:
 *     summary: Obtener detalle completo de un partido por ID
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalle del partido
 *       404:
 *         description: Partido no encontrado
 */
router.get('/:id', authenticateOptional, ctrl.getById);

/**
 * @swagger
 * /api/matches/ranking/{rankingId}/generate:
 *   post:
 *     summary: Generar o regenerar calendario de partidos (ADMIN u ORGANIZER)
 *     description: Genera el fixture Round-Robin para los equipos inscritos en el ranking (mínimo 4). Permite configurar el número de vueltas (rounds). Preserva los partidos ya jugados entre equipos activos y elimina únicamente los partidos de equipos dados de baja y los partidos pendientes anteriores.
 *     tags: [Matches]
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
 *                 description: Número de vueltas a disputar (1 = Ida, 2 = Ida y Vuelta, etc.)
 *               teamIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 minItems: 4
 *                 description: Lista opcional de IDs de equipos. Si no se indica, se usan los equipos inscritos activos.
 *     responses:
 *       201:
 *         description: Partidos generados o regenerados exitosamente
 *       400:
 *         description: Menos de 4 equipos inscritos o el calendario ya ha sido generado previamente con estos mismos equipos
 *       403:
 *         description: No autorizado
 *       404:
 *         description: Ranking no encontrado
 */
router.post('/ranking/:rankingId/generate', authenticate, authorize('ADMIN', 'ORGANIZER'), [
  body('rounds').optional().isInt({ min: 1, max: 10 }).withMessage('El número de vueltas debe ser entre 1 y 10.'),
  body('teamIds').optional().isArray({ min: 4 }).withMessage('Se necesitan al menos 4 equipos.'),
], validateRequest, ctrl.generateMatches);

/**
 * @swagger
 * /api/matches/{id}/result:
 *   post:
 *     summary: Registrar resultado de un partido (Equipo participante)
 *     tags: [Matches]
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
 *             required: [matchDate, set1TeamOne, set1TeamTwo, set2TeamOne, set2TeamTwo]
 *             properties:
 *               matchDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha real en que se disputó el partido (YYYY-MM-DD)
 *               set1TeamOne:
 *                 type: integer
 *                 minimum: 0
 *                 description: Juegos ganados por Equipo 1 en Set 1
 *               set1TeamTwo:
 *                 type: integer
 *                 minimum: 0
 *                 description: Juegos ganados por Equipo 2 en Set 1
 *               set2TeamOne:
 *                 type: integer
 *                 minimum: 0
 *                 description: Juegos ganados por Equipo 1 en Set 2
 *               set2TeamTwo:
 *                 type: integer
 *                 minimum: 0
 *                 description: Juegos ganados por Equipo 2 en Set 2
 *               set3TeamOne:
 *                 type: integer
 *                 nullable: true
 *                 description: Juegos ganados por Equipo 1 en Set 3 (Desempate si 1-1)
 *               set3TeamTwo:
 *                 type: integer
 *                 nullable: true
 *                 description: Juegos ganados por Equipo 2 en Set 3 (Desempate si 1-1)
 *               setsTeamOne:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 2
 *                 description: Sets ganados por Equipo 1 (calculados automáticamente si se omiten)
 *               setsTeamTwo:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 2
 *                 description: Sets ganados por Equipo 2 (calculados automáticamente si se omiten)
 *     responses:
 *       200:
 *         description: Resultado registrado, pendiente de confirmación
 *       400:
 *         description: Datos inválidos o tanteo no reglamentario
 *       403:
 *         description: Sin permisos sobre este partido
 *       409:
 *         description: El partido no está en estado correcto
 */
router.post('/:id/result', authenticate, [
  body('matchDate').isISO8601().withMessage('La fecha del partido debe ser una fecha válida (YYYY-MM-DD).'),
  body('set1TeamOne').optional().isInt({ min: 0 }).withMessage('Set 1 Equipo 1 debe ser un entero >= 0.'),
  body('set1TeamTwo').optional().isInt({ min: 0 }).withMessage('Set 1 Equipo 2 debe ser un entero >= 0.'),
  body('set2TeamOne').optional().isInt({ min: 0 }).withMessage('Set 2 Equipo 1 debe ser un entero >= 0.'),
  body('set2TeamTwo').optional().isInt({ min: 0 }).withMessage('Set 2 Equipo 2 debe ser un entero >= 0.'),
  body('set3TeamOne').optional({ nullable: true }).isInt({ min: 0 }).withMessage('Set 3 Equipo 1 debe ser un entero >= 0.'),
  body('set3TeamTwo').optional({ nullable: true }).isInt({ min: 0 }).withMessage('Set 3 Equipo 2 debe ser un entero >= 0.'),
  body('setsTeamOne').optional().isInt({ min: 0, max: 2 }).withMessage('Sets del equipo 1 debe ser 0, 1 o 2.'),
  body('setsTeamTwo').optional().isInt({ min: 0, max: 2 }).withMessage('Sets del equipo 2 debe ser 0, 1 o 2.'),
], validateRequest, ctrl.submitResult);

/**
 * @swagger
 * /api/matches/{id}/confirm:
 *   post:
 *     summary: Confirmar resultado de un partido (Equipo rival)
 *     tags: [Matches]
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
 *         description: Resultado confirmado oficialmente y clasificación recalculada
 *       403:
 *         description: Solo el equipo rival puede confirmar
 */
router.post('/:id/confirm', authenticate, ctrl.confirmResult);

/**
 * @swagger
 * /api/matches/{id}/dispute:
 *   post:
 *     summary: Comunicar incidencia sobre un resultado (Equipo rival)
 *     tags: [Matches]
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
 *             required: [description]
 *             properties:
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Incidencia registrada y partido marcado como DISPUTED
 */
router.post('/:id/dispute', authenticate, [
  body('description').notEmpty().withMessage('La descripción de la incidencia es obligatoria.'),
], validateRequest, ctrl.disputeResult);

/**
 * @swagger
 * /api/matches/{id}/admin-override:
 *   put:
 *     summary: Modificación administrativa de acta / resultado (solo ADMIN)
 *     tags: [Matches]
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
 *               matchDate:
 *                 type: string
 *                 format: date
 *               set1TeamOne:
 *                 type: integer
 *               set1TeamTwo:
 *                 type: integer
 *               set2TeamOne:
 *                 type: integer
 *               set2TeamTwo:
 *                 type: integer
 *               set3TeamOne:
 *                 type: integer
 *                 nullable: true
 *               set3TeamTwo:
 *                 type: integer
 *                 nullable: true
 *               setsTeamOne:
 *                 type: integer
 *               setsTeamTwo:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [CONFIRMED, PENDING_CONFIRMATION, PENDING_RESULT, DISPUTED, CANCELLED]
 *               reason:
 *                 type: string
 *                 description: Motivo opcional de la resolución auditada
 *     responses:
 *       200:
 *         description: Acta de partido modificada y clasificación actualizada
 */
router.put('/:id', authenticate, authorize('ADMIN', 'ORGANIZER'), ctrl.adminUpdate);
router.put('/:id/admin-override', authenticate, authorize('ADMIN', 'ORGANIZER'), ctrl.adminUpdate);

// ─── PARTIDOS EN TIEMPO REAL / LIVE MATCH TRACKER ─────────────────────────
const liveCtrl = require('./liveMatch.controller');

/**
 * @swagger
 * /api/matches/live/active:
 *   get:
 *     summary: Obtener listado de partidos actualmente en vivo o pendientes de aceptación
 *     tags: [Matches]
 *     responses:
 *       200:
 *         description: Lista de partidos activos en vivo
 */
router.get('/live/active', authenticateOptional, liveCtrl.getActiveLiveMatches);

/**
 * @swagger
 * /api/matches/live/stream:
 *   get:
 *     summary: Streaming Server-Sent Events (SSE) global para cambios en cualquier partido en vivo
 *     tags: [Matches]
 *     responses:
 *       200:
 *         description: Conexión SSE establecida (text/event-stream)
 */
router.get('/live/stream', authenticateOptional, liveCtrl.streamGlobalLiveMatches);

/**
 * @swagger
 * /api/matches/{id}/live:
 *   get:
 *     summary: Obtener estado actual de la sesión en directo de un partido
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Estado y marcador en tiempo real del partido
 *       404:
 *         description: No hay sesión en directo activa
 */
router.get('/:id/live', authenticateOptional, liveCtrl.getLiveSession);

/**
 * @swagger
 * /api/matches/{id}/live/stream:
 *   get:
 *     summary: Conexión SSE para recibir actualizaciones en tiempo real del partido
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Flujo de eventos SSE con el marcador sincronizado
 */
router.get('/:id/live/stream', authenticateOptional, liveCtrl.streamLiveMatch);

/**
 * @swagger
 * /api/matches/{id}/live/request:
 *   post:
 *     summary: Solicitar inicio de tanteo en directo en pista (Equipo participante o Admin)
 *     tags: [Matches]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
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
 *               gameMode:
 *                 type: string
 *                 enum: [GOLDEN_POINT, ADVANTAGE]
 *                 default: GOLDEN_POINT
 *                 description: Modalidad de juego (Punto de Oro o Con Ventajas)
 *     responses:
 *       200:
 *         description: Solicitud creada en estado REQUESTED, esperando aceptación del rival
 *       403:
 *         description: Usuario no autorizado para este partido
 */
router.post('/:id/live/request', authenticate, liveCtrl.requestLiveMatch);

/**
 * @swagger
 * /api/matches/{id}/live/accept:
 *   post:
 *     summary: Aceptar invitación de partido en vivo en pista (Equipo rival o Admin)
 *     tags: [Matches]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
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
 *               gameMode:
 *                 type: string
 *                 enum: [GOLDEN_POINT, ADVANTAGE]
 *     responses:
 *       200:
 *         description: Partido aceptado y comenzado (estado IN_PROGRESS)
 *       400:
 *         description: El equipo solicitante no puede auto-aprobarse; debe ser el rival
 */
router.post('/:id/live/accept', authenticate, liveCtrl.acceptLiveMatch);

/**
 * @swagger
 * /api/matches/{id}/live/point:
 *   post:
 *     summary: Anotar un punto para un equipo en tiempo real
 *     tags: [Matches]
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
 *             required: [team]
 *             properties:
 *               team:
 *                 type: integer
 *                 enum: [1, 2]
 *                 description: 1 para Equipo 1, 2 para Equipo 2
 *     responses:
 *       200:
 *         description: Punto anotado y marcador actualizado y retransmitido
 */
router.post('/:id/live/point', authenticate, liveCtrl.scorePoint);

/**
 * @swagger
 * /api/matches/{id}/live/undo:
 *   post:
 *     summary: Deshacer el último punto anotado (Undo)
 *     tags: [Matches]
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
 *         description: Marcador revertido un punto
 */
router.post('/:id/live/undo', authenticate, liveCtrl.undoPoint);

/**
 * @swagger
 * /api/matches/{id}/live/sign:
 *   post:
 *     summary: Firma digital del acta oficial por el capitán de equipo
 *     tags: [Matches]
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
 *         description: Firma registrada. Si ambos capitanes han firmado, el partido pasa a CONFIRMED y actualiza el ranking
 */
router.post('/:id/live/sign', authenticate, liveCtrl.signLiveMatch);

module.exports = router;
