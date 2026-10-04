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

  it('debe registrar un resultado válido por juegos (6-3, 6-4 => 2-0) pasando a PENDING_CONFIRMATION', async () => {
    const db = getDb();
    const team1 = db.prepare("SELECT id FROM teams WHERE name = 'Los Ases'").get();
    
    // Buscar un match en PENDING_RESULT donde participe equipo1 (Los Ases)
    const match = db.prepare(`
      SELECT * FROM matches 
      WHERE status = 'PENDING_RESULT' AND (teamOneId = ? OR teamTwoId = ?)
    `).get(team1.id, team1.id);

    expect(match).toBeDefined();

    const isTeamOne = match.teamOneId === team1.id;
    const s1_1 = isTeamOne ? 6 : 3;
    const s1_2 = isTeamOne ? 3 : 6;
    const s2_1 = isTeamOne ? 6 : 4;
    const s2_2 = isTeamOne ? 4 : 6;

    const res = await request(app)
      .post(`/api/matches/${match.id}/result`)
      .set('Authorization', `Bearer ${team1Token}`)
      .send({
        set1TeamOne: s1_1,
        set1TeamTwo: s1_2,
        set2TeamOne: s2_1,
        set2TeamTwo: s2_2,
        matchDate: '2026-09-25',
      });

    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe('PENDING_CONFIRMATION');
    expect(res.body.data.setsTeamOne).toBe(isTeamOne ? 2 : 0);
    expect(res.body.data.setsTeamTwo).toBe(isTeamOne ? 0 : 2);
    expect(res.body.data.gamesTeamOne).toBe(isTeamOne ? 12 : 7);
    expect(res.body.data.gamesTeamTwo).toBe(isTeamOne ? 7 : 12);
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

  it('la clasificación oficial debe calcular puntos, sets y diferencia de juegos correctamente', async () => {
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
      expect(row).toHaveProperty('gamesWon');
      expect(row).toHaveProperty('gamesLost');
      expect(row).toHaveProperty('gamesDiff');
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

  describe('Real-Time Live Match Scoring', () => {
    let liveMatch;
    let teamOneToken;
    let rivalToken;

    beforeAll(async () => {
      const db = getDb();
      // Encontrar un partido en PENDING_RESULT
      liveMatch = db.prepare(`SELECT * FROM matches WHERE status = 'PENDING_RESULT' LIMIT 1`).get();
      if (!liveMatch) {
        // Si no hay, buscar cualquiera que no esté en curso y ponerlo en PENDING_RESULT
        const m = db.prepare(`SELECT * FROM matches LIMIT 1`).get();
        db.prepare(`UPDATE matches SET status = 'PENDING_RESULT' WHERE id = ?`).run(m.id);
        liveMatch = db.prepare(`SELECT * FROM matches WHERE id = ?`).get(m.id);
      }

      const team1User = db.prepare('SELECT email FROM users WHERE teamId = ?').get(liveMatch.teamOneId);
      const t1Res = await request(app).post('/api/auth/login').send({ email: team1User.email, password: 'Team123!' });
      teamOneToken = t1Res.body.data.token;

      const rivalUser = db.prepare('SELECT email FROM users WHERE teamId = ?').get(liveMatch.teamTwoId);
      const rivalRes = await request(app).post('/api/auth/login').send({ email: rivalUser.email, password: 'Team123!' });
      rivalToken = rivalRes.body.data.token;
    });

    it('un equipo debe poder solicitar iniciar un partido en vivo con modo VENTAJAS', async () => {
      const res = await request(app)
        .post(`/api/matches/${liveMatch.id}/live/request`)
        .set('Authorization', `Bearer ${teamOneToken}`)
        .send({ gameMode: 'ADVANTAGE' });

      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('REQUESTED');
      expect(res.body.data.gameMode).toBe('ADVANTAGE');
    });

    it('el equipo solicitante NO debe poder auto-aprobar su propia solicitud', async () => {
      const res = await request(app)
        .post(`/api/matches/${liveMatch.id}/live/accept`)
        .set('Authorization', `Bearer ${teamOneToken}`);

      expect(res.status).toBe(400);
      expect(res.body.error.message).toContain('No puedes aceptar');
    });

    it('el equipo rival debe poder aceptar el partido en vivo conservando el modo ADVANTAGE', async () => {
      const res = await request(app)
        .post(`/api/matches/${liveMatch.id}/live/accept`)
        .set('Authorization', `Bearer ${rivalToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('IN_PROGRESS');
      expect(res.body.data.gameMode).toBe('ADVANTAGE');
    });

    it('se deben poder anotar puntos en tiempo real (0 -> 15 -> 30 -> 40)', async () => {
      // Punto 1: 15-0
      let res = await request(app)
        .post(`/api/matches/${liveMatch.id}/live/point`)
        .set('Authorization', `Bearer ${teamOneToken}`)
        .send({ team: 1 });
      expect(res.status).toBe(200);
      expect(res.body.data.pointsTeamOne).toBe('15');
      expect(res.body.data.pointsTeamTwo).toBe('0');

      // Punto 2: 30-0
      res = await request(app)
        .post(`/api/matches/${liveMatch.id}/live/point`)
        .set('Authorization', `Bearer ${teamOneToken}`)
        .send({ team: 1 });
      expect(res.body.data.pointsTeamOne).toBe('30');

      // Deshacer punto (Undo): vuelve a 15-0
      const undoRes = await request(app)
        .post(`/api/matches/${liveMatch.id}/live/undo`)
        .set('Authorization', `Bearer ${teamOneToken}`);
      expect(undoRes.status).toBe(200);
      expect(undoRes.body.data.pointsTeamOne).toBe('15');
    });

    it('debe manejar correctamente las ventajas en modo ADVANTAGE (40-40 -> AD -> 40-40 -> AD -> Juego)', async () => {
      // Llevar marcador a 40-40:
      // T1 ya tiene 15. T1 suma a 30 y 40:
      await request(app).post(`/api/matches/${liveMatch.id}/live/point`).set('Authorization', `Bearer ${teamOneToken}`).send({ team: 1 });
      await request(app).post(`/api/matches/${liveMatch.id}/live/point`).set('Authorization', `Bearer ${teamOneToken}`).send({ team: 1 });
      // T2 suma 15, 30, 40:
      await request(app).post(`/api/matches/${liveMatch.id}/live/point`).set('Authorization', `Bearer ${teamOneToken}`).send({ team: 2 });
      await request(app).post(`/api/matches/${liveMatch.id}/live/point`).set('Authorization', `Bearer ${teamOneToken}`).send({ team: 2 });
      let deuceRes = await request(app).post(`/api/matches/${liveMatch.id}/live/point`).set('Authorization', `Bearer ${teamOneToken}`).send({ team: 2 });
      
      expect(deuceRes.body.data.pointsTeamOne).toBe('40');
      expect(deuceRes.body.data.pointsTeamTwo).toBe('40');

      // T1 anota -> Ventaja T1 (AD - 40)
      let ad1Res = await request(app).post(`/api/matches/${liveMatch.id}/live/point`).set('Authorization', `Bearer ${teamOneToken}`).send({ team: 1 });
      expect(ad1Res.body.data.pointsTeamOne).toBe('AD');
      expect(ad1Res.body.data.pointsTeamTwo).toBe('40');

      // T2 anota -> Vuelve a Iguales (40 - 40)
      let backDeuceRes = await request(app).post(`/api/matches/${liveMatch.id}/live/point`).set('Authorization', `Bearer ${teamOneToken}`).send({ team: 2 });
      expect(backDeuceRes.body.data.pointsTeamOne).toBe('40');
      expect(backDeuceRes.body.data.pointsTeamTwo).toBe('40');

      // T2 anota -> Ventaja T2 (40 - AD)
      let ad2Res = await request(app).post(`/api/matches/${liveMatch.id}/live/point`).set('Authorization', `Bearer ${teamOneToken}`).send({ team: 2 });
      expect(ad2Res.body.data.pointsTeamOne).toBe('40');
      expect(ad2Res.body.data.pointsTeamTwo).toBe('AD');

      // T2 anota desde AD -> Gana el juego (set1TeamTwo pasa a 1, marcador a 0-0)
      let winGameRes = await request(app).post(`/api/matches/${liveMatch.id}/live/point`).set('Authorization', `Bearer ${teamOneToken}`).send({ team: 2 });
      expect(winGameRes.body.data.set1TeamTwo).toBe(1);
      expect(winGameRes.body.data.pointsTeamOne).toBe('0');
      expect(winGameRes.body.data.pointsTeamTwo).toBe('0');
    });

    it('ambos capitanes deben poder firmar y confirmar el acta', async () => {
      // Firma equipo 1
      let res = await request(app)
        .post(`/api/matches/${liveMatch.id}/live/sign`)
        .set('Authorization', `Bearer ${teamOneToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.confirmedByTeamOne).toBe(1);

      // Firma equipo 2 -> confirma definitivamente el partido
      res = await request(app)
        .post(`/api/matches/${liveMatch.id}/live/sign`)
        .set('Authorization', `Bearer ${rivalToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('CONFIRMED');
    });
  });
});
