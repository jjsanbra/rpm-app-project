'use strict';

const liveService = require('./liveMatch.service');

async function getLiveSession(req, res, next) {
  try {
    const session = liveService.getLiveSession(req.params.id);
    if (!session) {
      return res.status(404).json({ success: false, error: 'No hay sesión en directo para este partido.' });
    }
    res.json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
}

async function getActiveLiveMatches(req, res, next) {
  try {
    const matches = liveService.getActiveLiveMatches();
    res.json({ success: true, data: matches });
  } catch (err) {
    next(err);
  }
}

async function requestLiveMatch(req, res, next) {
  try {
    const session = liveService.requestLiveMatch(req.params.id, req.user);
    res.json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
}

async function acceptLiveMatch(req, res, next) {
  try {
    const session = liveService.acceptLiveMatch(req.params.id, req.user);
    res.json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
}

async function scorePoint(req, res, next) {
  try {
    const team = Number(req.body.team);
    if (team !== 1 && team !== 2) {
      return res.status(400).json({ success: false, error: 'Equipo debe ser 1 o 2.' });
    }
    const session = liveService.scorePoint(req.params.id, team, req.user);
    res.json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
}

async function undoPoint(req, res, next) {
  try {
    const session = liveService.undoPoint(req.params.id, req.user);
    res.json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
}

async function signLiveMatch(req, res, next) {
  try {
    const session = liveService.signLiveMatch(req.params.id, req.user);
    res.json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
}

function streamLiveMatch(req, res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  const matchId = req.params.id;
  const initialSession = liveService.getLiveSession(matchId);
  if (initialSession) {
    res.write(`data: ${JSON.stringify(initialSession)}\n\n`);
  }

  liveService.addSseClient(matchId, res);
}

function streamGlobalLiveMatches(req, res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  const activeMatches = liveService.getActiveLiveMatches();
  res.write(`data: ${JSON.stringify({ type: 'INITIAL', matches: activeMatches })}\n\n`);

  liveService.addGlobalSseClient(res);
}

module.exports = {
  getLiveSession,
  getActiveLiveMatches,
  requestLiveMatch,
  acceptLiveMatch,
  scorePoint,
  undoPoint,
  signLiveMatch,
  streamLiveMatch,
  streamGlobalLiveMatches,
};
