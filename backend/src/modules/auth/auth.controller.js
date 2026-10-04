'use strict';

const authService = require('./auth.service');

/**
 * auth.controller.js — Controladores de autenticación.
 * Solo maneja request/response. La lógica está en el service.
 */

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
}

async function setupPassword(req, res, next) {
  try {
    const { token, password } = req.body;
    await authService.setupPassword(token, password);
    res.json({ data: { message: 'Contraseña configurada correctamente. Ya puedes iniciar sesión.' } });
  } catch (err) {
    next(err);
  }
}

async function forgotPassword(req, res, next) {
  try {
    const { email } = req.body;
    await authService.forgotPassword(email);
    // Siempre devolver 200 para no revelar si el email existe
    res.json({ data: { message: 'Si el email está registrado, recibirás las instrucciones de recuperación.' } });
  } catch (err) {
    next(err);
  }
}

async function resetPassword(req, res, next) {
  try {
    const { token, password } = req.body;
    await authService.resetPassword(token, password);
    res.json({ data: { message: 'Contraseña restablecida correctamente.' } });
  } catch (err) {
    next(err);
  }
}

async function getProfile(req, res, next) {
  try {
    const profile = authService.getProfile(req.user.id);
    res.json({ data: profile });
  } catch (err) {
    next(err);
  }
}

module.exports = { login, setupPassword, forgotPassword, resetPassword, getProfile };
