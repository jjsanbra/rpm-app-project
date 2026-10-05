'use strict';

const userService = require('./user.service');

async function getAll(req, res, next) {
  try { res.json({ data: userService.getAll() }); } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try { res.json({ data: userService.getById(req.params.id) }); } catch (err) { next(err); }
}

async function getOrganizers(req, res, next) {
  try {
    const organizers = userService.getOrganizers();
    res.json({ data: organizers });
  } catch (err) { next(err); }
}

async function createOrganizer(req, res, next) {
  try {
    const organizer = await userService.createOrganizer(req.body, req.user.id);
    res.status(201).json({ data: organizer });
  } catch (err) { next(err); }
}

async function toggleActive(req, res, next) {
  try {
    const user = await userService.toggleActive(req.params.id, req.body.active, req.user.id);
    res.json({ data: user });
  } catch (err) { next(err); }
}

async function deleteOrganizer(req, res, next) {
  try {
    const result = await userService.deleteOrganizer(req.params.id, req.user.id);
    res.json({ data: result });
  } catch (err) { next(err); }
}

module.exports = { getAll, getById, getOrganizers, createOrganizer, toggleActive, deleteOrganizer };
