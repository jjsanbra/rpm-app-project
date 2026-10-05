'use strict';

const crypto = require('crypto');
const rankingModel = require('./ranking.model');
const { createError } = require('../../utils/validators');
const auditService = require('../audit/audit.service');

/**
 * ranking.service.js — Lógica de negocio para Rankings con soporte multi-tenancy para ORGANIZER.
 */

function _checkRankingOwnership(ranking, user) {
  if (!user) return;
  if (user.role === 'ADMIN') return; // Admin tiene acceso total
  if (user.role === 'ORGANIZER') {
    if (ranking.createdBy && ranking.createdBy !== user.id) {
      throw createError(403, 'No tienes permisos para gestionar este ranking.');
    }
  }
}

function getAll(options = {}, user = null) {
  const opts = { ...options };
  if (user?.role === 'ADMIN') {
    opts.includeInactive = true;
  } else if (user?.role === 'ORGANIZER') {
    opts.includeInactive = true;
    opts.createdBy = user.id;
  }
  return rankingModel.findAll(opts);
}

function getById(id, user = null) {
  const ranking = rankingModel.findById(id);
  if (!ranking) throw createError(404, 'Ranking no encontrado.');
  if (ranking.rankingConfig && typeof ranking.rankingConfig === 'string') {
    try { ranking.rankingConfig = JSON.parse(ranking.rankingConfig); } catch {}
  }
  return ranking;
}

async function create(data, user) {
  _validateRankingDates(data.startDate, data.endDate);

  const now = new Date().toISOString();
  const ranking = rankingModel.create({
    id: crypto.randomUUID(),
    ...data,
    createdBy: user?.id || null,
    active: 1,
    createdAt: now,
    updatedAt: now,
  });

  await auditService.log({
    userId: user?.id || 'SYSTEM',
    action: 'CREATE_RANKING',
    entity: 'Ranking',
    entityId: ranking.id,
    data: { name: ranking.name },
  });

  return ranking;
}

async function update(id, data, user) {
  const current = getById(id);
  _checkRankingOwnership(current, user);

  if (data.startDate || data.endDate) {
    const startDate = data.startDate || current.startDate;
    const endDate = data.endDate || current.endDate;
    _validateRankingDates(startDate, endDate);
  }

  const updated = rankingModel.update(id, data);

  await auditService.log({
    userId: user?.id || 'SYSTEM',
    action: 'UPDATE_RANKING',
    entity: 'Ranking',
    entityId: id,
    data,
  });

  return updated;
}

async function toggleActive(id, active, user) {
  const current = getById(id);
  _checkRankingOwnership(current, user);

  const updated = rankingModel.update(id, { active: active ? 1 : 0 });

  await auditService.log({
    userId: user?.id || 'SYSTEM',
    action: active ? 'ACTIVATE_RANKING' : 'DEACTIVATE_RANKING',
    entity: 'Ranking',
    entityId: id,
    data: {},
  });

  return updated;
}

async function remove(id, user) {
  const current = getById(id);
  _checkRankingOwnership(current, user);

  rankingModel.remove(id);

  await auditService.log({
    userId: user?.id || 'SYSTEM',
    action: 'DELETE_RANKING',
    entity: 'Ranking',
    entityId: id,
    data: { name: current.name },
  });

  return { success: true };
}

function getTeams(rankingId) {
  getById(rankingId);
  return rankingModel.getTeams(rankingId);
}

function getSponsors(rankingId) {
  getById(rankingId);
  return rankingModel.getSponsors(rankingId);
}

function _validateRankingDates(startDate, endDate) {
  if (!startDate || !endDate) {
    throw createError(400, 'Las fechas de inicio y fin son obligatorias.');
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw createError(400, 'Fechas inválidas.');
  }

  if (end <= start) {
    throw createError(400, 'La fecha de fin debe ser posterior a la fecha de inicio.');
  }
}

module.exports = { getAll, getById, create, update, toggleActive, remove, getTeams, getSponsors };
