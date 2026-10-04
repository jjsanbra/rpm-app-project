'use strict';

const crypto = require('crypto');
const { getDb } = require('../../database/db');
const matchModel = require('./match.model');
const { calculatePoints, calculateMatchFromGames } = require('../../utils/scoring');
const auditService = require('../audit/audit.service');

// Map of active SSE client connections per matchId
// matchId -> Set(res)
const sseClients = new Map();
// Global SSE clients for live matches overview (landing/spectators)
const globalSseClients = new Set();

function addSseClient(matchId, res) {
  if (!sseClients.has(matchId)) {
    sseClients.set(matchId, new Set());
  }
  sseClients.get(matchId).add(res);

  res.on('close', () => {
    const clients = sseClients.get(matchId);
    if (clients) {
      clients.delete(res);
      if (clients.size === 0) {
        sseClients.delete(matchId);
      }
    }
  });
}

function addGlobalSseClient(res) {
  globalSseClients.add(res);
  res.on('close', () => {
    globalSseClients.delete(res);
  });
}

function broadcastLiveState(matchId, state) {
  // Send to match specific subscribers
  const clients = sseClients.get(matchId);
  if (clients) {
    const data = `data: ${JSON.stringify(state)}\n\n`;
    for (const res of clients) {
      try {
        res.write(data);
      } catch (err) {
        console.error('[SSE WRITE ERROR]', err.message);
      }
    }
  }

  // Send to global subscribers (landing / overview)
  if (globalSseClients.size > 0) {
    const globalData = `data: ${JSON.stringify({ type: 'MATCH_UPDATE', matchId, state })}\n\n`;
    for (const res of globalSseClients) {
      try {
        res.write(globalData);
      } catch (err) {
        console.error('[SSE GLOBAL WRITE ERROR]', err.message);
      }
    }
  }
}

function getLiveSession(matchId) {
  const db = getDb();
  const session = db.prepare(`
    SELECT lm.*, 
           m.teamOneId, m.teamTwoId,
           t1.name as teamOneName, t2.name as teamTwoName,
           r.name as rankingName, r.id as rankingId,
           u.email as requestedByEmail, u.teamId as requestedByTeamId,
           req_t.name as requestedByTeamName
    FROM live_matches lm
    JOIN matches m ON lm.matchId = m.id
    JOIN teams t1 ON m.teamOneId = t1.id
    JOIN teams t2 ON m.teamTwoId = t2.id
    JOIN rankings r ON m.rankingId = r.id
    LEFT JOIN users u ON lm.requestedBy = u.id
    LEFT JOIN teams req_t ON u.teamId = req_t.id
    WHERE lm.matchId = ?
  `).get(matchId);

  return session || null;
}

function getActiveLiveMatches() {
  const db = getDb();
  return db.prepare(`
    SELECT lm.*,
           m.teamOneId, m.teamTwoId,
           t1.name as teamOneName, t2.name as teamTwoName,
           r.name as rankingName, r.id as rankingId,
           u.email as requestedByEmail, u.teamId as requestedByTeamId,
           req_t.name as requestedByTeamName
    FROM live_matches lm
    JOIN matches m ON lm.matchId = m.id
    JOIN teams t1 ON m.teamOneId = t1.id
    JOIN teams t2 ON m.teamTwoId = t2.id
    JOIN rankings r ON m.rankingId = r.id
    LEFT JOIN users u ON lm.requestedBy = u.id
    LEFT JOIN teams req_t ON u.teamId = req_t.id
    WHERE lm.status IN ('REQUESTED', 'IN_PROGRESS', 'COMPLETED')
    ORDER BY lm.updatedAt DESC
  `).all();
}

