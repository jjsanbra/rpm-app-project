'use strict';

/**
 * db.js — Punto centralizado de acceso a la base de datos SQLite.
 *
 * Decisión arquitectónica: Se usa better-sqlite3 con SQL directo para
 * evitar el acoplamiento con un ORM específico, facilitando la sustitución
 * posterior por PostgreSQL u otra base de datos.
 *
 * En producción: sustituir el valor de DATABASE_URL por la connection string
 * de la base de datos persistente y adaptar este módulo.
 */

const Database = require('better-sqlite3');
const config = require('../config/env');

let _db = null;

/**
 * Retorna la instancia singleton de la base de datos.
 * @returns {Database.Database}
 */
function getDb() {
  if (!_db) {
    throw new Error('Database not initialized. Call initDb() first.');
  }
  return _db;
}

/**
 * Inicializa la base de datos y crea todas las tablas si no existen.
 * En modo :memory: o development, los datos son efímeros por diseño.
 */
function initDb() {
  const dbPath = config.env === 'test' ? ':memory:' : (config.database.url || ':memory:');
  _db = new Database(dbPath);

  // Habilitar Foreign Keys (obligatorio en SQLite)
  _db.pragma('journal_mode = WAL');
  _db.pragma('foreign_keys = ON');

  _createSchema();
  return _db;
}

/**
 * Crea el esquema completo de la base de datos.
 * Todas las tablas se crean de forma idempotente (IF NOT EXISTS).
 */
