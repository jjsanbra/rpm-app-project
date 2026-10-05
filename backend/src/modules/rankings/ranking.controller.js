'use strict';

const rankingService = require('./ranking.service');

/**
 * ranking.controller.js
 */

async function getAll(req, res, next) {
  try {
    const rankings = rankingService.getAll({}, req.user);
    res.json({ data: rankings });
  } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try {
    const ranking = rankingService.getById(req.params.id, req.user);
    res.json({ data: ranking });
  } catch (err) { next(err); }
}

async function create(req, res, next) {
  try {
    const ranking = await rankingService.create(req.body, req.user);
    res.status(201).json({ data: ranking });
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const ranking = await rankingService.update(req.params.id, req.body, req.user);
    res.json({ data: ranking });
  } catch (err) { next(err); }
}

async function toggleActive(req, res, next) {
  try {
    const { active } = req.body;
    const ranking = await rankingService.toggleActive(req.params.id, active, req.user);
    res.json({ data: ranking });
  } catch (err) { next(err); }
}

async function remove(req, res, next) {
  try {
    const result = await rankingService.remove(req.params.id, req.user);
    res.json({ data: result });
  } catch (err) { next(err); }
}

async function getTeams(req, res, next) {
  try {
    const teams = rankingService.getTeams(req.params.id);
    res.json({ data: teams });
  } catch (err) { next(err); }
}

async function getSponsors(req, res, next) {
  try {
    const sponsors = rankingService.getSponsors(req.params.id);
    res.json({ data: sponsors });
  } catch (err) { next(err); }
}

module.exports = { getAll, getById, create, update, toggleActive, remove, getTeams, getSponsors };
