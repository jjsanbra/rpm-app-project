'use strict';

/**
 * app.js — Configuración de la aplicación Express.
 * Separado de server.js para facilitar los tests de integración.
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const config = require('./config/env');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
const { generalRateLimiter } = require('./middleware/rateLimiter');

// Importar rutas
const authRoutes = require('./modules/auth/auth.routes');
const rankingRoutes = require('./modules/rankings/ranking.routes');
const teamRoutes = require('./modules/teams/team.routes');
const userRoutes = require('./modules/users/user.routes');
const matchRoutes = require('./modules/matches/match.routes');
const incidentRoutes = require('./modules/incidents/incident.routes');
const rankingTeamRoutes = require('./modules/rankingTeams/rankingTeam.routes');
const classificationRoutes = require('./modules/classification/classification.routes');

// Entidades auxiliares con CRUD genérico
const { createCrudRouter } = require('./utils/crudFactory');

const app = express();

// ─── Seguridad ───────────────────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false, // Desactivado para Swagger UI en dev
}));

// ─── CORS ────────────────────────────────────────────────────────────────────
app.use(cors({
  origin: config.env === 'development' ? true : config.cors.origins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// ─── Logging ─────────────────────────────────────────────────────────────────
if (config.env !== 'test') {
  app.use(morgan(config.env === 'development' ? 'dev' : 'combined'));
}

// ─── Body parsing ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' })); // límite para imágenes base64
app.use(express.urlencoded({ extended: true }));

// ─── Rate limiting general ────────────────────────────────────────────────────
app.use('/api/', generalRateLimiter);

// ─── Swagger ─────────────────────────────────────────────────────────────────
const { schemas } = require('./docs/schemas');

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Padel Ranking API',
      version: '1.0.0',
      description: `
API REST para gestión de rankings de pádel.

## Autenticación
Usar JWT Bearer token. Obtener el token mediante POST /api/auth/login.
      `,
      contact: {
        name: 'Padel Ranking App',
      },
    },
    servers: [
      { url: `http://localhost:${config.port}`, description: 'Desarrollo local' },
      { url: '/', description: 'Servidor actual' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas,
    },
    security: [{ bearerAuth: [] }],
  },
  apis: [
    path.join(__dirname, './modules/**/*.routes.js'),
    path.join(__dirname, './modules/**/*.controller.js'),
    path.join(__dirname, './app.js'),
  ],
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCss: '.swagger-ui .topbar { background: #1a1a2e; } .swagger-ui .topbar .link { color: #00d4ff; }',
  customSiteTitle: 'Padel Ranking API Docs',
}));

// Endpoint para obtener el spec JSON
app.get('/api-docs.json', (req, res) => {
  res.json(swaggerSpec);
});

// ─── Health check ─────────────────────────────────────────────────────────────
/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health check del estado del servidor API
 *     tags: [System]
 *     responses:
 *       200:
 *         description: Servidor en funcionamiento
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    environment: config.env,
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// ─── Rutas de la API ──────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/rankings', rankingRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/users', userRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/incidents', incidentRoutes);
app.use('/api/ranking-team-registrations', rankingTeamRoutes);
app.use('/api/classification', classificationRoutes);

// Entidades auxiliares
/**
 * @swagger
 * tags:
 *   - name: Levels
 *     description: Catálogo maestro de niveles de juego
 *   - name: Categories
 *     description: Catálogo maestro de categorías de competición
 *   - name: Sponsors
 *     description: Catálogo maestro de patrocinadores oficiales
 *   - name: Locations
 *     description: Catálogo maestro de sedes e instalaciones deportivas (con dirección, ciudad y CP)
 *   - name: Audit
 *     description: Consulta de pistas de auditoría del sistema (solo ADMIN)
 *   - name: System
 *     description: Estado y diagnóstico del sistema
 */

/**
 * @swagger
 * /api/levels:
 *   get:
 *     summary: Listar todos los niveles
 *     tags: [Levels]
 *     responses:
 *       200:
 *         description: Lista de niveles
 *   post:
 *     summary: Crear un nuevo nivel (solo ADMIN)
 *     tags: [Levels]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Nivel creado
 *
 * /api/levels/{id}:
 *   get:
 *     summary: Obtener nivel por ID
 *     tags: [Levels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalle del nivel
 *   put:
 *     summary: Actualizar nivel (solo ADMIN)
 *     tags: [Levels]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Nivel actualizado
 *   delete:
 *     summary: Eliminar nivel (solo ADMIN)
 *     tags: [Levels]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Nivel eliminado
 */
app.use('/api/levels', createCrudRouter('levels', ['name', 'description']));

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Listar todas las categorías
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *   post:
 *     summary: Crear una nueva categoría (solo ADMIN)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada
 *
 * /api/categories/{id}:
 *   get:
 *     summary: Obtener categoría por ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalle de la categoría
 *   put:
 *     summary: Actualizar categoría (solo ADMIN)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría actualizada
 *   delete:
 *     summary: Eliminar categoría (solo ADMIN)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Categoría eliminada
 */
