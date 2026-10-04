'use strict';

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test_jwt_secret_key_1234567890';

const request = require('supertest');
const app = require('../src/app');
const { initDb, closeDb } = require('../src/database/db');
const { runSeed } = require('../src/database/seed');

describe('Auxiliary Entities Integration Tests', () => {
  let adminToken;

  beforeAll(async () => {
    initDb();
    await runSeed();

    const aRes = await request(app).post('/api/auth/login').send({ email: 'admin@padelranking.dev', password: 'Admin123!' });
    adminToken = aRes.body.data.token;
  });

  afterAll(() => {
    closeDb();
  });

  it('debe listar niveles, categorías y ubicaciones públicamente', async () => {
    const levelsRes = await request(app).get('/api/levels');
    expect(levelsRes.status).toBe(200);
    expect(Array.isArray(levelsRes.body.data)).toBe(true);

    const categoriesRes = await request(app).get('/api/categories');
    expect(categoriesRes.status).toBe(200);
    expect(Array.isArray(categoriesRes.body.data)).toBe(true);

    const locationsRes = await request(app).get('/api/locations');
    expect(locationsRes.status).toBe(200);
    expect(Array.isArray(locationsRes.body.data)).toBe(true);
  });

  it('un ADMIN puede crear un nuevo patrocinador', async () => {
    const res = await request(app)
      .post('/api/sponsors')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        name: 'Bullpadel Test',
        description: 'Patrocinador deportivo',
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      });

    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Bullpadel Test');
  });
});
