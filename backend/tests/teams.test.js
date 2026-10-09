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

  it('un ADMIN puede crear un nuevo equipo con teléfonos, emails y credenciales', async () => {
    const newTeam = {
      name: 'Volea Perfecta',
      player1Name: 'Mario',
      player1Surname: 'Navarro',
      player2Name: 'Sergio',
      player2Surname: 'Gómez',
      phone: '+34 600 111 222',
      phone2: '+34 600 333 444',
      emails: ['mario@voleaperfecta.dev', 'sergio@voleaperfecta.dev'],
    };

    const res = await request(app)
      .post('/api/teams')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(newTeam);

    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Volea Perfecta');
    expect(res.body.data.phone).toBe('+34 600 111 222');
    expect(res.body.data.phone2).toBe('+34 600 333 444');
    expect(res.body.data.emails.length).toBe(2);

    // Actualizar teléfonos
    const updateRes = await request(app)
      .put(`/api/teams/${res.body.data.id}`)
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ phone: '+34 699 999 999' });

    expect(updateRes.status).toBe(200);
    expect(updateRes.body.data.phone).toBe('+34 699 999 999');
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

  it('un ADMIN o ORGANIZER puede eliminar un equipo que no tenga partidos vinculados', async () => {
    // 1. Crear equipo sin partidos
    const createRes = await request(app)
      .post('/api/teams')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        name: 'Equipo Para Borrar',
        player1Name: 'Test1',
        player1Surname: 'Apellido1',
        player2Name: 'Test2',
        player2Surname: 'Apellido2',
        emails: ['paraborrar@test.com'],
      });
    expect(createRes.status).toBe(201);
    const teamId = createRes.body.data.id;

    // 2. Login como ORGANIZADOR
    const orgRes = await request(app)
      .post('/api/auth/login')
      .send({ email: 'organizador1@padelranking.dev', password: 'Org123!' });
    const orgToken = orgRes.body.data.token;

    // 3. Eliminar equipo con token de organizador
    const delRes = await request(app)
      .delete(`/api/teams/${teamId}`)
      .set('Authorization', `Bearer ${orgToken}`);
    expect(delRes.status).toBe(200);

    // 4. Verificar que ya no existe (404)
    const getRes = await request(app).get(`/api/teams/${teamId}`);
    expect(getRes.status).toBe(404);
  });

  it('debe rechazar la eliminación si el usuario es TEAM_USER (403)', async () => {
    const res = await request(app)
      .delete('/api/teams/some-team-id')
      .set('Authorization', `Bearer ${teamToken}`);
    expect(res.status).toBe(403);
  });

  it('debe impedir la eliminación (409 Conflict) si el equipo tiene partidos asignados o disputados', async () => {
    // equipo1 tiene partidos generados en el seed
    const teams = await request(app).get('/api/teams');
    const teamWithMatches = teams.body.data[0];

    const res = await request(app)
      .delete(`/api/teams/${teamWithMatches.id}`)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.status).toBe(409);
    expect(res.body.error.message).toContain('No se puede eliminar el equipo porque tiene partidos');
  });
});

