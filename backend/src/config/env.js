'use strict';

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,

  jwt: {
    secret: process.env.JWT_SECRET || 'changeme_use_a_long_random_secret_in_production',
    expiration: process.env.JWT_EXPIRATION || '8h',
    setupExpiration: process.env.JWT_SETUP_EXPIRATION || '48h',
  },

  database: {
    url: process.env.DATABASE_URL || ':memory:',
  },

  email: {
    host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
    port: parseInt(process.env.EMAIL_PORT, 10) || 587,
    user: process.env.EMAIL_USER || '',
    password: process.env.EMAIL_PASSWORD || '',
    from: process.env.EMAIL_FROM || 'Padel Ranking <noreply@padelranking.local>',
  },

  frontend: {
    url: process.env.FRONTEND_URL || 'http://localhost:4200',
  },

  cors: {
    origins: (process.env.CORS_ORIGINS || 'http://localhost:4200').split(',').map(o => o.trim()),
  },

  rateLimit: {
    auth: {
      max: parseInt(process.env.RATE_LIMIT_AUTH_MAX, 10) || 10,
      windowMin: parseInt(process.env.RATE_LIMIT_AUTH_WINDOW_MIN, 10) || 15,
    },
  },
};

module.exports = config;