function _createSchema() {
  _db.exec(`
    -- =============================================
    -- USERS
    -- =============================================
    CREATE TABLE IF NOT EXISTS users (
      id          TEXT PRIMARY KEY,
      email       TEXT NOT NULL UNIQUE,
      passwordHash TEXT,
      role        TEXT NOT NULL CHECK(role IN ('ADMIN', 'ORGANIZER', 'TEAM_USER')),
      teamId      TEXT REFERENCES teams(id) ON DELETE SET NULL,
      active      INTEGER NOT NULL DEFAULT 1,
      setupToken  TEXT,
      setupTokenExpiresAt TEXT,
      resetToken  TEXT,
      resetTokenExpiresAt TEXT,
      createdAt   TEXT NOT NULL,
      updatedAt   TEXT NOT NULL
    );

    -- =============================================
    -- LOCATIONS
    -- =============================================
    CREATE TABLE IF NOT EXISTS locations (
      id          TEXT PRIMARY KEY,
      name        TEXT NOT NULL,
      description TEXT,
      street      TEXT,
      city        TEXT,
      postalCode  TEXT,
      state       TEXT,
      country     TEXT NOT NULL DEFAULT 'España',
      createdAt   TEXT NOT NULL,
      updatedAt   TEXT NOT NULL
    );

    -- =============================================
    -- LEVELS
    -- =============================================
    CREATE TABLE IF NOT EXISTS levels (
      id          TEXT PRIMARY KEY,
      name        TEXT NOT NULL,
      description TEXT,
      createdAt   TEXT NOT NULL,
      updatedAt   TEXT NOT NULL
    );

    -- =============================================
    -- CATEGORIES
    -- =============================================
    CREATE TABLE IF NOT EXISTS categories (
      id          TEXT PRIMARY KEY,
      name        TEXT NOT NULL,
      description TEXT,
      createdAt   TEXT NOT NULL,
      updatedAt   TEXT NOT NULL
    );

    -- =============================================
    -- SPONSORS
    -- =============================================
    CREATE TABLE IF NOT EXISTS sponsors (
      id          TEXT PRIMARY KEY,
      name        TEXT NOT NULL,
      description TEXT,
      logo        TEXT,
      createdAt   TEXT NOT NULL,
      updatedAt   TEXT NOT NULL
    );

    -- =============================================
    -- TEAMS
    -- =============================================
    CREATE TABLE IF NOT EXISTS teams (
      id              TEXT PRIMARY KEY,
      name            TEXT NOT NULL,
      player1Name     TEXT NOT NULL,
      player1Surname  TEXT NOT NULL,
      player2Name     TEXT NOT NULL,
      player2Surname  TEXT NOT NULL,
      reserveName     TEXT,
      reserveSurname  TEXT,
      active          INTEGER NOT NULL DEFAULT 1,
      createdAt       TEXT NOT NULL,
      updatedAt       TEXT NOT NULL
    );

    -- =============================================
    -- TEAM EMAILS (1-2 por equipo)
    -- =============================================
    CREATE TABLE IF NOT EXISTS team_emails (
      id        TEXT PRIMARY KEY,
      teamId    TEXT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
      email     TEXT NOT NULL,
      isPrimary INTEGER NOT NULL DEFAULT 0,
      createdAt TEXT NOT NULL
    );

    -- =============================================
    -- RANKINGS
    -- =============================================
    CREATE TABLE IF NOT EXISTS rankings (
      id            TEXT PRIMARY KEY,
      name          TEXT NOT NULL,
      description   TEXT,
      startDate     TEXT NOT NULL,
      endDate       TEXT NOT NULL,
      regulation    TEXT,
      active        INTEGER NOT NULL DEFAULT 1,
      poster        TEXT,
      rankingConfig TEXT,
      createdBy     TEXT REFERENCES users(id) ON DELETE SET NULL,
      locationId    TEXT REFERENCES locations(id) ON DELETE SET NULL,
      levelId       TEXT REFERENCES levels(id) ON DELETE SET NULL,
      categoryId    TEXT REFERENCES categories(id) ON DELETE SET NULL,
      createdAt     TEXT NOT NULL,
      updatedAt     TEXT NOT NULL
    );

    -- =============================================
    -- RANKING_SPONSORS (relación N:M)
    -- =============================================
    CREATE TABLE IF NOT EXISTS ranking_sponsors (
      rankingId   TEXT NOT NULL REFERENCES rankings(id) ON DELETE CASCADE,
      sponsorId   TEXT NOT NULL REFERENCES sponsors(id) ON DELETE CASCADE,
      PRIMARY KEY (rankingId, sponsorId)
    );

    -- =============================================
    -- RANKING_TEAMS (relación N:M con entidad propia)
    -- =============================================
    CREATE TABLE IF NOT EXISTS ranking_teams (
      id        TEXT PRIMARY KEY,
      rankingId TEXT NOT NULL REFERENCES rankings(id) ON DELETE CASCADE,
      teamId    TEXT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
      status    TEXT NOT NULL DEFAULT 'ACTIVE' CHECK(status IN ('ACTIVE', 'INACTIVE')),
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      UNIQUE(rankingId, teamId)
    );

    -- =============================================
    -- MATCHES
    -- =============================================
    CREATE TABLE IF NOT EXISTS matches (
      id                  TEXT PRIMARY KEY,
      rankingId           TEXT NOT NULL REFERENCES rankings(id) ON DELETE CASCADE,
      teamOneId           TEXT NOT NULL REFERENCES teams(id) ON DELETE RESTRICT,
      teamTwoId           TEXT NOT NULL REFERENCES teams(id) ON DELETE RESTRICT,
      matchDate           TEXT,
      resultSubmittedAt   TEXT,
      resultSubmittedBy   TEXT REFERENCES users(id) ON DELETE SET NULL,
      status              TEXT NOT NULL DEFAULT 'PENDING_RESULT'
                            CHECK(status IN ('PENDING_RESULT','PENDING_CONFIRMATION','CONFIRMED','DISPUTED','CANCELLED')),
      set1TeamOne         INTEGER,
      set1TeamTwo         INTEGER,
      set2TeamOne         INTEGER,
      set2TeamTwo         INTEGER,
      set3TeamOne         INTEGER,
      set3TeamTwo         INTEGER,
      gamesTeamOne        INTEGER,
      gamesTeamTwo        INTEGER,
      setsTeamOne         INTEGER,
      setsTeamTwo         INTEGER,
      pointsTeamOne       INTEGER,
      pointsTeamTwo       INTEGER,
      confirmedAt         TEXT,
      confirmedBy         TEXT REFERENCES users(id) ON DELETE SET NULL,
      disputedAt          TEXT,
      disputedBy          TEXT REFERENCES users(id) ON DELETE SET NULL,
      createdAt           TEXT NOT NULL,
      updatedAt           TEXT NOT NULL,
      CHECK(teamOneId != teamTwoId)
    );

    -- =============================================
    -- INCIDENTS
    -- =============================================
    CREATE TABLE IF NOT EXISTS incidents (
      id          TEXT PRIMARY KEY,
      matchId     TEXT NOT NULL REFERENCES matches(id) ON DELETE CASCADE,
      reportedBy  TEXT NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
      reportedAt  TEXT NOT NULL,
      description TEXT NOT NULL,
      status      TEXT NOT NULL DEFAULT 'OPEN'
                    CHECK(status IN ('OPEN','IN_REVIEW','RESOLVED','REJECTED')),
      resolution  TEXT,
      resolvedBy  TEXT REFERENCES users(id) ON DELETE SET NULL,
      resolvedAt  TEXT,
      createdAt   TEXT NOT NULL,
      updatedAt   TEXT NOT NULL
    );

    -- =============================================
    -- LIVE MATCH SESSIONS
    -- =============================================
    CREATE TABLE IF NOT EXISTS live_matches (
      matchId             TEXT PRIMARY KEY REFERENCES matches(id) ON DELETE CASCADE,
      status              TEXT NOT NULL DEFAULT 'REQUESTED'
                            CHECK(status IN ('REQUESTED', 'IN_PROGRESS', 'COMPLETED', 'CONFIRMED', 'CANCELLED')),
      requestedBy         TEXT NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
      requestedAt         TEXT NOT NULL,
      acceptedBy          TEXT REFERENCES users(id) ON DELETE SET NULL,
      acceptedAt          TEXT,
      servingTeam         INTEGER NOT NULL DEFAULT 1,
      pointsTeamOne       TEXT NOT NULL DEFAULT '0',
      pointsTeamTwo       TEXT NOT NULL DEFAULT '0',
      isTiebreak          INTEGER NOT NULL DEFAULT 0,
      set1TeamOne         INTEGER NOT NULL DEFAULT 0,
      set1TeamTwo         INTEGER NOT NULL DEFAULT 0,
      set2TeamOne         INTEGER NOT NULL DEFAULT 0,
      set2TeamTwo         INTEGER NOT NULL DEFAULT 0,
      set3TeamOne         INTEGER,
      set3TeamTwo         INTEGER,
      currentSet          INTEGER NOT NULL DEFAULT 1,
      setsTeamOne         INTEGER NOT NULL DEFAULT 0,
      setsTeamTwo         INTEGER NOT NULL DEFAULT 0,
      gamesTeamOne        INTEGER NOT NULL DEFAULT 0,
      gamesTeamTwo        INTEGER NOT NULL DEFAULT 0,
      gameMode            TEXT NOT NULL DEFAULT 'GOLDEN_POINT'
                            CHECK(gameMode IN ('GOLDEN_POINT', 'ADVANTAGE')),
      confirmedByTeamOne  INTEGER NOT NULL DEFAULT 0,
      confirmedByTeamTwo  INTEGER NOT NULL DEFAULT 0,
      historyJson         TEXT,
      createdAt           TEXT NOT NULL,
      updatedAt           TEXT NOT NULL
    );

    -- =============================================
    -- AUDIT LOGS
    -- =============================================
    CREATE TABLE IF NOT EXISTS audit_logs (
      id          TEXT PRIMARY KEY,
      userId      TEXT REFERENCES users(id) ON DELETE SET NULL,
      action      TEXT NOT NULL,
      entity      TEXT NOT NULL,
      entityId    TEXT NOT NULL,
      data        TEXT,
      createdAt   TEXT NOT NULL
    );
  `);

  // Migraciones idempotentes para bases de datos existentes
  const matchCols = [
    'set1TeamOne INTEGER',
    'set1TeamTwo INTEGER',
    'set2TeamOne INTEGER',
    'set2TeamTwo INTEGER',
    'set3TeamOne INTEGER',
    'set3TeamTwo INTEGER',
    'gamesTeamOne INTEGER',
    'gamesTeamTwo INTEGER'
  ];
  for (const col of matchCols) {
    try {
      _db.exec(`ALTER TABLE matches ADD COLUMN ${col};`);
    } catch (_) {
      // Ignorar si la columna ya existe
    }
  }
}

/**
 * Cierra la conexión a la base de datos (útil en tests).
 */
function closeDb() {
  if (_db) {
    _db.close();
    _db = null;
  }
}

module.exports = { initDb, getDb, closeDb };