app.use('/api/categories', createCrudRouter('categories', ['name', 'description']));

/**
 * @swagger
 * /api/sponsors:
 *   get:
 *     summary: Listar todos los patrocinadores
 *     tags: [Sponsors]
 *     responses:
 *       200:
 *         description: Lista de patrocinadores
 *   post:
 *     summary: Crear un nuevo patrocinador (solo ADMIN)
 *     tags: [Sponsors]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               logo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Patrocinador creado
 *
 * /api/sponsors/{id}:
 *   get:
 *     summary: Obtener patrocinador por ID
 *     tags: [Sponsors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalle del patrocinador
 *   put:
 *     summary: Actualizar patrocinador (solo ADMIN)
 *     tags: [Sponsors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               logo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Patrocinador actualizado
 *   delete:
 *     summary: Eliminar patrocinador (solo ADMIN)
 *     tags: [Sponsors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patrocinador eliminado
 */
app.use('/api/sponsors', createCrudRouter('sponsors', ['name', 'description', 'logo']));

/**
 * @swagger
 * /api/locations:
 *   get:
 *     summary: Listar todas las sedes / ubicaciones
 *     tags: [Locations]
 *     responses:
 *       200:
 *         description: Lista de sedes
 *   post:
 *     summary: Crear una nueva sede deportiva con todos los datos de dirección (solo ADMIN)
 *     tags: [Locations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               street:
 *                 type: string
 *                 description: Dirección o calle y número
 *               city:
 *                 type: string
 *                 description: Ciudad o municipio
 *               postalCode:
 *                 type: string
 *                 description: Código postal
 *               state:
 *                 type: string
 *                 description: Provincia o comunidad
 *               country:
 *                 type: string
 *                 default: España
 *     responses:
 *       201:
 *         description: Sede creada correctamente
 *
 * /api/locations/{id}:
 *   get:
 *     summary: Obtener sede por ID
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalle de la sede
 *   put:
 *     summary: Actualizar sede deportiva (solo ADMIN)
 *     tags: [Locations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               street:
 *                 type: string
 *               city:
 *                 type: string
 *               postalCode:
 *                 type: string
 *               state:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sede actualizada
 *   delete:
 *     summary: Eliminar sede (solo ADMIN)
 *     tags: [Locations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sede eliminada
 */
app.use('/api/locations', createCrudRouter('locations', ['name', 'description', 'street', 'city', 'postalCode', 'state', 'country']));

// Audit logs (solo admin — se expone desde una ruta simple aquí)
/**
 * @swagger
 * /api/audit-logs:
 *   get:
 *     summary: Consultar registros globales de auditoría de la plataforma (solo ADMIN)
 *     tags: [Audit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: entity
 *         schema:
 *           type: string
 *         description: Filtrar por entidad (e.g., Match, Ranking, Team)
 *       - in: query
 *         name: entityId
 *         schema:
 *           type: string
 *         description: Filtrar por ID de la entidad
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 50
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       200:
 *         description: Lista de eventos de auditoría
 *       403:
 *         description: Requiere rol ADMIN
 */
app.get('/api/audit-logs', require('./middleware/auth.middleware').authenticate, require('./middleware/authz.middleware').authorize('ADMIN'), (req, res, next) => {
  try {
    const auditService = require('./modules/audit/audit.service');
    const { limit, offset, entity, entityId } = req.query;
    const logs = auditService.getLogs({
      limit: limit ? parseInt(limit) : 50,
      offset: offset ? parseInt(offset) : 0,
      entity,
      entityId,
    });
    res.json({ data: logs });
  } catch (err) { next(err); }
});

// ─── Servir Frontend Angular en Producción ──────────────────────────────────
const distRoot = path.join(__dirname, '../../dist');
const rpmAppDist = path.join(distRoot, 'rpm-app/browser');

app.use('/remotes/rpm-admin', express.static(path.join(distRoot, 'rpm-admin/browser')));
app.use('/remotes/rpm-rankings', express.static(path.join(distRoot, 'rpm-rankings/browser')));
app.use('/remotes/rpm-teams', express.static(path.join(distRoot, 'rpm-teams/browser')));
app.use('/remotes/rpm-users', express.static(path.join(distRoot, 'rpm-users/browser')));
app.use('/remotes/rpm-live', express.static(path.join(distRoot, 'rpm-live/browser')));

app.use(express.static(rpmAppDist));

// SPA Fallback para el enrutador de Angular
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api') || req.path.startsWith('/api-docs')) {
    return next();
  }
  const fs = require('fs');
  const indexPath = path.join(rpmAppDist, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  next();
});

// ─── Manejo de errores ────────────────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

app.swaggerSpec = swaggerSpec;
module.exports = app;