function requestLiveMatch(matchId, user, gameMode = 'GOLDEN_POINT') {
  const db = getDb();
  const match = matchModel.findById(matchId);
  if (!match) {
    const err = new Error('Partido no encontrado.');
    err.status = 404;
    throw err;
  }

  if (user.role !== 'ADMIN' && user.teamId !== match.teamOneId && user.teamId !== match.teamTwoId) {
    const err = new Error('No tienes permisos para gestionar este partido.');
    err.status = 403;
    throw err;
  }

  if (match.status === 'CONFIRMED') {
    const err = new Error('Este partido ya ha sido finalizado y confirmado.');
    err.status = 400;
    throw err;
  }

  const validMode = gameMode === 'ADVANTAGE' ? 'ADVANTAGE' : 'GOLDEN_POINT';
  const now = new Date().toISOString();
  let existing = db.prepare(`SELECT * FROM live_matches WHERE matchId = ?`).get(matchId);

  if (!existing) {
    db.prepare(`
      INSERT INTO live_matches (
        matchId, status, requestedBy, requestedAt, gameMode, servingTeam, pointsTeamOne, pointsTeamTwo,
        isTiebreak, set1TeamOne, set1TeamTwo, set2TeamOne, set2TeamTwo, set3TeamOne, set3TeamTwo,
        currentSet, setsTeamOne, setsTeamTwo, gamesTeamOne, gamesTeamTwo,
        confirmedByTeamOne, confirmedByTeamTwo, historyJson, createdAt, updatedAt
      ) VALUES (
        ?, 'REQUESTED', ?, ?, ?, 1, '0', '0',
        0, 0, 0, 0, 0, NULL, NULL,
        1, 0, 0, 0, 0,
        0, 0, '[]', ?, ?
      )
    `).run(matchId, user.id, now, validMode, now, now);
  } else {
    db.prepare(`
      UPDATE live_matches SET
        status = 'REQUESTED',
        requestedBy = ?,
        requestedAt = ?,
        gameMode = ?,
        updatedAt = ?
      WHERE matchId = ?
    `).run(user.id, now, validMode, now, matchId);
  }

  const session = getLiveSession(matchId);
  broadcastLiveState(matchId, session);
  return session;
}

function acceptLiveMatch(matchId, user, gameMode) {
  const db = getDb();
  const match = matchModel.findById(matchId);
  if (!match) {
    const err = new Error('Partido no encontrado.');
    err.status = 404;
    throw err;
  }

  const existing = db.prepare('SELECT * FROM live_matches WHERE matchId = ?').get(matchId);
  if (!existing || existing.status !== 'REQUESTED') {
    const err = new Error('No hay una solicitud activa pendiente de aceptación para este partido.');
    err.status = 400;
    throw err;
  }

  if (user.role !== 'ADMIN' && user.teamId !== match.teamOneId && user.teamId !== match.teamTwoId) {
    const err = new Error('No tienes permisos para unirte a este partido.');
    err.status = 403;
    throw err;
  }

  // Validate that the user who initiated the request cannot accept it (the rival must accept)
  if (user.role !== 'ADMIN') {
    if (user.id === existing.requestedBy) {
      const err = new Error('No puedes aceptar tu propia solicitud. Debe aceptarla el equipo rival.');
      err.status = 400;
      throw err;
    }
    const requester = db.prepare('SELECT teamId FROM users WHERE id = ?').get(existing.requestedBy);
    if (requester && requester.teamId && requester.teamId === user.teamId) {
      const err = new Error('No puedes aceptar una solicitud iniciada por tu propio equipo. Debe aceptarla el equipo rival.');
      err.status = 400;
      throw err;
    }
  }

  const now = new Date().toISOString();
  if (gameMode) {
    const validMode = gameMode === 'ADVANTAGE' ? 'ADVANTAGE' : 'GOLDEN_POINT';
    db.prepare(`
      UPDATE live_matches SET
        status = 'IN_PROGRESS',
        acceptedBy = ?,
        acceptedAt = ?,
        gameMode = ?,
        updatedAt = ?
      WHERE matchId = ?
    `).run(user.id, now, validMode, now, matchId);
  } else {
    db.prepare(`
      UPDATE live_matches SET
        status = 'IN_PROGRESS',
        acceptedBy = ?,
        acceptedAt = ?,
        updatedAt = ?
      WHERE matchId = ?
    `).run(user.id, now, now, matchId);
  }

  const session = getLiveSession(matchId);
  broadcastLiveState(matchId, session);
  return session;
}

