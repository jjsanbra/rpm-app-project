'use strict';

const userService = require('./user.service');

async function getAll(req, res, next) {
  try { res.json({ data: userService.getAll() }); } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try { res.json({ data: userService.getById(req.params.id) }); } catch (err) { next(err); }
}

async function toggleActive(req, res, next) {
  try {
    const user = await userService.toggleActive(req.params.id, req.body.active, req.user.id);
    res.json({ data: user });
  } catch (err) { next(err); }
}

module.exports = { getAll, getById, toggleActive };
