# Tareas del Cambio: Integración OpenSpec & Orval

- [x] **Fase 1: Configuración de OpenSpec & Especificaciones**
  - [x] Crear `.openspec/config.yaml`
  - [x] Crear `.openspec/context/architecture.md` y `conventions.md`
  - [x] Crear especificaciones modulares (`auth.spec.md`, `rankings.spec.md`, `teams.spec.md`, `matches.spec.md`, `live.spec.md`, `incidents.spec.md`, `admin.spec.md`)
  - [x] Registrar propuesta de cambio `001-integrate-orval-openspec`

- [x] **Fase 2: Enriquecimiento y Exportación de OpenAPI (Backend)**
  - [x] Añadir modelos en `components.schemas` en `backend/src/app.js` y `backend/src/docs/schemas.js`
  - [x] Vincular `$ref` en los JSDoc de las rutas de Express
  - [x] Crear script `backend/scripts/export-swagger.js` y `npm run swagger:export`
  - [x] Validar `backend/openapi.json` (0 errores en linter y 100% tests backend pasando)

- [x] **Fase 3: Configuración de Orval**
  - [x] Instalar `orval`, `msw` y `@faker-js/faker` en el monorepo
  - [x] Configurar `orval.config.ts` apuntando a `@core` (`projects/rpm-app/src/app/core/api`)
  - [x] Ejecutar `npm run api:generate` y verificar 14 servicios Angular y 30 modelos TypeScript
  - [x] Verificar compilación completa de los 6 microfrontends con `npm run build:all` (0 errores)

- [x] **Fase 4: Integración en `@core` y Verificación de Microfrontends**
  - [x] Exportar modelos y clientes generados en `projects/rpm-app/src/app/core/index.ts`
  - [x] Conectar `models/index.ts` directamente a `core/api/model`
  - [x] Validar compatibilidad de tipos en los 6 microfrontends
  - [x] Ejecutar `npm run build:all` (6 proyectos compilados con 0 errores)

- [x] **Fase 5: Mocks con MSW y Tests**
  - [x] Generar fixtures y handlers de MSW (`.msw.ts`) con Orval
  - [x] Ejecutar `npm run test:backend` (39 tests pasando al 100%)

- [x] **Fase 6: Scripts y Automatización**
  - [x] Añadir scripts `spec:check`, `api:export`, `api:generate` y `api:sync` en `package.json`
  - [x] Validar pipeline integral de sincronización con `npm run api:sync`

