#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const configPath = path.join(rootDir, '.openspec', 'config.yaml');

console.log('🔍 Validando estructura de OpenSpec...\n');

if (!fs.existsSync(configPath)) {
  console.error('❌ Error: No se encontró .openspec/config.yaml');
  process.exit(1);
}

const configContent = fs.readFileSync(configPath, 'utf-8');
const specMatches = [...configContent.matchAll(/^\s+spec:\s*(specs\/[^\s]+)/gm)].map(m => m[1]);

let hasError = false;

for (const specRelPath of specMatches) {
  const fullPath = path.join(rootDir, '.openspec', specRelPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Archivo de especificación no encontrado: .openspec/${specRelPath}`);
    hasError = true;
  } else {
    const stats = fs.statSync(fullPath);
    console.log(`  ✓ .openspec/${specRelPath} (${stats.size} bytes)`);
  }
}

const contextFiles = ['architecture.md', 'conventions.md', 'patterns.md'];
for (const ctx of contextFiles) {
  const ctxPath = path.join(rootDir, '.openspec', 'context', ctx);
  if (!fs.existsSync(ctxPath)) {
    console.error(`❌ Contexto no encontrado: .openspec/context/${ctx}`);
    hasError = true;
  } else {
    console.log(`  ✓ .openspec/context/${ctx}`);
  }
}

if (hasError) {
  console.error('\n❌ La validación de OpenSpec ha fallado.');
  process.exit(1);
} else {
  console.log('\n✨ Todas las especificaciones y contextos de OpenSpec son válidos y están sincronizados.');
}
