'use strict';

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test_jwt_secret_key_1234567890';

const request = require('supertest');
const app = require('../src/app');
const { initDb, closeDb } = require('../src/database/db');
const { runSeed } = require('../src/database/seed');

describe('Rankings Module Integration Tests', () => {
  let adminToken;
  let teamToken;
  let rankingId;

  beforeAll(async () => {
    initDb();
    await runSeed();

    const adminLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@padelranking.dev', password: 'Admin123!' });
    adminToken = adminLogin.body.data.token;

    const teamLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'equipo1@padelranking.dev', password: 'Team123!' });
    teamToken = teamLogin.body.data.token;
  });

  afterAll(() => {
    closeDb();
  });

  it('debe listar rankings públicamente sin autenticación', async () => {
    const res = await request(app).get('/api/rankings');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
    rankingId = res.body.data[0].id;
  });

  it('debe obtener un ranking por ID públicamente', async () => {
    const res = await request(app).get(`/api/rankings/${rankingId}`);
    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe(rankingId);
    expect(res.body.data).toHaveProperty('name');
  });

  it('debe permitir a un ADMIN crear un nuevo ranking', async () => {
    const newRanking = {
      name: 'Torneo Invierno 2026',
      description: 'Torneo de fin de año',
      startDate: '2026-11-01',
      endDate: '2026-12-31',
      regulation: 'Reglamento oficial',
      active: true,
    };

    const res = await request(app)
      .post('/api/rankings')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(newRanking);

    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe(newRanking.name);
  });

  it('debe denegar a un TEAM_USER la creación de un ranking (403)', async () => {
    const res = await request(app)
      .post('/api/rankings')
      .set('Authorization', `Bearer ${teamToken}`)
      .send({
        name: 'Ranking no autorizado',
        startDate: '2026-11-01',
        endDate: '2026-12-31',
      });

    expect(res.status).toBe(403);
  });
});
