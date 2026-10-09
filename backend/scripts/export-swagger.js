#!/usr/bin/env node
'use strict';

/**
 * export-swagger.js — Exporta la especificación OpenAPI generada por swagger-jsdoc a backend/openapi.json
 */

const fs = require('fs');
const path = require('path');

try {
  // Asegurar entorno para que config/env cargue sin errores
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  const app = require('../src/app');
  const swaggerSpec = app.swaggerSpec;

  if (!swaggerSpec || !swaggerSpec.openapi) {
    throw new Error('No se pudo generar la especificación OpenAPI desde app.js');
  }

  const outputPath = path.resolve(__dirname, '../openapi.json');
  fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2), 'utf-8');

  const stats = fs.statSync(outputPath);
  const endpointCount = Object.keys(swaggerSpec.paths || {}).length;
  const schemaCount = Object.keys(swaggerSpec.components?.schemas || {}).length;

  console.log(`✅ Especificación OpenAPI 3.0 exportada con éxito:`);
  console.log(`   📁 Archivo: ${outputPath} (${(stats.size / 1024).toFixed(2)} KB)`);
  console.log(`   🔗 Endpoints documentados: ${endpointCount}`);
  console.log(`   📦 Schemas definidos: ${schemaCount}`);
} catch (error) {
  console.error('❌ Error exportando Swagger OpenAPI:', error);
  process.exit(1);
}
