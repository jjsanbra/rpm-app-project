'use strict';

/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: Gestión de equipos, jugadores y emails de contacto
 */

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const ctrl = require('./team.controller');
const { authenticate, authenticateOptional } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

/**
 * @swagger
 * /api/teams:
 *   get:
 *     summary: Listar todos los equipos
 *     tags: [Teams]
 *     responses:
 *       200:
 *         description: Lista de equipos
 */
router.get('/', authenticateOptional, ctrl.getAll);

/**
 * @swagger
 * /api/teams/{id}:
 *   get:
 *     summary: Obtener información detallada de un equipo
 *     tags: [Teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalle del equipo
 *       404:
 *         description: Equipo no encontrado
 */
router.get('/:id', authenticateOptional, ctrl.getById);

/**
 * @swagger
 * /api/teams:
 *   post:
 *     summary: Crear un nuevo equipo (solo ADMIN)
 *     tags: [Teams]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, player1Name, player1Surname, player2Name, player2Surname, emails]
 *             properties:
 *               name:
 *                 type: string
 *               player1Name:
 *                 type: string
 *               player1Surname:
 *                 type: string
 *               player2Name:
 *                 type: string
 *               player2Surname:
 *                 type: string
 *               player3Name:
 *                 type: string
 *               player3Surname:
 *                 type: string
 *               emails:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: email
 *                 minItems: 1
 *                 maxItems: 2
 *     responses:
 *       201:
 *         description: Equipo creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', authenticate, authorize('ADMIN'), [
  body('name').notEmpty().withMessage('El nombre es obligatorio.'),
  body('player1Name').notEmpty().withMessage('El titular 1 (nombre) es obligatorio.'),
  body('player1Surname').notEmpty().withMessage('El titular 1 (apellido) es obligatorio.'),
  body('player2Name').notEmpty().withMessage('El titular 2 (nombre) es obligatorio.'),
  body('player2Surname').notEmpty().withMessage('El titular 2 (apellido) es obligatorio.'),
  body('emails').isArray({ min: 1, max: 2 }).withMessage('Entre 1 y 2 emails son obligatorios.'),
  body('emails.*').isEmail().withMessage('Email inválido.'),
  body('phone').optional().isString().trim(),
  body('phone2').optional().isString().trim(),
], validateRequest, ctrl.create);

/**
 * @swagger
 * /api/teams/{id}:
 *   put:
 *     summary: Actualizar datos de un equipo (solo ADMIN)
 *     tags: [Teams]
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
 *               player1Name:
 *                 type: string
 *               player1Surname:
 *                 type: string
 *               player2Name:
 *                 type: string
 *               player2Surname:
 *                 type: string
 *               reserveName:
 *                 type: string
 *               reserveSurname:
 *                 type: string
 *               phone:
 *                 type: string
 *               phone2:
 *                 type: string
 *               emails:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: email
 *     responses:
 *       200:
 *         description: Equipo actualizado
 */
router.put('/:id', authenticate, authorize('ADMIN'), [
  body('name').optional().notEmpty().withMessage('El nombre no puede estar vacío.'),
  body('player1Name').optional().notEmpty().withMessage('El titular 1 (nombre) no puede estar vacío.'),
  body('player1Surname').optional().notEmpty().withMessage('El titular 1 (apellido) no puede estar vacío.'),
  body('player2Name').optional().notEmpty().withMessage('El titular 2 (nombre) no puede estar vacío.'),
  body('player2Surname').optional().notEmpty().withMessage('El titular 2 (apellido) no puede estar vacío.'),
  body('phone').optional().isString().trim(),
  body('phone2').optional().isString().trim(),
  body('emails').optional().isArray({ min: 1, max: 2 }).withMessage('Entre 1 y 2 emails son obligatorios.'),
  body('emails.*').optional().isEmail().withMessage('Email inválido.'),
], validateRequest, ctrl.update);

/**
 * @swagger
 * /api/teams/{id}/active:
 *   patch:
 *     summary: Activar o desactivar un equipo (solo ADMIN)
 *     tags: [Teams]
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
 *         description: Estado modificado
 */
router.patch('/:id/active', authenticate, authorize('ADMIN'), [
  body('active').isBoolean().withMessage('active debe ser true o false.'),
], validateRequest, ctrl.toggleActive);

/**
 * @swagger
 * /api/teams/{id}/resend-welcome:
 *   post:
 *     summary: Reenviar email de bienvenida / activación a los contactos del equipo (solo ADMIN)
 *     tags: [Teams]
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
 *         description: Emails de bienvenida reenviados
 */
router.post('/:id/resend-welcome', authenticate, authorize('ADMIN'), ctrl.resendWelcomeEmail);

module.exports = router;
