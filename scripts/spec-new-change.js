#!/usr/bin/env node
/**
 * spec-new-change — Crea el andamiaje estructurado para un nuevo cambio o evolutivo
 *
 * Uso:
 *   node scripts/spec-new-change.js <kebab-name>
 *   npm run spec:new <kebab-name>
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CHANGES_DIR = path.join(ROOT, '.openspec', 'changes');

function main() {
  const name = process.argv[2];

  if (!name || !/^[a-z0-9-]+$/.test(name)) {
    console.error('❌ Error: Debes especificar el nombre del cambio en formato kebab-case.');
    console.error('   Ejemplo: npm run spec:new sistema-playoffs');
    process.exit(1);
  }

  const targetDir = path.join(CHANGES_DIR, name);

  if (fs.existsSync(targetDir)) {
    console.error(`❌ Error: El cambio "${name}" ya existe en .openspec/changes/${name}`);
    process.exit(1);
  }

  fs.mkdirSync(path.join(targetDir, 'specs'), { recursive: true });

  const proposalTemplate = `# 📋 Propuesta de Cambio: ${name}

## 1. Contexto y Problema de Negocio
<!-- Describe qué necesidad o problema se resuelve con este evolutivo -->

## 2. Solución Funcional Propuesta
<!-- Resumen de las funcionalidades o cambios a implementar -->

## 3. Criterios de Aceptación (AC)
- [ ] **AC-1:** [Descripción del primer criterio]
- [ ] **AC-2:** [Descripción del segundo criterio]
`;

  const designTemplate = `# 📐 Diseño Técnico y Arquitectura: ${name}

## 1. Impacto en Contratos y Endpoints (OpenAPI 3.0)
<!-- Lista de nuevos endpoints, parámetros o esquemas requeridos -->

## 2. Impacto en Microfrontends (Angular 22)
<!-- Microfrontends afectados (rpm-rankings, rpm-teams, rpm-admin, etc.) -->

## 3. Decisiones Técnicas y Patrones
<!-- Patrones de diseño, validaciones o dependencias a considerar -->
`;

  const tasksTemplate = `# 🛠️ Plan de Tareas: ${name}

> Ordenadas secuencialmente por dependencias técnicas (Backend -> OpenAPI -> Orval -> Frontend).

## Fase 1: Backend y Contratos OpenAPI
- [ ] **TASK-1:** Definir esquemas JSDoc OpenAPI y rutas en Backend
- [ ] **TASK-2:** Ejecutar \`npm run api:sync\` para exportar OpenAPI y regenerar Orval

## Fase 2: Implementación en Microfrontends
- [ ] **TASK-3:** Actualizar vistas y componentes en Angular consumiendo servicios de @core
- [ ] **TASK-4:** Validar formularios, feedback visual (PrimeNG) e internacionalización

## Fase 3: Verificación y Cierre
- [ ] **TASK-5:** Ejecutar \`npm run build:all\` y tests
- [ ] **TASK-6:** Archivar cambio con \`npm run spec:archive ${name}\`
`;

  fs.writeFileSync(path.join(targetDir, 'proposal.md'), proposalTemplate, 'utf8');
  fs.writeFileSync(path.join(targetDir, 'design.md'), designTemplate, 'utf8');
  fs.writeFileSync(path.join(targetDir, 'tasks.md'), tasksTemplate, 'utf8');
  fs.writeFileSync(path.join(targetDir, 'specs', '.gitkeep'), '', 'utf8');

  console.log(`\n✅ Andamiaje del cambio "${name}" creado exitosamente en:`);
  console.log(`   📁 .openspec/changes/${name}/`);
  console.log(`      ├── proposal.md  (Propuesta y Criterios de Aceptación)`);
  console.log(`      ├── design.md    (Diseño Técnico y Endpoints)`);
  console.log(`      ├── tasks.md     (Lista de Tareas Secuenciales)`);
  console.log(`      └── specs/       (Deltas de especificación funcional)\n`);
}

main();
