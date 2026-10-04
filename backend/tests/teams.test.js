'use strict';

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test_jwt_secret_key_1234567890';

const request = require('supertest');
const app = require('../src/app');
const { initDb, closeDb } = require('../src/database/db');
const { runSeed } = require('../src/database/seed');

describe('Teams Module Integration Tests', () => {
  let adminToken;
  let teamToken;

  beforeAll(async () => {
    initDb();
    await runSeed();

    const aRes = await request(app).post('/api/auth/login').send({ email: 'admin@padelranking.dev', password: 'Admin123!' });
    adminToken = aRes.body.data.token;

    const tRes = await request(app).post('/api/auth/login').send({ email: 'equipo1@padelranking.dev', password: 'Team123!' });
    teamToken = tRes.body.data.token;
  });

  afterAll(() => {
    closeDb();
  });

  it('debe listar equipos públicamente', async () => {
    const res = await request(app).get('/api/teams');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThanOrEqual(4);
  });

  it('un ADMIN puede crear un nuevo equipo con emails y credenciales', async () => {
    const newTeam = {
      name: 'Volea Perfecta',
      player1Name: 'Mario',
      player1Surname: 'Navarro',
      player2Name: 'Sergio',
      player2Surname: 'Gómez',
      emails: ['mario@voleaperfecta.dev', 'sergio@voleaperfecta.dev'],
    };

    const res = await request(app)
      .post('/api/teams')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(newTeam);

    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Volea Perfecta');
    expect(res.body.data.emails.length).toBe(2);
  });

  it('debe rechazar la creación de equipo si no es ADMIN (403)', async () => {
    const res = await request(app)
      .post('/api/teams')
      .set('Authorization', `Bearer ${teamToken}`)
      .send({
        name: 'Equipo No Autorizado',
        player1Name: 'Juan',
        player1Surname: 'Pérez',
        player2Name: 'Pedro',
        player2Surname: 'Gómez',
        emails: ['juan@test.com'],
      });

    expect(res.status).toBe(403);
  });

  it('debe rechazar equipo con más de 2 emails (400)', async () => {
    const res = await request(app)
      .post('/api/teams')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        name: 'Equipo Muchos Emails',
        player1Name: 'Juan',
        player1Surname: 'Pérez',
        player2Name: 'Pedro',
        player2Surname: 'Gómez',
        emails: ['uno@test.com', 'dos@test.com', 'tres@test.com'],
      });

    expect(res.status).toBe(400);
  });
});
