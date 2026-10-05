'use strict';

const svc = require('./rankingTeam.service');

async function getRegistrations(req, res, next) {
  try { res.json({ data: svc.getRegistrations(req.params.rankingId) }); } catch (err) { next(err); }
}

async function addTeam(req, res, next) {
  try {
    const reg = await svc.addTeam(req.params.rankingId, req.body.teamId, req.user);
    res.status(201).json({ data: reg });
  } catch (err) { next(err); }
}

async function removeTeam(req, res, next) {
  try {
    await svc.removeTeam(req.params.rankingId, req.params.teamId, req.user);
    res.json({ data: { message: 'Equipo desvinculado del ranking.' } });
  } catch (err) { next(err); }
}

async function generateMatches(req, res, next) {
  try {
    const { rounds } = req.body;
    const count = await svc.generateMatches(req.params.rankingId, req.user, rounds);
    res.json({ data: { message: `${count} partidos generados exitosamente.`, matchesCreated: count } });
  } catch (err) { next(err); }
}

module.exports = { getRegistrations, addTeam, removeTeam, generateMatches };
