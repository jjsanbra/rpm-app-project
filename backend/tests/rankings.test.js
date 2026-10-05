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
  let org1Token;
  let org2Token;
  let rankingId;
  let org1RankingId;

  beforeAll(async () => {
    initDb();
    await runSeed();

    const adminLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@padelranking.dev', password: 'Admin123!' });
    adminToken = adminLogin.body.data.token;

    const org1Login = await request(app)
      .post('/api/auth/login')
      .send({ email: 'organizador1@padelranking.dev', password: 'Org123!' });
    org1Token = org1Login.body.data.token;

    const org2Login = await request(app)
      .post('/api/auth/login')
      .send({ email: 'organizador2@padelranking.dev', password: 'Org123!' });
    org2Token = org2Login.body.data.token;

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

  it('debe permitir a un ORGANIZER crear su propio ranking', async () => {
    const orgRanking = {
      name: 'Torneo Privado Org 1',
      description: 'Ranking creado por Organizador 1',
      startDate: '2026-11-01',
      endDate: '2026-12-31',
      regulation: 'Reglamento de torneo privado',
      active: true,
    };

    const res = await request(app)
      .post('/api/rankings')
      .set('Authorization', `Bearer ${org1Token}`)
      .send(orgRanking);

    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe(orgRanking.name);
    org1RankingId = res.body.data.id;
  });

  it('un ORGANIZER solo debe ver sus propios rankings cuando consulta como admin/organizer', async () => {
    const res = await request(app)
      .get('/api/rankings?includeInactive=true')
      .set('Authorization', `Bearer ${org1Token}`);

    expect(res.status).toBe(200);
    // Debe ver únicamente los rankings creados por organizador 1 (en seed hay 2 + 1 recién creado = 3)
    expect(res.body.data.length).toBe(3);
    for (const r of res.body.data) {
      expect(r.creatorEmail).toBe('organizador1@padelranking.dev');
    }
  });

  it('un ORGANIZER no puede editar un ranking que no le pertenece (403)', async () => {
    // rankingId pertenece al admin
    const res = await request(app)
      .put(`/api/rankings/${rankingId}`)
      .set('Authorization', `Bearer ${org1Token}`)
      .send({
        name: 'Intento de hack de ranking',
        startDate: '2026-11-01',
        endDate: '2026-12-31',
      });

    expect(res.status).toBe(403);
  });

  it('un ORGANIZER no puede desactivar ni borrar rankings de otro organizador (403)', async () => {
    const res = await request(app)
      .delete(`/api/rankings/${org1RankingId}`)
      .set('Authorization', `Bearer ${org2Token}`);

    expect(res.status).toBe(403);
  });

  it('un ORGANIZER puede eliminar su propio ranking', async () => {
    const res = await request(app)
      .delete(`/api/rankings/${org1RankingId}`)
      .set('Authorization', `Bearer ${org1Token}`);

    expect(res.status).toBe(200);
  });

  it('debe permitir a un ADMIN gestionar (listar, crear, editar, eliminar) la lista de organizadores con nombre, apellidos y teléfono', async () => {
    // Listar
    const listRes = await request(app)
      .get('/api/users/organizers')
      .set('Authorization', `Bearer ${adminToken}`);
    expect(listRes.status).toBe(200);
    expect(listRes.body.data.length).toBeGreaterThanOrEqual(2);
    expect(listRes.body.data[0]).toHaveProperty('firstName');
    expect(listRes.body.data[0]).toHaveProperty('lastName');
    expect(listRes.body.data[0]).toHaveProperty('phone');

    // Crear
    const createRes = await request(app)
      .post('/api/users/organizers')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        email: 'nuevo.org@padelranking.dev',
        password: 'OrgPassword123!',
        firstName: 'Roberto',
        lastName: 'Sánchez',
        phone: '+34 655 444 333'
      });
    expect(createRes.status).toBe(201);
    expect(createRes.body.data.email).toBe('nuevo.org@padelranking.dev');
    expect(createRes.body.data.firstName).toBe('Roberto');
    expect(createRes.body.data.lastName).toBe('Sánchez');
    expect(createRes.body.data.phone).toBe('+34 655 444 333');

    // Editar (cambio de email, nombre, teléfono y estado)
    const updateRes = await request(app)
      .put(`/api/users/organizers/${createRes.body.data.id}`)
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        email: 'nuevo.org.editado@padelranking.dev',
        firstName: 'Roberto Editado',
        phone: '+34 699 888 777',
        active: false
      });
    expect(updateRes.status).toBe(200);
    expect(updateRes.body.data.email).toBe('nuevo.org.editado@padelranking.dev');
    expect(updateRes.body.data.firstName).toBe('Roberto Editado');
    expect(updateRes.body.data.phone).toBe('+34 699 888 777');
    expect(Boolean(updateRes.body.data.active)).toBe(false);

    // Eliminar
    const delRes = await request(app)
      .delete(`/api/users/organizers/${createRes.body.data.id}`)
      .set('Authorization', `Bearer ${adminToken}`);
    expect(delRes.status).toBe(200);
  });

  it('debe denegar a un ORGANIZER la gestión de otros organizadores (403)', async () => {
    const res = await request(app)
      .get('/api/users/organizers')
      .set('Authorization', `Bearer ${org1Token}`);

    expect(res.status).toBe(403);
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
