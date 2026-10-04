'use strict';

const teamService = require('./team.service');

async function getAll(req, res, next) {
  try {
    const includeInactive = req.user?.role === 'ADMIN';
    const teams = teamService.getAll({ includeInactive });
    res.json({ data: teams });
  } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try {
    const team = teamService.getById(req.params.id);
    res.json({ data: team });
  } catch (err) { next(err); }
}

async function create(req, res, next) {
  try {
    const team = await teamService.create(req.body, req.user.id);
    res.status(201).json({ data: team });
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const team = await teamService.update(req.params.id, req.body, req.user.id);
    res.json({ data: team });
  } catch (err) { next(err); }
}

async function toggleActive(req, res, next) {
  try {
    const { active } = req.body;
    const team = await teamService.toggleActive(req.params.id, active, req.user.id);
    res.json({ data: team });
  } catch (err) { next(err); }
}

async function resendWelcomeEmail(req, res, next) {
  try {
    const { rankingName } = req.body;
    await teamService.resendWelcomeEmail(req.params.id, rankingName, req.user.id);
    res.json({ data: { message: 'Emails de bienvenida reenviados.' } });
  } catch (err) { next(err); }
}

module.exports = { getAll, getById, create, update, toggleActive, resendWelcomeEmail };
