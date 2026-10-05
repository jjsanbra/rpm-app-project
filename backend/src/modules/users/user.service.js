'use strict';

const crypto = require('crypto');
const bcrypt = require('bcrypt');
const userModel = require('./user.model');
const { createError } = require('../../utils/validators');
const auditService = require('../audit/audit.service');

const BCRYPT_ROUNDS = 12;

function getAll() {
  return userModel.findAll({ includeInactive: true });
}

function getById(id) {
  const user = userModel.findById(id);
  if (!user) throw createError(404, 'Usuario no encontrado.');
  // Nunca exponer hash de contraseña
  const { passwordHash, setupToken, setupTokenExpiresAt, resetToken, resetTokenExpiresAt, ...safe } = user;
  return safe;
}

function getOrganizers() {
  return userModel.findOrganizers();
}

async function createOrganizer(data, adminUserId) {
  const email = data.email?.toLowerCase().trim();
  if (!email) throw createError(400, 'El email es obligatorio.');
  if (!data.password || data.password.length < 6) {
    throw createError(400, 'La contraseña debe tener al menos 6 caracteres.');
  }

  const existing = userModel.findByEmail(email);
  if (existing) {
    throw createError(409, 'El email ya está registrado.');
  }

  const passwordHash = await bcrypt.hash(data.password, BCRYPT_ROUNDS);
  const now = new Date().toISOString();

  const user = userModel.create({
    id: crypto.randomUUID(),
    email,
    passwordHash,
    role: 'ORGANIZER',
    createdAt: now,
    updatedAt: now,
  });

  await auditService.log({
    userId: adminUserId,
    action: 'CREATE_ORGANIZER',
    entity: 'User',
    entityId: user.id,
    data: { email: user.email, role: 'ORGANIZER' },
  });

  const { passwordHash: _, ...safe } = user;
  return safe;
}

async function toggleActive(id, active, adminUserId) {
  const user = userModel.findById(id);
  if (!user) throw createError(404, 'Usuario no encontrado.');

  userModel.update(id, { active: active ? 1 : 0 });

  await auditService.log({
    userId: adminUserId,
    action: active ? 'ACTIVATE_USER' : 'DEACTIVATE_USER',
    entity: 'User',
    entityId: id,
    data: {},
  });

  return getById(id);
}

async function deleteOrganizer(id, adminUserId) {
  const user = userModel.findById(id);
  if (!user) throw createError(404, 'Usuario no encontrado.');
  if (user.role !== 'ORGANIZER') {
    throw createError(400, 'Solo se pueden eliminar cuentas de rol ORGANIZER.');
  }

  userModel.remove(id);

  await auditService.log({
    userId: adminUserId,
    action: 'DELETE_ORGANIZER',
    entity: 'User',
    entityId: id,
    data: { email: user.email },
  });

  return { success: true };
}

module.exports = { getAll, getById, getOrganizers, createOrganizer, toggleActive, deleteOrganizer };
