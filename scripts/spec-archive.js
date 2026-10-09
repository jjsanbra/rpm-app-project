#!/usr/bin/env node
/**
 * spec-archive — Archiva un cambio completado y consolida especificaciones canónicas
 *
 * Uso:
 *   node scripts/spec-archive.js <kebab-name>
 *   npm run spec:archive <kebab-name>
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const CHANGES_DIR = path.join(ROOT, '.openspec', 'changes');
const ARCHIVE_DIR = path.join(ROOT, '.openspec', 'archive');
const SPECS_DIR = path.join(ROOT, '.openspec', 'specs');

function main() {
  const name = process.argv[2];

  if (!name) {
    console.error('❌ Error: Debes indicar el nombre del cambio a archivar.');
    console.error('   Ejemplo: npm run spec:archive mi-cambio');
    process.exit(1);
  }

  const sourceDir = path.join(CHANGES_DIR, name);

  if (!fs.existsSync(sourceDir)) {
    console.error(`❌ Error: No existe el cambio "${name}" en .openspec/changes/`);
    process.exit(1);
  }

  // Comprobar tareas pendientes
  const tasksFile = path.join(sourceDir, 'tasks.md');
  if (fs.existsSync(tasksFile)) {
    const tasksContent = fs.readFileSync(tasksFile, 'utf8');
    const pendingTasks = (tasksContent.match(/- \[ \]/g) || []).length;
    if (pendingTasks > 0) {
      console.warn(`⚠️ Advertencia: Aún hay ${pendingTasks} tareas sin marcar como completadas en tasks.md.`);
    }
  }

  // Consolidar deltas de specs hacia .openspec/specs/
  const deltaSpecsDir = path.join(sourceDir, 'specs');
  if (fs.existsSync(deltaSpecsDir)) {
    const deltaSpecs = fs.readdirSync(deltaSpecsDir).filter(f => f.endsWith('.spec.md'));
    deltaSpecs.forEach(file => {
      const src = path.join(deltaSpecsDir, file);
      const dest = path.join(SPECS_DIR, file);
      fs.copyFileSync(src, dest);
      console.log(`   📋 Spec consolidada en canónicas: .openspec/specs/${file}`);
    });
  }

  // Mover a archive con fecha
  const datePrefix = new Date().toISOString().split('T')[0];
  const archiveTargetName = `${datePrefix}-${name}`;
  const archiveTargetDir = path.join(ARCHIVE_DIR, archiveTargetName);

  if (!fs.existsSync(ARCHIVE_DIR)) {
    fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
  }

  fs.renameSync(sourceDir, archiveTargetDir);
  console.log(`\n📦 Cambio archivado exitosamente en: .openspec/archive/${archiveTargetName}/`);

  // Regenerar documentación viva
  try {
    console.log('🔄 Actualizando documentación de capacidades...');
    execSync('node scripts/spec-docgen.js', { stdio: 'inherit', cwd: ROOT });
  } catch (e) {
    console.warn('⚠️ No se pudo regenerar la documentación automáticamente:', e.message);
  }

  console.log('✨ Proceso de archivo completado con éxito.\n');
}

main();
