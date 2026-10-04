'use strict';

const { getDb } = require('../../database/db');

/**
 * team.model.js — Acceso a datos para Equipos.
 */

function findAll({ includeInactive = false } = {}) {
  const db = getDb();
  return db.prepare(`
    SELECT t.*,
           GROUP_CONCAT(te.email, '|') as emailsRaw
    FROM teams t
    LEFT JOIN team_emails te ON te.teamId = t.id
    ${includeInactive ? '' : 'WHERE t.active = 1'}
    GROUP BY t.id
    ORDER BY t.name
  `).all().map(_parseTeam);
}

function findById(id) {
  const db = getDb();
  const team = db.prepare(`
    SELECT t.*,
           GROUP_CONCAT(te.email, '|') as emailsRaw
    FROM teams t
    LEFT JOIN team_emails te ON te.teamId = t.id
    WHERE t.id = ?
    GROUP BY t.id
  `).get(id);
  return team ? _parseTeam(team) : undefined;
}

function findByEmail(email) {
  const db = getDb();
  const team = db.prepare(`
    SELECT t.*
    FROM teams t
    JOIN team_emails te ON te.teamId = t.id
    WHERE LOWER(te.email) = LOWER(?)
  `).get(email);
  return team;
}

function create(data) {
  const db = getDb();
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO teams (id, name, player1Name, player1Surname, player2Name, player2Surname, reserveName, reserveSurname, active, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
  `).run(
    data.id, data.name,
    data.player1Name, data.player1Surname,
    data.player2Name, data.player2Surname,
    data.reserveName || null, data.reserveSurname || null,
    now, now
  );

  return findById(data.id);
}

function update(id, data) {
  const db = getDb();
  const allowed = ['name', 'player1Name', 'player1Surname', 'player2Name', 'player2Surname', 'reserveName', 'reserveSurname', 'active'];
  const fields = [];
  const values = [];

  for (const field of allowed) {
    if (data[field] !== undefined) {
      fields.push(`${field} = ?`);
      values.push(data[field]);
    }
  }

  if (fields.length === 0) return findById(id);

  fields.push('updatedAt = ?');
  values.push(new Date().toISOString());
  values.push(id);

  db.prepare(`UPDATE teams SET ${fields.join(', ')} WHERE id = ?`).run(...values);
  return findById(id);
}

function setEmails(teamId, emails) {
  const db = getDb();
  // Eliminar emails anteriores y reinsertar
  db.prepare('DELETE FROM team_emails WHERE teamId = ?').run(teamId);

  for (let i = 0; i < emails.length; i++) {
    db.prepare(`
      INSERT INTO team_emails (id, teamId, email, isPrimary, createdAt)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      crypto.randomUUID(),
      teamId,
      emails[i].toLowerCase().trim(),
      i === 0 ? 1 : 0,
      new Date().toISOString()
    );
  }
}

function getEmails(teamId) {
  const db = getDb();
  return db.prepare('SELECT * FROM team_emails WHERE teamId = ? ORDER BY isPrimary DESC').all(teamId);
}

function _parseTeam(team) {
  const parsed = { ...team };
  parsed.emails = team.emailsRaw ? team.emailsRaw.split('|') : [];
  delete parsed.emailsRaw;
  return parsed;
}

module.exports = { findAll, findById, findByEmail, create, update, setEmails, getEmails };
