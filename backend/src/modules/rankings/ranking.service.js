'use strict';

const rankingModel = require('./ranking.model');
const { createError } = require('../../utils/validators');
const auditService = require('../audit/audit.service');

/**
 * ranking.service.js — Lógica de negocio para Rankings.
 */

function getAll(options = {}) {
  return rankingModel.findAll(options);
}

function getById(id) {
  const ranking = rankingModel.findById(id);
  if (!ranking) throw createError(404, 'Ranking no encontrado.');
  if (ranking.rankingConfig && typeof ranking.rankingConfig === 'string') {
    try { ranking.rankingConfig = JSON.parse(ranking.rankingConfig); } catch {}
  }
  return ranking;
}

async function create(data, adminUserId) {
  _validateRankingDates(data.startDate, data.endDate);

  const now = new Date().toISOString();
  const ranking = rankingModel.create({
    id: crypto.randomUUID(),
    ...data,
    active: 1,
    createdAt: now,
    updatedAt: now,
  });

  await auditService.log({
    userId: adminUserId,
    action: 'CREATE_RANKING',
    entity: 'Ranking',
    entityId: ranking.id,
    data: { name: ranking.name },
  });

  return ranking;
}

async function update(id, data, adminUserId) {
  getById(id); // verifica existencia

  if (data.startDate || data.endDate) {
    const current = rankingModel.findById(id);
    const startDate = data.startDate || current.startDate;
    const endDate = data.endDate || current.endDate;
    _validateRankingDates(startDate, endDate);
  }

  const updated = rankingModel.update(id, data);

  await auditService.log({
    userId: adminUserId,
    action: 'UPDATE_RANKING',
    entity: 'Ranking',
    entityId: id,
    data,
  });

  return updated;
}

async function toggleActive(id, active, adminUserId) {
  getById(id);
  const updated = rankingModel.update(id, { active: active ? 1 : 0 });

  await auditService.log({
    userId: adminUserId,
    action: active ? 'ACTIVATE_RANKING' : 'DEACTIVATE_RANKING',
    entity: 'Ranking',
    entityId: id,
    data: {},
  });

  return updated;
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

module.exports = { getAll, getById, create, update, toggleActive, getTeams, getSponsors };
