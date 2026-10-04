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
  origin: config.cors.origins,
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
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: [
    path.join(__dirname, './modules/**/*.routes.js'),
    path.join(__dirname, './modules/**/*.controller.js'),
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
app.use('/api/levels', createCrudRouter('levels', ['name', 'description']));
app.use('/api/categories', createCrudRouter('categories', ['name', 'description']));
app.use('/api/sponsors', createCrudRouter('sponsors', ['name', 'description', 'logo']));
app.use('/api/locations', createCrudRouter('locations', ['name', 'description', 'street', 'city', 'postalCode', 'state', 'country']));

// Audit logs (solo admin — se expone desde una ruta simple aquí)
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

// ─── Manejo de errores ────────────────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