// Helper to advance padel points (0 -> 15 -> 30 -> 40 -> Punto de oro / Game)
const POINT_SEQUENCE = ['0', '15', '30', '40'];

function scorePoint(matchId, teamScored, user) {
  const db = getDb();
  const session = getLiveSession(matchId);
  if (!session) {
    const err = new Error('Sesión de partido en vivo no encontrada.');
    err.status = 404;
    throw err;
  }

  if (session.status !== 'IN_PROGRESS') {
    const err = new Error('El partido no está actualmente en juego.');
    err.status = 400;
    throw err;
  }

  // Save current snapshot to history stack for Undo
  const history = JSON.parse(session.historyJson || '[]');
  const snapshot = {
    servingTeam: session.servingTeam,
    pointsTeamOne: session.pointsTeamOne,
    pointsTeamTwo: session.pointsTeamTwo,
    isTiebreak: session.isTiebreak,
    set1TeamOne: session.set1TeamOne,
    set1TeamTwo: session.set1TeamTwo,
    set2TeamOne: session.set2TeamOne,
    set2TeamTwo: session.set2TeamTwo,
    set3TeamOne: session.set3TeamOne,
    set3TeamTwo: session.set3TeamTwo,
    currentSet: session.currentSet,
    setsTeamOne: session.setsTeamOne,
    setsTeamTwo: session.setsTeamTwo,
    gamesTeamOne: session.gamesTeamOne,
    gamesTeamTwo: session.gamesTeamTwo,
    gameMode: session.gameMode,
    status: session.status,
  };
  history.push(snapshot);
  // Keep last 30 actions
  if (history.length > 30) history.shift();

  let p1 = session.pointsTeamOne;
  let p2 = session.pointsTeamTwo;
  let s1t1 = session.set1TeamOne;
  let s1t2 = session.set1TeamTwo;
  let s2t1 = session.set2TeamOne;
  let s2t2 = session.set2TeamTwo;
  let s3t1 = session.set3TeamOne !== null ? session.set3TeamOne : null;
  let s3t2 = session.set3TeamTwo !== null ? session.set3TeamTwo : null;
  let currentSet = session.currentSet;
  let setsWon1 = session.setsTeamOne;
  let setsWon2 = session.setsTeamTwo;
  let isTiebreak = session.isTiebreak;
  let serving = session.servingTeam;
  let status = session.status;
  const mode = session.gameMode || 'GOLDEN_POINT';

  if (isTiebreak) {
    // Tie-break mode (integer score 0, 1, 2, 3...)
    let n1 = Number(p1) || 0;
    let n2 = Number(p2) || 0;
    if (teamScored === 1) n1++;
    else n2++;

    const totalPoints = n1 + n2;
    // Serve change every odd sum in tiebreak (point 1, then every 2 points: 3, 5, 7...)
    if (totalPoints % 2 === 1) {
      serving = serving === 1 ? 2 : 1;
    }

    // Check tiebreak win condition: >= 7 (or >= 10 if super tiebreak) with diff >= 2
    const targetPoints = currentSet === 3 ? 10 : 7;
    if ((n1 >= targetPoints || n2 >= targetPoints) && Math.abs(n1 - n2) >= 2) {
      // Set won by tiebreak!
      if (n1 > n2) {
        setsWon1++;
        if (currentSet === 1) s1t1 = 7, s1t2 = 6;
        else if (currentSet === 2) s2t1 = 7, s2t2 = 6;
        else s3t1 = (s3t1 || 6) + 1, s3t2 = s3t2 || 6;
      } else {
        setsWon2++;
        if (currentSet === 1) s1t1 = 6, s1t2 = 7;
        else if (currentSet === 2) s2t1 = 6, s2t2 = 7;
        else s3t1 = s3t1 || 6, s3t2 = (s3t2 || 6) + 1;
      }

      isTiebreak = 0;
      p1 = '0';
      p2 = '0';
      serving = serving === 1 ? 2 : 1;

      // Check if match won
      if (setsWon1 === 2 || setsWon2 === 2) {
        status = 'COMPLETED';
      } else {
        currentSet++;
        if (currentSet === 3) {
          s3t1 = 0;
          s3t2 = 0;
        }
      }
    } else {
      p1 = String(n1);
      p2 = String(n2);
    }
  } else {
    // Normal game mode (Advantage or Punto de Oro)
    let gameWon = false;
    let winnerOfGame = 0;

    if (mode === 'ADVANTAGE') {
      if (teamScored === 1) {
        if (p1 === '0') p1 = '15';
        else if (p1 === '15') p1 = '30';
        else if (p1 === '30') p1 = '40';
        else if (p1 === '40') {
          if (p2 === '40') {
            p1 = 'AD';
          } else if (p2 === 'AD') {
            p2 = '40'; // Vuelta a Iguales (Deuce)
          } else {
            gameWon = true;
            winnerOfGame = 1;
          }
        } else if (p1 === 'AD') {
          gameWon = true;
          winnerOfGame = 1;
        }
      } else {
        if (p2 === '0') p2 = '15';
        else if (p2 === '15') p2 = '30';
        else if (p2 === '30') p2 = '40';
        else if (p2 === '40') {
          if (p1 === '40') {
            p2 = 'AD';
          } else if (p1 === 'AD') {
            p1 = '40'; // Vuelta a Iguales (Deuce)
          } else {
            gameWon = true;
            winnerOfGame = 2;
          }
        } else if (p2 === 'AD') {
          gameWon = true;
          winnerOfGame = 2;
        }
      }
    } else {
      // Golden Point (Punto de Oro)
      if (teamScored === 1) {
        if (p1 === '0') p1 = '15';
        else if (p1 === '15') p1 = '30';
        else if (p1 === '30') p1 = '40';
        else if (p1 === '40') {
          gameWon = true;
          winnerOfGame = 1;
        }
      } else {
        if (p2 === '0') p2 = '15';
        else if (p2 === '15') p2 = '30';
        else if (p2 === '30') p2 = '40';
        else if (p2 === '40') {
          gameWon = true;
          winnerOfGame = 2;
        }
      }
    }

    if (gameWon) {
      p1 = '0';
      p2 = '0';
      serving = serving === 1 ? 2 : 1;

      // Increment game in current set
      let g1 = currentSet === 1 ? s1t1 : currentSet === 2 ? s2t1 : (s3t1 || 0);
      let g2 = currentSet === 1 ? s1t2 : currentSet === 2 ? s2t2 : (s3t2 || 0);

      if (winnerOfGame === 1) g1++;
      else g2++;

      if (currentSet === 1) { s1t1 = g1; s1t2 = g2; }
      else if (currentSet === 2) { s2t1 = g1; s2t2 = g2; }
      else { s3t1 = g1; s3t2 = g2; }

      // Check if set won
      if ((g1 >= 6 || g2 >= 6) && Math.abs(g1 - g2) >= 2) {
        // Set won directly (6-0..6-4, 7-5)
        if (g1 > g2) setsWon1++;
        else setsWon2++;

        if (setsWon1 === 2 || setsWon2 === 2) {
          status = 'COMPLETED';
        } else {
          currentSet++;
          if (currentSet === 3) {
            s3t1 = 0;
            s3t2 = 0;
          }
        }
      } else if (g1 === 6 && g2 === 6) {
        // Tie-break!
        isTiebreak = 1;
        p1 = '0';
        p2 = '0';
      }
    }
  }

  const totalG1 = s1t1 + s2t1 + (s3t1 || 0);
  const totalG2 = s1t2 + s2t2 + (s3t2 || 0);
  const now = new Date().toISOString();

  db.prepare(`
    UPDATE live_matches SET
      servingTeam = ?,
      pointsTeamOne = ?,
      pointsTeamTwo = ?,
      isTiebreak = ?,
      set1TeamOne = ?,
      set1TeamTwo = ?,
      set2TeamOne = ?,
      set2TeamTwo = ?,
      set3TeamOne = ?,
      set3TeamTwo = ?,
      currentSet = ?,
      setsTeamOne = ?,
      setsTeamTwo = ?,
      gamesTeamOne = ?,
      gamesTeamTwo = ?,
      status = ?,
      historyJson = ?,
      updatedAt = ?
    WHERE matchId = ?
  `).run(
    serving, p1, p2, isTiebreak,
    s1t1, s1t2, s2t1, s2t2, s3t1, s3t2,
    currentSet, setsWon1, setsWon2, totalG1, totalG2,
    status, JSON.stringify(history), now, matchId
  );

  const updatedSession = getLiveSession(matchId);
  broadcastLiveState(matchId, updatedSession);
  return updatedSession;
}

