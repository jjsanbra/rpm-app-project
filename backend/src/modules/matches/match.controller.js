'use strict';

const matchService = require('./match.service');

async function getAll(req, res, next) {
  try {
    const { rankingId, teamId, status } = req.query;
    const matches = matchService.getAll({ rankingId, teamId, status });
    res.json({ data: matches });
  } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try {
    const match = matchService.getById(req.params.id);
    res.json({ data: match });
  } catch (err) { next(err); }
}

async function generateMatches(req, res, next) {
  try {
    const { teamIds } = req.body;
    const count = await matchService.generateMatchesForRanking(req.params.rankingId, teamIds, req.user.id);
    res.status(201).json({ data: { message: `${count} partidos generados.`, matchesCreated: count } });
  } catch (err) { next(err); }
}

async function submitResult(req, res, next) {
  try {
    const match = await matchService.submitResult(req.params.id, req.body, req.user);
    res.json({ data: match, message: 'Resultado registrado. Pendiente de confirmación del equipo rival.' });
  } catch (err) { next(err); }
}

async function confirmResult(req, res, next) {
  try {
    const match = await matchService.confirmResult(req.params.id, req.user);
    res.json({ data: match, message: 'Resultado confirmado. La clasificación ha sido actualizada.' });
  } catch (err) { next(err); }
}

async function disputeResult(req, res, next) {
  try {
    const result = await matchService.disputeResult(req.params.id, req.body, req.user);
    res.json({ data: result, message: 'Incidencia comunicada. El administrador revisará el caso.' });
  } catch (err) { next(err); }
}

async function adminUpdate(req, res, next) {
  try {
    const match = await matchService.adminUpdateMatch(req.params.id, req.body, req.user.id);
    res.json({ data: match });
  } catch (err) { next(err); }
}

module.exports = { getAll, getById, generateMatches, submitResult, confirmResult, disputeResult, adminUpdate };
