'use strict';

const incidentModel = require('./incident.model');
const { createError } = require('../../utils/validators');
const emailService = require('../../services/email/email.service');
const auditService = require('../audit/audit.service');
const teamModel = require('../teams/team.model');

function getAll(filters = {}) {
  return incidentModel.findAll(filters);
}

function getById(id) {
  const incident = incidentModel.findById(id);
  if (!incident) throw createError(404, 'Incidencia no encontrada.');
  return incident;
}

async function resolve(id, data, adminUserId) {
  const incident = getById(id);

  if (['RESOLVED', 'REJECTED'].includes(incident.status)) {
    throw createError(409, 'La incidencia ya está resuelta.');
  }

  if (!data.resolution?.trim()) {
    throw createError(400, 'La resolución es obligatoria.');
  }

  const validStatuses = ['RESOLVED', 'REJECTED'];
  if (!validStatuses.includes(data.status)) {
    throw createError(400, `Estado inválido. Debe ser: ${validStatuses.join(', ')}`);
  }

  const now = new Date().toISOString();
  const updated = incidentModel.resolve(id, {
    status: data.status,
    resolution: data.resolution,
    resolvedBy: adminUserId,
    resolvedAt: now,
  });

  // Notificar a los equipos involucrados
  try {
    const team1Emails = teamModel.getEmails(incident.teamOneId).map(e => e.email).join(', ');
    const team2Emails = teamModel.getEmails(incident.teamTwoId).map(e => e.email).join(', ');
    const toAll = [team1Emails, team2Emails].filter(Boolean).join(', ');

    await emailService.sendIncidentResolvedEmail({
      to: toAll,
      rankingName: 'Ranking de Pádel',
      resolution: data.resolution,
      status: data.status,
    });
  } catch (err) {
    console.error('[EMAIL]', err.message);
  }

  await auditService.log({
    userId: adminUserId,
    action: 'RESOLVE_INCIDENT',
    entity: 'Incident',
    entityId: id,
    data: { status: data.status, resolution: data.resolution },
  });

  return updated;
}

async function markInReview(id, adminUserId) {
  getById(id);
  const updated = incidentModel.updateStatus(id, 'IN_REVIEW');

  await auditService.log({
    userId: adminUserId,
    action: 'REVIEW_INCIDENT',
    entity: 'Incident',
    entityId: id,
    data: {},
  });

  return updated;
}

module.exports = { getAll, getById, resolve, markInReview };