function undoPoint(matchId, user) {
  const db = getDb();
  const session = getLiveSession(matchId);
  if (!session) {
    const err = new Error('Sesión no encontrada.');
    err.status = 404;
    throw err;
  }

  const history = JSON.parse(session.historyJson || '[]');
  if (history.length === 0) {
    const err = new Error('No hay más puntos para deshacer.');
    err.status = 400;
    throw err;
  }

  const lastSnapshot = history.pop();
  const now = new Date().toISOString();

  db.prepare(`
    UPDATE live_matches SET
      servingTeam = ?,
      pointsTeamOne = ?,
      pointsTeamTwo = ?,
      isTiebreak = ?,
      set1TeamOne = ?,
      set1TeamTwo = ?,
      set2TeamOne = ?,
      set2TeamTwo = ?,
      set3TeamOne = ?,
      set3TeamTwo = ?,
      currentSet = ?,
      setsTeamOne = ?,
      setsTeamTwo = ?,
      gamesTeamOne = ?,
      gamesTeamTwo = ?,
      gameMode = ?,
      status = ?,
      historyJson = ?,
      updatedAt = ?
    WHERE matchId = ?
  `).run(
    lastSnapshot.servingTeam,
    lastSnapshot.pointsTeamOne,
    lastSnapshot.pointsTeamTwo,
    lastSnapshot.isTiebreak,
    lastSnapshot.set1TeamOne,
    lastSnapshot.set1TeamTwo,
    lastSnapshot.set2TeamOne,
    lastSnapshot.set2TeamTwo,
    lastSnapshot.set3TeamOne,
    lastSnapshot.set3TeamTwo,
    lastSnapshot.currentSet,
    lastSnapshot.setsTeamOne,
    lastSnapshot.setsTeamTwo,
    lastSnapshot.gamesTeamOne,
    lastSnapshot.gamesTeamTwo,
    lastSnapshot.gameMode || session.gameMode || 'GOLDEN_POINT',
    lastSnapshot.status,
    JSON.stringify(history),
    now,
    matchId
  );

  const updatedSession = getLiveSession(matchId);
  broadcastLiveState(matchId, updatedSession);
  return updatedSession;
}

