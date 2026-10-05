'use strict';

const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { getDb } = require('./db');

/**
 * seed.js — Datos de ejemplo para desarrollo.
 *
 * Credenciales de desarrollo (solo para entorno local):
 * - Admin:   admin@padelranking.dev / Admin123!
 * - Equipo1: equipo1@padelranking.dev / Team123!
 * - Equipo2: equipo2@padelranking.dev / Team123!
 * - Equipo3: equipo3@padelranking.dev / Team123!
 * - Equipo4: equipo4@padelranking.dev / Team123!
 *
 * NUNCA usar estas credenciales en producción.
 */

async function runSeed() {
  const db = getDb();

  // Verificar si ya existe seed
  const existingAdmin = db.prepare("SELECT id FROM users WHERE role = 'ADMIN' LIMIT 1").get();
  if (existingAdmin) {
    console.log('📦 Seed ya aplicado. Saltando...');
    return;
  }

  console.log('🌱 Aplicando seed completo de desarrollo con 5 rankings...');

  const now = new Date().toISOString();
  const BCRYPT_ROUNDS = 10;
  const { generateRoundRobinPairs } = require('../utils/matchGenerator');
  const { calculatePoints } = require('../utils/scoring');

  // ─── 1. NIVELES ────────────────────────────────────────────────────────────
  const levels = [
    { id: crypto.randomUUID(), name: 'Iniciación', desc: 'Jugadores principiantes que están consolidando golpes básicos' },
    { id: crypto.randomUUID(), name: 'Intermedio', desc: 'Jugadores regulares con buen control y ritmo de juego' },
    { id: crypto.randomUUID(), name: 'Avanzado', desc: 'Jugadores con alto nivel técnico, táctico y físico' },
    { id: crypto.randomUUID(), name: 'Primera Categoría / Pro', desc: 'Nivel élite y competición federada' },
    { id: crypto.randomUUID(), name: 'Veteranos +45', desc: 'Categoría para jugadores seniors con amplia experiencia' },
  ];
  for (const l of levels) {
    db.prepare(`INSERT INTO levels (id, name, description, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`)
      .run(l.id, l.name, l.desc, now, now);
  }

  // ─── 2. CATEGORÍAS ────────────────────────────────────────────────────────
  const categories = [
    { id: crypto.randomUUID(), name: 'Masculina', desc: 'Competición por parejas masculinas' },
    { id: crypto.randomUUID(), name: 'Femenina', desc: 'Competición por parejas femeninas' },
    { id: crypto.randomUUID(), name: 'Mixta', desc: 'Competición por parejas mixtas (jugador + jugadora)' },
    { id: crypto.randomUUID(), name: 'Sub-21', desc: 'Categoría juvenil hasta 21 años' },
  ];
  for (const c of categories) {
    db.prepare(`INSERT INTO categories (id, name, description, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`)
      .run(c.id, c.name, c.desc, now, now);
  }

  // ─── 3. SEDES / UBICACIONES ───────────────────────────────────────────────
  const locations = [
    { id: crypto.randomUUID(), name: 'Club Pádel Central', desc: 'Instalaciones cubiertas de última generación', city: 'Madrid', street: 'Paseo de la Castellana 120' },
    { id: crypto.randomUUID(), name: 'Ciudad de la Raqueta', desc: 'Complejo deportivo con 20 pistas', city: 'Madrid', street: 'Calle Monasterio de El Paular 2' },
    { id: crypto.randomUUID(), name: 'Club Pádel Mirasierra', desc: 'Club social con pistas panorámicas', city: 'Madrid', street: 'Calle Costa Brava 8' },
    { id: crypto.randomUUID(), name: 'Real Club Pádel Sport', desc: 'Club premium con gradas y servicios completos', city: 'Pozuelo de Alarcón', street: 'Av. de Europa 15' },
    { id: crypto.randomUUID(), name: 'Club Deportivo El Tejar', desc: 'Entorno natural con pistas de cristal', city: 'Majadahonda', street: 'Carretera de El Plantío 4' },
  ];
  for (const loc of locations) {
    db.prepare(`INSERT INTO locations (id, name, description, street, city, country, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, 'España', ?, ?)`)
      .run(loc.id, loc.name, loc.desc, loc.street, loc.city, now, now);
  }

  // ─── 4. PATROCINADORES ────────────────────────────────────────────────────
  const sponsors = [
    { id: crypto.randomUUID(), name: 'Bullpadel', desc: 'Palas y equipamiento oficial' },
    { id: crypto.randomUUID(), name: 'Nox Pádel', desc: 'Marca de competición internacional' },
    { id: crypto.randomUUID(), name: 'Head Pádel', desc: 'Pelotas oficiales del circuito' },
    { id: crypto.randomUUID(), name: 'Babolat', desc: 'Calzado y bolsas de pádel' },
  ];
  for (const s of sponsors) {
    db.prepare(`INSERT INTO sponsors (id, name, description, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`)
      .run(s.id, s.name, s.desc, now, now);
  }

  // ─── 5. USUARIOS ADMINISTRADOR Y ORGANIZADORES ───────────────────────────
  const adminId = crypto.randomUUID();
  const adminHash = await bcrypt.hash('Admin123!', BCRYPT_ROUNDS);
  db.prepare(`
    INSERT INTO users (id, email, passwordHash, role, teamId, active, createdAt, updatedAt)
    VALUES (?, ?, ?, 'ADMIN', NULL, 1, ?, ?)
  `).run(adminId, 'admin@padelranking.dev', adminHash, now, now);

  const orgPassword = await bcrypt.hash('Org123!', BCRYPT_ROUNDS);
  const org1Id = crypto.randomUUID();
  db.prepare(`
    INSERT INTO users (id, email, passwordHash, role, teamId, active, createdAt, updatedAt)
    VALUES (?, ?, ?, 'ORGANIZER', NULL, 1, ?, ?)
  `).run(org1Id, 'organizador1@padelranking.dev', orgPassword, now, now);

  const org2Id = crypto.randomUUID();
  db.prepare(`
    INSERT INTO users (id, email, passwordHash, role, teamId, active, createdAt, updatedAt)
    VALUES (?, ?, ?, 'ORGANIZER', NULL, 1, ?, ?)
  `).run(org2Id, 'organizador2@padelranking.dev', orgPassword, now, now);

  const teamPassword = await bcrypt.hash('Team123!', BCRYPT_ROUNDS);

  // Helper para registrar un ranking con sus equipos y calendario
  function createRankingWithTeams(cfg) {
    const rankingId = crypto.randomUUID();
    const createdBy = cfg.createdBy || adminId;
    db.prepare(`
      INSERT INTO rankings (id, name, description, startDate, endDate, regulation, active, locationId, levelId, categoryId, createdBy, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?, ?)
    `).run(
      rankingId, cfg.name, cfg.description, cfg.startDate, cfg.endDate,
      'Formato todos contra todos (Round-Robin). Victoria 2-0: 5 pts ganador, 1 pt perdedor. Victoria 2-1: 4 pts ganador, 2 pts perdedor. Registro con confirmación obligatoria del equipo rival.',
      cfg.locationId, cfg.levelId, cfg.categoryId, createdBy, now, now
    );

    const createdTeams = [];
    for (const t of cfg.teams) {
      const teamId = crypto.randomUUID();
      db.prepare(`
        INSERT INTO teams (id, name, player1Name, player1Surname, player2Name, player2Surname, reserveName, reserveSurname, active, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
      `).run(teamId, t.name, t.p1n, t.p1s, t.p2n, t.p2s, t.rn || null, t.rs || null, now, now);

      // Email primario
      const primaryEmailId = crypto.randomUUID();
      db.prepare(`INSERT INTO team_emails (id, teamId, email, isPrimary, createdAt) VALUES (?, ?, ?, 1, ?)`).run(primaryEmailId, teamId, t.email1, now);

      if (t.email2) {
        const secondaryEmailId = crypto.randomUUID();
        db.prepare(`INSERT INTO team_emails (id, teamId, email, isPrimary, createdAt) VALUES (?, ?, ?, 0, ?)`).run(secondaryEmailId, teamId, t.email2, now);
      }

      // Usuario
      const userId = crypto.randomUUID();
      db.prepare(`
        INSERT INTO users (id, email, passwordHash, role, teamId, active, createdAt, updatedAt)
        VALUES (?, ?, ?, 'TEAM_USER', ?, 1, ?, ?)
      `).run(userId, t.email1, teamPassword, teamId, now, now);

      // Inscripción en ranking
      const rtId = crypto.randomUUID();
      db.prepare(`
        INSERT INTO ranking_teams (id, rankingId, teamId, status, createdAt, updatedAt)
        VALUES (?, ?, ?, 'ACTIVE', ?, ?)
      `).run(rtId, rankingId, teamId, now, now);

      createdTeams.push({ id: teamId, name: t.name, email1: t.email1, userId });
    }

    // Generar partidos
    const teamIds = createdTeams.map(t => t.id);
    const pairs = generateRoundRobinPairs(teamIds);
    const matches = [];

    for (const pair of pairs) {
      const matchId = crypto.randomUUID();
      db.prepare(`
        INSERT INTO matches (id, rankingId, teamOneId, teamTwoId, status, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, 'PENDING_RESULT', ?, ?)
      `).run(matchId, rankingId, pair.teamOneId, pair.teamTwoId, now, now);
      matches.push({ id: matchId, teamOneId: pair.teamOneId, teamTwoId: pair.teamTwoId });
    }

    return { rankingId, teams: createdTeams, matches };
  }

  // ─── RANKING 1: Otoño 2026 (Masculino Intermedio - Creado por ADMIN) ───────
  const r1 = createRankingWithTeams({
    name: 'Ranking de Pádel Otoño 2026',
    description: 'Ranking oficial de la temporada de otoño 2026 en Madrid.',
    startDate: '2026-09-01',
    endDate: '2026-10-31',
    locationId: locations[0].id, // Club Pádel Central
    levelId: levels[1].id,       // Intermedio
    categoryId: categories[0].id,// Masculina
    createdBy: adminId,
    teams: [
      { name: 'Los Ases', p1n: 'Carlos', p1s: 'García', p2n: 'Miguel', p2s: 'López', rn: 'Javier', rs: 'Martín', email1: 'equipo1@padelranking.dev', email2: 'capitan1@padelranking.dev' },
      { name: 'Smash Bros', p1n: 'David', p1s: 'Fernández', p2n: 'Pablo', p2s: 'Ruiz', email1: 'equipo2@padelranking.dev' },
      { name: 'Net Masters', p1n: 'Andrés', p1s: 'Sánchez', p2n: 'Luis', p2s: 'Torres', rn: 'Roberto', rs: 'Díaz', email1: 'equipo3@padelranking.dev' },
      { name: 'Reyes del Pádel', p1n: 'Fernando', p1s: 'Jiménez', p2n: 'Raúl', p2s: 'Moreno', email1: 'equipo4@padelranking.dev' },
    ]
  });

  // Resultados para Ranking 1 (demostración de todos los estados)
  {
    // El partido r1.matches[0] (Los Ases vs Smash Bros) queda sin disputar (PENDING_RESULT / Por Jugar)

    const pts1 = calculatePoints(2, 1);
    db.prepare(`
      UPDATE matches SET
        matchDate = '2026-09-15',
        set1TeamOne = 6, set1TeamTwo = 4,
        set2TeamOne = 3, set2TeamTwo = 6,
        set3TeamOne = 7, set3TeamTwo = 5,
        gamesTeamOne = 16, gamesTeamTwo = 15,
        setsTeamOne = 2, setsTeamTwo = 1,
        pointsTeamOne = ?, pointsTeamTwo = ?,
        resultSubmittedBy = ?, resultSubmittedAt = ?,
        status = 'CONFIRMED', confirmedBy = ?, confirmedAt = ?, updatedAt = ?
      WHERE id = ?
    `).run(pts1.pointsTeamOne, pts1.pointsTeamTwo, r1.teams[2].userId, now, r1.teams[0].userId, now, now, r1.matches[1].id);

    const pts3 = calculatePoints(1, 2);
    db.prepare(`
      UPDATE matches SET
        matchDate = '2026-09-20',
        set1TeamOne = 4, set1TeamTwo = 6,
        set2TeamOne = 6, set2TeamTwo = 3,
        set3TeamOne = 2, set3TeamTwo = 6,
        gamesTeamOne = 12, gamesTeamTwo = 15,
        setsTeamOne = 1, setsTeamTwo = 2,
        pointsTeamOne = ?, pointsTeamTwo = ?,
        resultSubmittedBy = ?, resultSubmittedAt = ?,
        status = 'PENDING_CONFIRMATION', updatedAt = ?
      WHERE id = ?
    `).run(pts3.pointsTeamOne, pts3.pointsTeamTwo, r1.teams[1].userId, now, now, r1.matches[3].id);

    const pts5 = calculatePoints(2, 0);
    db.prepare(`
      UPDATE matches SET
        matchDate = '2026-09-22',
        set1TeamOne = 6, set1TeamTwo = 2,
        set2TeamOne = 6, set2TeamTwo = 4,
        gamesTeamOne = 12, gamesTeamTwo = 6,
        setsTeamOne = 2, setsTeamTwo = 0,
        pointsTeamOne = ?, pointsTeamTwo = ?,
        resultSubmittedBy = ?, resultSubmittedAt = ?,
        status = 'DISPUTED', disputedBy = ?, disputedAt = ?, updatedAt = ?
      WHERE id = ?
    `).run(pts5.pointsTeamOne, pts5.pointsTeamTwo, r1.teams[2].userId, now, r1.teams[3].userId, now, now, r1.matches[5].id);

    // Incidencia
    db.prepare(`
      INSERT INTO incidents (id, matchId, reportedBy, reportedAt, description, status, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, 'OPEN', ?, ?)
    `).run(
      crypto.randomUUID(), r1.matches[5].id, r1.teams[3].userId, now,
      'El resultado registrado es incorrecto. El partido terminó 0-2 a nuestro favor, no 2-0.',
      now, now
    );
  }

  // ─── RANKING 2: Liga Femenina Premier 2026 (Creado por Organizador 1) ──────
  const r2 = createRankingWithTeams({
    name: 'Liga Femenina Premier 2026',
    description: 'Circuito femenino de alto rendimiento con sede en Mirasierra.',
    startDate: '2026-10-01',
    endDate: '2026-12-15',
    locationId: locations[2].id, // Mirasierra
    levelId: levels[2].id,       // Avanzado
    categoryId: categories[1].id,// Femenina
    createdBy: org1Id,
    teams: [
      { name: 'Las Voleadoras', p1n: 'Laura', p1s: 'Gómez', p2n: 'Elena', p2s: 'Vázquez', email1: 'fem1@padelranking.dev' },
      { name: 'Drive & Revés', p1n: 'Marta', p1s: 'Navarro', p2n: 'Sara', p2s: 'Iglesias', email1: 'fem2@padelranking.dev' },
      { name: 'Pádel Queens', p1n: 'Patricia', p1s: 'Romero', p2n: 'Lucía', p2s: 'Alonso', email1: 'fem3@padelranking.dev' },
      { name: 'Golden Smash', p1n: 'Beatriz', p1s: 'Castro', p2n: 'Carmen', p2s: 'Gil', email1: 'fem4@padelranking.dev' },
    ]
  });
  // Resultados en r2
  {
    const pts = calculatePoints(2, 0);
    db.prepare(`
      UPDATE matches SET
        matchDate = '2026-10-05',
        set1TeamOne = 6, set1TeamTwo = 2,
        set2TeamOne = 6, set2TeamTwo = 3,
        gamesTeamOne = 12, gamesTeamTwo = 5,
        setsTeamOne = 2, setsTeamTwo = 0,
        pointsTeamOne = ?, pointsTeamTwo = ?,
        resultSubmittedBy = ?, resultSubmittedAt = ?,
        status = 'CONFIRMED', confirmedBy = ?, confirmedAt = ?, updatedAt = ?
      WHERE id = ?
    `).run(pts.pointsTeamOne, pts.pointsTeamTwo, r2.teams[0].userId, now, r2.teams[1].userId, now, now, r2.matches[0].id);

    const ptsB = calculatePoints(2, 1);
    db.prepare(`
      UPDATE matches SET
        matchDate = '2026-10-08',
        set1TeamOne = 7, set1TeamTwo = 5,
        set2TeamOne = 3, set2TeamTwo = 6,
        set3TeamOne = 6, set3TeamTwo = 4,
        gamesTeamOne = 16, gamesTeamTwo = 15,
        setsTeamOne = 2, setsTeamTwo = 1,
        pointsTeamOne = ?, pointsTeamTwo = ?,
        resultSubmittedBy = ?, resultSubmittedAt = ?,
        status = 'CONFIRMED', confirmedBy = ?, confirmedAt = ?, updatedAt = ?
      WHERE id = ?
    `).run(ptsB.pointsTeamOne, ptsB.pointsTeamTwo, r2.teams[2].userId, now, r2.teams[3].userId, now, now, r2.matches[5].id);
  }

  // ─── RANKING 3: Torneo Mixto Primavera 2026 (Creado por Organizador 1) ─────
  createRankingWithTeams({
    name: 'Torneo Mixto Primavera 2026',
    description: 'Competición mixta para parejas aficionadas y principiantes en Ciudad de la Raqueta.',
    startDate: '2026-04-01',
    endDate: '2026-06-30',
    locationId: locations[1].id, // Ciudad de la Raqueta
    levelId: levels[0].id,       // Iniciación
    categoryId: categories[2].id,// Mixta
    createdBy: org1Id,
    teams: [
      { name: 'Dúo Dinámico', p1n: 'Marcos', p1s: 'Sanz', p2n: 'Ana', p2s: 'Reyes', email1: 'mix1@padelranking.dev' },
      { name: 'Top Spinners', p1n: 'Jorge', p1s: 'Blanco', p2n: 'Silvia', p2s: 'Cano', email1: 'mix2@padelranking.dev' },
      { name: 'Pádel Mix Pro', p1n: 'Álvaro', p1s: 'Molina', p2n: 'Clara', p2s: 'Suárez', email1: 'mix3@padelranking.dev' },
      { name: 'De Bandeja', p1n: 'Rubén', p1s: 'Ortiz', p2n: 'Cristina', p2s: 'Pérez', email1: 'mix4@padelranking.dev' },
    ]
  });

  // ─── RANKING 4: Master Series Primera Categoría (Creado por Organizador 2) ─
  const r4 = createRankingWithTeams({
    name: 'Master Series Primera Categoría 2026',
    description: 'El ranking más competitivo de la temporada con los mejores jugadores de la región.',
    startDate: '2026-11-01',
    endDate: '2027-01-31',
    locationId: locations[3].id, // Real Club Pádel Sport
    levelId: levels[3].id,       // Pro
    categoryId: categories[0].id,// Masculina
    createdBy: org2Id,
    teams: [
      { name: 'Los Bombarderos', p1n: 'Alejandro', p1s: 'Gutiérrez', p2n: 'Gonzalo', p2s: 'Rubio', email1: 'pro1@padelranking.dev' },
      { name: 'Drop Shot Stars', p1n: 'Hugo', p1s: 'Delgado', p2n: 'Adrián', p2s: 'Lozano', email1: 'pro2@padelranking.dev' },
      { name: 'Víbora Team', p1n: 'Víctor', p1s: 'Serrano', p2n: 'Guillermo', p2s: 'Pascual', email1: 'pro3@padelranking.dev' },
      { name: 'Match Point', p1n: 'Ignacio', p1s: 'Marín', p2n: 'Manuel', p2s: 'Vidal', email1: 'pro4@padelranking.dev' },
    ]
  });
  // Resultados en r4
  {
    const pts = calculatePoints(2, 0);
    db.prepare(`
      UPDATE matches SET
        matchDate = '2026-11-05',
        set1TeamOne = 7, set1TeamTwo = 6,
        set2TeamOne = 6, set2TeamTwo = 4,
        gamesTeamOne = 13, gamesTeamTwo = 10,
        setsTeamOne = 2, setsTeamTwo = 0,
        pointsTeamOne = ?, pointsTeamTwo = ?,
        resultSubmittedBy = ?, resultSubmittedAt = ?,
        status = 'CONFIRMED', confirmedBy = ?, confirmedAt = ?, updatedAt = ?
      WHERE id = ?
    `).run(pts.pointsTeamOne, pts.pointsTeamTwo, r4.teams[0].userId, now, r4.teams[1].userId, now, now, r4.matches[0].id);

    const pts2 = calculatePoints(2, 1);
    db.prepare(`
      UPDATE matches SET
        matchDate = '2026-11-12',
        set1TeamOne = 6, set1TeamTwo = 3,
        set2TeamOne = 4, set2TeamTwo = 6,
        set3TeamOne = 7, set3TeamTwo = 5,
        gamesTeamOne = 17, gamesTeamTwo = 14,
        setsTeamOne = 2, setsTeamTwo = 1,
        pointsTeamOne = ?, pointsTeamTwo = ?,
        resultSubmittedBy = ?, resultSubmittedAt = ?,
        status = 'CONFIRMED', confirmedBy = ?, confirmedAt = ?, updatedAt = ?
      WHERE id = ?
    `).run(pts2.pointsTeamOne, pts2.pointsTeamTwo, r4.teams[0].userId, now, r4.teams[3].userId, now, now, r4.matches[2].id);
  }

  // ─── RANKING 5: Circuito Senior +45 Invierno (Creado por ADMIN) ───────────
  createRankingWithTeams({
    name: 'Circuito Senior +45 Invierno 2026',
    description: 'Torneo social para mayores de 45 años en el Club Deportivo El Tejar.',
    startDate: '2026-11-15',
    endDate: '2027-02-28',
    locationId: locations[4].id, // El Tejar
    levelId: levels[4].id,       // Veteranos
    categoryId: categories[0].id,// Masculina
    createdBy: adminId,
    teams: [
      { name: 'Leyendas del Cristal', p1n: 'Antonio', p1s: 'Ibáñez', p2n: 'José', p2s: 'Garrido', email1: 'vet1@padelranking.dev' },
      { name: 'Veteranos del Pádel', p1n: 'Francisco', p1s: 'Medina', p2n: 'Ramón', p2s: 'Vicente', email1: 'vet2@padelranking.dev' },
      { name: 'Globo Perfecto', p1n: 'Emilio', p1s: 'Herrera', p2n: 'Tomás', p2s: 'Calvo', email1: 'vet3@padelranking.dev' },
      { name: 'Estrategas del Pádel', p1n: 'Joaquín', p1s: 'Ramos', p2n: 'Julio', p2s: 'Vega', email1: 'vet4@padelranking.dev' },
    ]
  });

  console.log('✅ Seed aplicado correctamente.');
  console.log('🏆 5 rankings creados con sedes, niveles, categorías y equipos.');
  console.log('📋 Credenciales:');
  console.log('   ADMIN:        admin@padelranking.dev / Admin123!');
  console.log('   ORGANIZADOR 1: organizador1@padelranking.dev / Org123!');
  console.log('   ORGANIZADOR 2: organizador2@padelranking.dev / Org123!');
  console.log('   Equipos:      equipo1@padelranking.dev / Team123! (hasta equipo4, fem1-4, mix1-4, pro1-4, vet1-4)');
}

module.exports = { runSeed };
