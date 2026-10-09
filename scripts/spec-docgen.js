#!/usr/bin/env node
/**
 * spec-docgen — Generador de Documentación de Arquitectura y Matriz de Capacidades
 *
 * Pre-computa hechos reales del repositorio (microfrontends, endpoints, specs)
 * y genera `docs/architecture-capabilities.md` como documentación viva.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OPENAPI_FILE = path.join(ROOT, 'backend', 'openapi.json');
const SPECS_DIR = path.join(ROOT, '.openspec', 'specs');
const DOCS_OUT = path.join(ROOT, 'docs', 'architecture-capabilities.md');

function main() {
  console.log('📝 Generando catálogo de arquitectura y capacidades funcionales...');

  let openapi = { paths: {}, components: { schemas: {} } };
  if (fs.existsSync(OPENAPI_FILE)) {
    try {
      openapi = JSON.parse(fs.readFileSync(OPENAPI_FILE, 'utf8'));
    } catch (e) {}
  }

  const paths = Object.keys(openapi.paths || {});
  const schemas = Object.keys(openapi.components?.schemas || {});

  // Group operations by tag
  const operationsByTag = new Map();
  paths.forEach(p => {
    const methods = openapi.paths[p];
    Object.keys(methods).forEach(m => {
      const op = methods[m];
      const tags = op.tags || ['General'];
      tags.forEach(tag => {
        if (!operationsByTag.has(tag)) operationsByTag.set(tag, []);
        operationsByTag.get(tag).push({
          method: m.toUpperCase(),
          path: p,
          summary: op.summary || 'Sin descripción',
        });
      });
    });
  });

  // Read functional specs
  const specFiles = fs.existsSync(SPECS_DIR) ? fs.readdirSync(SPECS_DIR).filter(f => f.endsWith('.spec.md')) : [];
  const specSummaries = [];

  specFiles.forEach(file => {
    const content = fs.readFileSync(path.join(SPECS_DIR, file), 'utf8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : file;
    const reqs = (content.match(/^###\s+|REQ-[\w-]+/gm) || []);
    specSummaries.push({
      file,
      title,
      reqCount: reqs.length || 1
    });
  });

  const markdown = `# 🏛️ Catálogo de Arquitectura y Matriz de Capacidades del Sistema

> **Documentación viva autogenerada por OpenSpec (\`npm run spec:docs\`)**  
> *Fecha de última actualización: ${new Date().toISOString().split('T')[0]}*

---

## 1. Topología del Monorepo

| Capa / Aplicación | Tipo | Puerto Local | Descripción |
| :--- | :--- | :--- | :--- |
| **\`backend\`** | REST API & SSE | \`http://localhost:3000\` | API Node.js / Express con SQLite, autenticación JWT, SSE de marcadores y Swagger OpenAPI 3.0. |
| **\`rpm-app\`** | Host Shell | \`http://localhost:4200\` | Shell principal Angular 22 con Native Federation, enrutador global y barra de navegación. |
| **\`rpm-rankings\`** | Remote MFE | \`http://localhost:4202\` | Landing pública, clasificaciones oficiales/provisionales y calendario de partidos. |
| **\`rpm-teams\`** | Remote MFE | \`http://localhost:4203\` | Portal de equipo: reporte de resultados y apertura de disputas. |
| **\`rpm-users\`** | Remote MFE | \`http://localhost:4204\` | Gestión de identidad: Login, activación de cuenta y reseteo de contraseña. |
| **\`rpm-live\`** | Remote MFE | \`http://localhost:4205\` | Tanteador en tiempo real punto a punto y firma de acta digital mediante SSE. |
| **\`rpm-admin\`** | Remote MFE | \`http://localhost:4201\` | Panel de control integral: rankings, equipos, incidencias, auditoría y catálogos auxiliares. |

---

## 2. Cobertura de Especificaciones Funcionales (.openspec/specs)

El comportamiento de la plataforma está gobernado por las siguientes especificaciones canónicas de dominio:

| Módulo | Fichero Spec | Requerimientos BDD | Descripción |
| :--- | :--- | :--- | :--- |
${specSummaries.map(s => `| **${s.title}** | [\`${s.file}\`](file:///${path.join(SPECS_DIR, s.file)}) | \`${s.reqCount} Requerimientos\` | Especificación funcional del dominio ${s.title.toLowerCase()}. |`).join('\n')}

---

## 3. Matriz de Endpoints y Contratos OpenAPI 3.0 (${paths.length} Rutas / ${schemas.length} Esquemas de Datos)

${Array.from(operationsByTag.entries()).map(([tag, ops]) => `
### 🏷️ Dominio: ${tag} (${ops.length} operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
${ops.map(o => `| \`${o.method}\` | \`${o.path}\` | ${o.summary} |`).join('\n')}
`).join('\n')}

---

## 4. Pipeline de Sincronización Automática (SDD)

El flujo de entrega continua está garantizado mediante el pipeline unificado:

\`\`\`
.openspec/specs/ ➔ backend/src/ (JSDoc Swagger) ➔ backend/openapi.json ➔ Orval (@core/api) ➔ Angular MFEs
\`\`\`

- **Validación de Integridad:** \`npm run spec:check\`
- **Auditoría de Salud:** \`npm run spec:audit\`
- **Regeneración de Contratos:** \`npm run api:sync\`
- **Refresco de esta Documentación:** \`npm run spec:docs\`
`;

  fs.writeFileSync(DOCS_OUT, markdown, 'utf8');
  console.log(`✅ Documentación generada con éxito en: ${DOCS_OUT}`);
}

main();
