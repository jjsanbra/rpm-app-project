'use strict';

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test_jwt_secret_key_1234567890';

const request = require('supertest');
const app = require('../src/app');
const { initDb, closeDb } = require('../src/database/db');
const { runSeed } = require('../src/database/seed');

describe('Auth Module Integration Tests', () => {
  beforeAll(async () => {
    initDb();
    await runSeed();
  });

  afterAll(() => {
    closeDb();
  });

  describe('POST /api/auth/login', () => {
    it('debe autenticar al admin con credenciales correctas', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'admin@padelranking.dev',
          password: 'Admin123!',
        });

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('token');
      expect(res.body.data.user).toMatchObject({
        email: 'admin@padelranking.dev',
        role: 'ADMIN',
      });
    });

    it('debe autenticar a un TEAM_USER con credenciales correctas', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'equipo1@padelranking.dev',
          password: 'Team123!',
        });

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('token');
      expect(res.body.data.user.role).toBe('TEAM_USER');
      expect(res.body.data.user.teamId).toBeDefined();
    });

    it('debe rechazar credenciales incorrectas con 401', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'admin@padelranking.dev',
          password: 'WrongPassword!',
        });

      expect(res.status).toBe(401);
      expect(res.body.error).toBeDefined();
    });

    it('debe rechazar emails inexistentes con 401', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'noexiste@padelranking.dev',
          password: 'SomePassword123!',
        });

      expect(res.status).toBe(401);
    });
  });

  describe('GET /api/auth/me', () => {
    it('debe retornar el usuario autenticado', async () => {
      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({ email: 'admin@padelranking.dev', password: 'Admin123!' });

      const token = loginRes.body.data.token;

      const meRes = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${token}`);

      expect(meRes.status).toBe(200);
      expect(meRes.body.data.email).toBe('admin@padelranking.dev');
    });

    it('debe retornar 401 sin token de autenticación', async () => {
      const res = await request(app).get('/api/auth/me');
      expect(res.status).toBe(401);
    });
  });

  describe('POST /api/auth/forgot-password', () => {
    it('debe generar token de recuperación para email válido', async () => {
      const res = await request(app)
        .post('/api/auth/forgot-password')
        .send({ email: 'equipo1@padelranking.dev' });

      expect(res.status).toBe(200);
      expect(res.body.data.message).toContain('recuperación');
    });
  });
});
