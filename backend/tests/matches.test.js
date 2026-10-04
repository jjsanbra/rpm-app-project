'use strict';

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test_jwt_secret_key_1234567890';

const request = require('supertest');
const app = require('../src/app');
const { initDb, closeDb, getDb } = require('../src/database/db');
const { runSeed } = require('../src/database/seed');

describe('Matches & Scoring Integration Tests', () => {
  let adminToken;
  let team1Token;
  let rankingId;

  beforeAll(async () => {
    initDb();
    await runSeed();

    const aRes = await request(app).post('/api/auth/login').send({ email: 'admin@padelranking.dev', password: 'Admin123!' });
    adminToken = aRes.body.data.token;

    const t1Res = await request(app).post('/api/auth/login').send({ email: 'equipo1@padelranking.dev', password: 'Team123!' });
    team1Token = t1Res.body.data.token;

    const rankingsRes = await request(app).get('/api/rankings');
    rankingId = rankingsRes.body.data[0].id;
  });

  afterAll(() => {
    closeDb();
  });

  it('debe listar partidos del ranking', async () => {
    const res = await request(app).get(`/api/matches?rankingId=${rankingId}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it('debe registrar un resultado válido (2-0) pasando a PENDING_CONFIRMATION', async () => {
    const db = getDb();
    const team1 = db.prepare("SELECT id FROM teams WHERE name = 'Los Ases'").get();
    
    // Buscar un match en PENDING_RESULT donde participe equipo1 (Los Ases)
    const match = db.prepare(`
      SELECT * FROM matches 
      WHERE status = 'PENDING_RESULT' AND (teamOneId = ? OR teamTwoId = ?)
    `).get(team1.id, team1.id);

    expect(match).toBeDefined();

    const isTeamOne = match.teamOneId === team1.id;
    const setsOne = isTeamOne ? 2 : 0;
    const setsTwo = isTeamOne ? 0 : 2;

    const res = await request(app)
      .post(`/api/matches/${match.id}/result`)
      .set('Authorization', `Bearer ${team1Token}`)
      .send({
        setsTeamOne: setsOne,
        setsTeamTwo: setsTwo,
        matchDate: '2026-09-25',
      });

    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe('PENDING_CONFIRMATION');
    expect(res.body.data.pointsTeamOne).toBe(isTeamOne ? 5 : 1);
    expect(res.body.data.pointsTeamTwo).toBe(isTeamOne ? 1 : 5);
  });

  it('el equipo contrario debe poder confirmar el resultado pasando a CONFIRMED', async () => {
    const db = getDb();
    const match = db.prepare("SELECT * FROM matches WHERE status = 'PENDING_CONFIRMATION'").get();
    expect(match).toBeDefined();

    // Determinar qué usuario pertenece al equipo rival (que no registró)
    const submitter = db.prepare('SELECT teamId FROM users WHERE id = ?').get(match.resultSubmittedBy);
    const rivalTeamId = match.teamOneId === submitter.teamId ? match.teamTwoId : match.teamOneId;
    const rivalUser = db.prepare('SELECT email FROM users WHERE teamId = ?').get(rivalTeamId);
    
    const rivalRes = await request(app).post('/api/auth/login').send({ email: rivalUser.email, password: 'Team123!' });
    const rivalToken = rivalRes.body.data.token;

    const res = await request(app)
      .post(`/api/matches/${match.id}/confirm`)
      .set('Authorization', `Bearer ${rivalToken}`)
      .send();

    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe('CONFIRMED');
    expect(res.body.data.confirmedBy).toBeDefined();
  });

  it('la clasificación oficial debe calcular puntos y estadísticas correctamente', async () => {
    const res = await request(app).get(`/api/classification/${rankingId}/official`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);

    const table = res.body.data;
    expect(table.length).toBe(4);
    table.forEach((row, idx) => {
      expect(row.position).toBe(idx + 1);
      expect(row).toHaveProperty('totalPoints');
      expect(row).toHaveProperty('played');
      expect(row).toHaveProperty('setsWon');
      expect(row).toHaveProperty('setsLost');
      expect(row).toHaveProperty('setsDiff');
    });
  });

  it('un ADMIN puede resolver un conflicto y dejar auditoría', async () => {
    const db = getDb();
    const disputed = db.prepare("SELECT * FROM matches WHERE status = 'DISPUTED'").get();
    expect(disputed).toBeDefined();

    const res = await request(app)
      .put(`/api/matches/${disputed.id}/admin-override`)
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        setsTeamOne: 0,
        setsTeamTwo: 2,
        status: 'CONFIRMED',
        matchDate: '2026-09-22',
        reason: 'Resolución de incidencia tras revisión de actas',
      });

    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe('CONFIRMED');
    expect(res.body.data.setsTeamOne).toBe(0);
    expect(res.body.data.setsTeamTwo).toBe(2);

    // Verificar log de auditoría
    const auditRes = await request(app)
      .get(`/api/audit-logs?entity=Match&entityId=${disputed.id}`)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(auditRes.status).toBe(200);
    expect(auditRes.body.data.length).toBeGreaterThan(0);
  });
});
