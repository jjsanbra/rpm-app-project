'use strict';

const bcrypt = require('bcrypt');
const crypto = require('crypto');
const teamModel = require('./team.model');
const userModel = require('../users/user.model');
const { createError, isValidEmail } = require('../../utils/validators');
const emailService = require('../../services/email/email.service');
const auditService = require('../audit/audit.service');
const config = require('../../config/env');

const BCRYPT_ROUNDS = 12;

/**
 * team.service.js — Lógica de negocio para Equipos.
 */

function getAll(options = {}) {
  return teamModel.findAll(options);
}

function getById(id) {
  const team = teamModel.findById(id);
  if (!team) throw createError(404, 'Equipo no encontrado.');
  return team;
}

/**
 * Crea un equipo y los usuarios TEAM_USER asociados.
 * Envía email de bienvenida con enlace de setup de contraseña.
 */
async function create(data, adminUserId) {
  _validateTeamData(data);

  const { emails, rankingName } = data;

  const teamId = crypto.randomUUID();
  const team = teamModel.create({ id: teamId, ...data });

  // Guardar emails del equipo
  teamModel.setEmails(teamId, emails);

  // Crear/asociar usuarios TEAM_USER para cada email
  for (const email of emails) {
    await _ensureTeamUser(email, teamId, team.name, rankingName || 'Ranking de Pádel');
  }

  await auditService.log({
    userId: adminUserId,
    action: 'CREATE_TEAM',
    entity: 'Team',
    entityId: teamId,
    data: { name: team.name, emails },
  });

  return teamModel.findById(teamId);
}

/**
 * Actualiza los datos de un equipo.
 */
async function update(id, data, adminUserId) {
  const team = getById(id);

  const { emails } = data;

  if (emails) {
    _validateEmails(emails);
    teamModel.setEmails(id, emails);

    // Sincronizar usuarios TEAM_USER con los nuevos emails
    for (const email of emails) {
      await _ensureTeamUser(email, id, team.name, 'Ranking de Pádel');
    }
  }

  const updated = teamModel.update(id, data);

  await auditService.log({
    userId: adminUserId,
    action: 'UPDATE_TEAM',
    entity: 'Team',
    entityId: id,
    data,
  });

  return updated;
}

/**
 * Activa o desactiva un equipo.
 */
async function toggleActive(id, active, adminUserId) {
  getById(id);
  const updated = teamModel.update(id, { active: active ? 1 : 0 });

  await auditService.log({
    userId: adminUserId,
    action: active ? 'ACTIVATE_TEAM' : 'DEACTIVATE_TEAM',
    entity: 'Team',
    entityId: id,
    data: {},
  });

  return updated;
}

/**
 * Reenvía el email de bienvenida al equipo.
 */
async function resendWelcomeEmail(id, rankingName, adminUserId) {
  const team = getById(id);
  const emails = teamModel.getEmails(id);

  for (const emailRecord of emails) {
    // Regenerar token de setup
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();

    const user = userModel.findByEmail(emailRecord.email);
    if (user) {
      userModel.saveSetupToken(user.id, token, expiresAt);

      await emailService.sendWelcomeEmail({
        to: emailRecord.email,
        teamName: team.name,
        rankingName: rankingName || 'Ranking de Pádel',
        setupLink: `${config.frontend.url}/auth/setup-password?token=${token}`,
      });
    }
  }

  await auditService.log({
    userId: adminUserId,
    action: 'RESEND_WELCOME_EMAIL',
    entity: 'Team',
    entityId: id,
    data: {},
  });
}

// ─── Helpers privados ────────────────────────────────────────────────────────

/**
 * Crea o asocia un usuario TEAM_USER al equipo y envía email de bienvenida.
 */
async function _ensureTeamUser(email, teamId, teamName, rankingName) {
  let user = userModel.findByEmail(email);

  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();

  if (!user) {
    const userId = crypto.randomUUID();
    const now = new Date().toISOString();
    userModel.create({
      id: userId,
      email,
      passwordHash: null,
      role: 'TEAM_USER',
      teamId,
      setupToken: token,
      setupTokenExpiresAt: expiresAt,
      createdAt: now,
      updatedAt: now,
    });
  } else {
    userModel.update(user.id, { teamId, setupToken: token, setupTokenExpiresAt: expiresAt });
  }

  await emailService.sendWelcomeEmail({
    to: email,
    teamName,
    rankingName,
    setupLink: `${config.frontend.url}/auth/setup-password?token=${token}`,
  });
}

function _validateTeamData(data) {
  if (!data.name?.trim()) throw createError(400, 'El nombre del equipo es obligatorio.');
  if (!data.player1Name?.trim() || !data.player1Surname?.trim()) throw createError(400, 'El jugador titular 1 es obligatorio.');
  if (!data.player2Name?.trim() || !data.player2Surname?.trim()) throw createError(400, 'El jugador titular 2 es obligatorio.');
  _validateEmails(data.emails);
}

function _validateEmails(emails) {
  if (!Array.isArray(emails) || emails.length < 1) {
    throw createError(400, 'El equipo debe tener al menos 1 email.');
  }
  if (emails.length > 2) {
    throw createError(400, 'El equipo puede tener como máximo 2 emails.');
  }
  for (const email of emails) {
    if (!isValidEmail(email)) {
      throw createError(400, `Email inválido: ${email}`);
    }
  }
}

module.exports = { getAll, getById, create, update, toggleActive, resendWelcomeEmail };
