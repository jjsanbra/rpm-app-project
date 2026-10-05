'use strict';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de usuarios y organizadores del sistema
 */

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const ctrl = require('./user.controller');
const { authenticate } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/authz.middleware');
const { validateRequest } = require('../../middleware/validateRequest');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Listar todos los usuarios del sistema (solo ADMIN)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista completa de usuarios
 */
router.get('/', authenticate, authorize('ADMIN'), ctrl.getAll);

/**
 * @swagger
 * /api/users/organizers:
 *   get:
 *     summary: Listar todos los organizadores y rankings a su cargo (solo ADMIN)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de organizadores
 */
router.get('/organizers', authenticate, authorize('ADMIN'), ctrl.getOrganizers);

/**
 * @swagger
 * /api/users/organizers:
 *   post:
 *     summary: Crear un nuevo usuario ORGANIZER (solo ADMIN)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 6
 *     responses:
 *       201:
 *         description: Organizador creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       409:
 *         description: El email ya existe
 */
router.post('/organizers', authenticate, authorize('ADMIN'), [
  body('email').isEmail().withMessage('Email inválido.'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
], validateRequest, ctrl.createOrganizer);

/**
 * @swagger
 * /api/users/organizers/{id}:
 *   delete:
 *     summary: Eliminar un usuario ORGANIZER (solo ADMIN)
 *     tags: [Users]
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
 *         description: Organizador eliminado
 */
router.delete('/organizers/:id', authenticate, authorize('ADMIN'), ctrl.deleteOrganizer);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtener detalle de usuario por ID (solo ADMIN)
 *     tags: [Users]
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
 *         description: Detalle del usuario
 */
router.get('/:id', authenticate, authorize('ADMIN'), ctrl.getById);

/**
 * @swagger
 * /api/users/{id}/active:
 *   patch:
 *     summary: Activar o desactivar un usuario (solo ADMIN)
 *     tags: [Users]
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
 *         description: Estado de activación modificado
 */
router.patch('/:id/active', authenticate, authorize('ADMIN'), [
  body('active').isBoolean().withMessage('active debe ser true o false.'),
], validateRequest, ctrl.toggleActive);

module.exports = router;
