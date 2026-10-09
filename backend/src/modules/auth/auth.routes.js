'use strict';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticación y gestión de acceso
 */

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const authController = require('./auth.controller');
const { authenticate } = require('../../middleware/auth.middleware');
const { authRateLimiter } = require('../../middleware/rateLimiter');
const { validateRequest } = require('../../middleware/validateRequest');

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login exitoso, devuelve JWT
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Credenciales incorrectas
 *       429:
 *         description: Demasiados intentos
 */
router.post(
  '/login',
  authRateLimiter,
  [
    body('email').isEmail().withMessage('Email inválido.').normalizeEmail(),
    body('password').notEmpty().withMessage('La contraseña es obligatoria.'),
  ],
  validateRequest,
  authController.login
);

/**
 * @swagger
 * /api/auth/setup-password:
 *   post:
 *     summary: Configurar contraseña inicial mediante token de bienvenida
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SetupPasswordRequest'
 *     responses:
 *       200:
 *         description: Contraseña configurada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Token inválido o expirado
 */
router.post(
  '/setup-password',
  [
    body('token').notEmpty().withMessage('El token es obligatorio.'),
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres.'),
  ],
  validateRequest,
  authController.setupPassword
);

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Solicitar recuperación de contraseña
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForgotPasswordRequest'
 *     responses:
 *       200:
 *         description: Enlace de recuperación enviado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Email inválido
 */
router.post(
  '/forgot-password',
  authRateLimiter,
  [
    body('email').isEmail().withMessage('Email inválido.').normalizeEmail(),
  ],
  validateRequest,
  authController.forgotPassword
);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Restablecer contraseña con token de recuperación
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetPasswordRequest'
 *     responses:
 *       200:
 *         description: Contraseña restablecida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Token inválido o expirado
 */
router.post(
  '/reset-password',
  [
    body('token').notEmpty().withMessage('El token es obligatorio.'),
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres.'),
  ],
  validateRequest,
  authController.resetPassword
);

/**
 * @swagger
 * /api/auth/profile:
 *   get:
 *     summary: Obtener perfil del usuario autenticado
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: No autenticado
 */
router.get('/profile', authenticate, authController.getProfile);
router.get('/me', authenticate, authController.getProfile);

module.exports = router;