function signLiveMatch(matchId, user) {
  const db = getDb();
  const session = getLiveSession(matchId);
  if (!session) {
    const err = new Error('Sesión no encontrada.');
    err.status = 404;
    throw err;
  }

  const isTeamOne = user.teamId === session.teamOneId;
  const isTeamTwo = user.teamId === session.teamTwoId;
  const isAdmin = user.role === 'ADMIN';

  if (!isTeamOne && !isTeamTwo && !isAdmin) {
    const err = new Error('No tienes permisos para firmar este partido.');
    err.status = 403;
    throw err;
  }

  let conf1 = session.confirmedByTeamOne;
  let conf2 = session.confirmedByTeamTwo;

  if (isTeamOne) conf1 = 1;
  if (isTeamTwo) conf2 = 1;
  if (isAdmin) { conf1 = 1; conf2 = 1; }

  const now = new Date().toISOString();
  const bothConfirmed = (conf1 === 1 && conf2 === 1);
  const newStatus = bothConfirmed ? 'CONFIRMED' : session.status;

  db.prepare(`
    UPDATE live_matches SET
      confirmedByTeamOne = ?,
      confirmedByTeamTwo = ?,
      status = ?,
      updatedAt = ?
    WHERE matchId = ?
  `).run(conf1, conf2, newStatus, now, matchId);

  // If both signed, confirm the match permanently in matches table
  if (bothConfirmed) {
    let pts = { pointsTeamOne: 0, pointsTeamTwo: 0 };
    if ((session.setsTeamOne === 2 || session.setsTeamTwo === 2) && (session.setsTeamOne + session.setsTeamTwo <= 3)) {
      pts = calculatePoints(session.setsTeamOne, session.setsTeamTwo);
    } else if (session.setsTeamOne > session.setsTeamTwo) {
      pts = { pointsTeamOne: 4, pointsTeamTwo: 1 };
    } else if (session.setsTeamTwo > session.setsTeamOne) {
      pts = { pointsTeamOne: 1, pointsTeamTwo: 4 };
    }

    const matchDate = new Date().toISOString().split('T')[0];

    db.prepare(`
      UPDATE matches SET
        matchDate = ?,
        set1TeamOne = ?,
        set1TeamTwo = ?,
        set2TeamOne = ?,
        set2TeamTwo = ?,
        set3TeamOne = ?,
        set3TeamTwo = ?,
        gamesTeamOne = ?,
        gamesTeamTwo = ?,
        setsTeamOne = ?,
        setsTeamTwo = ?,
        pointsTeamOne = ?,
        pointsTeamTwo = ?,
        status = 'CONFIRMED',
        confirmedBy = ?,
        confirmedAt = ?,
        updatedAt = ?
      WHERE id = ?
    `).run(
      matchDate,
      session.set1TeamOne ?? 0, session.set1TeamTwo ?? 0,
      session.set2TeamOne ?? 0, session.set2TeamTwo ?? 0,
      session.set3TeamOne, session.set3TeamTwo,
      session.gamesTeamOne ?? 0, session.gamesTeamTwo ?? 0,
      session.setsTeamOne ?? 0, session.setsTeamTwo ?? 0,
      pts.pointsTeamOne, pts.pointsTeamTwo,
      user.id, now, now, matchId
    );

    auditService.log({
      userId: user.id,
      action: 'LIVE_MATCH_SIGNED_CONFIRMED',
      entity: 'Match',
      entityId: matchId,
      data: {
        sets: `${session.setsTeamOne}-${session.setsTeamTwo}`,
        games: `${session.gamesTeamOne}-${session.gamesTeamTwo}`,
        points: `${pts.pointsTeamOne}-${pts.pointsTeamTwo}`
      }
    });
  }

  const updatedSession = getLiveSession(matchId);
  broadcastLiveState(matchId, updatedSession);
  return updatedSession;
}

module.exports = {
  addSseClient,
  addGlobalSseClient,
  broadcastLiveState,
  getLiveSession,
  getActiveLiveMatches,
  requestLiveMatch,
  acceptLiveMatch,
  scorePoint,
  undoPoint,
  signLiveMatch
};
