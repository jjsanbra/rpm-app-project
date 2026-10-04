'use strict';

const userModel = require('./user.model');
const { createError } = require('../../utils/validators');
const auditService = require('../audit/audit.service');

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

module.exports = { getAll, getById, toggleActive };
