# Lista de Tareas: Borrado de Equipos desde Administración

- [x] **Fase 1: Backend & Modelo de Datos**
  - [x] 1.1 Añadir método `deleteTeam(id)` en `backend/src/modules/teams/team.model.js` con soporte transaccional / eliminación de tablas dependientes.
  - [x] 1.2 Añadir validación de partidos existentes y registro de auditoría en `backend/src/modules/teams/team.service.js`.
  - [x] 1.3 Añadir controlador `deleteTeam` en `backend/src/modules/teams/team.controller.js`.
  - [x] 1.4 Exponer ruta `DELETE /api/teams/:id` con `authenticate, authorize('ADMIN', 'ORGANIZER')` y documentación Swagger JSDoc en `backend/src/modules/teams/team.routes.js`.
  - [x] 1.5 Añadir tests unitarios/integración en `backend/tests/teams.test.js`.

- [x] **Fase 2: Sincronización de Contratos de API**
  - [x] 2.1 Ejecutar `npm run api:sync` para regenerar la especificación OpenAPI y los clientes TypeScript en `@core`.

- [x] **Fase 3: Frontend (`rpm-admin`)**
  - [x] 3.1 Añadir traducciones en los archivos i18n (`es.json`) para botones y mensajes de confirmación de borrado.
  - [x] 3.2 Añadir botón de eliminación en la tabla de `AdminTeamsComponent` con confirmación.
  - [x] 3.3 Añadir botón de eliminación dentro de la modal de edición de equipo en `AdminTeamsComponent`.
  - [x] 3.4 Conectar el manejador `handleDeleteTeam` en `AdminDashboardComponent` consumiendo el servicio `@core`.

- [x] **Fase 4: Verificación y Pruebas**
  - [x] 4.1 Ejecutar `npm run test:backend` para asegurar 100% tests superados (42/42 OK).
  - [x] 4.2 Ejecutar `npm run build:all` para asegurar compilación limpia sin errores de tipos (0 errores).
