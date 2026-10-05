'use strict';

const app = require('./app');
const config = require('./config/env');
const { initDb, closeDb } = require('./database/db');
const { runSeed } = require('./database/seed');

async function startServer() {
  try {
    // Aplicar seed si no existe usuario ADMIN o si está en desarrollo / RUN_SEED=true
    const existingAdmin = initDb().prepare("SELECT id FROM users WHERE role = 'ADMIN' LIMIT 1").get();
    if (!existingAdmin || config.env === 'development' || process.env.RUN_SEED === 'true') {
      await runSeed();
    }

    const server = app.listen(config.port, () => {
      console.log('====================================================');
      console.log(`🚀 Servidor Padel Ranking API en ejecución`);
      console.log(`📡 URL API:        http://localhost:${config.port}/api`);
      console.log(`📚 Documentación:  http://localhost:${config.port}/api-docs`);
      console.log(`🩺 Health Check:   http://localhost:${config.port}/api/health`);
      console.log(`🌍 Entorno:        ${config.env}`);
      console.log('====================================================');
    });

    const shutdown = () => {
      console.log('\n🛑 Apagando servidor graciosamente...');
      server.close(() => {
        closeDb();
        console.log('✅ Servidor y base de datos cerrados.');
        process.exit(0);
      });
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  } catch (err) {
    console.error('❌ Error al iniciar el servidor:', err);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}

module.exports = { startServer };
