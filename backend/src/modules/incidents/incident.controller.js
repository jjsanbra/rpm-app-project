'use strict';

const incidentService = require('./incident.service');

async function getAll(req, res, next) {
  try {
    const { matchId, status } = req.query;
    const incidents = incidentService.getAll({ matchId, status });
    res.json({ data: incidents });
  } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try { res.json({ data: incidentService.getById(req.params.id) }); } catch (err) { next(err); }
}

async function resolve(req, res, next) {
  try {
    const incident = await incidentService.resolve(req.params.id, req.body, req.user.id);
    res.json({ data: incident });
  } catch (err) { next(err); }
}

async function markInReview(req, res, next) {
  try {
    const incident = await incidentService.markInReview(req.params.id, req.user.id);
    res.json({ data: incident });
  } catch (err) { next(err); }
}

module.exports = { getAll, getById, resolve, markInReview };
