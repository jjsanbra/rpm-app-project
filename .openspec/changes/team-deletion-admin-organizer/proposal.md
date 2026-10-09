# Propuesta: Borrado de Equipos desde Administración (Roles ADMIN y ORGANIZER)

## 1. Contexto y Justificación
Actualmente en la plataforma, los equipos pueden crearse, editarse y activarse/desactivarse, pero no existe la capacidad de eliminar un equipo directamente desde el panel de administración. Esto es necesario para eliminar registros erróneos, equipos duplicados o inscripciones canceladas antes del inicio de competiciones.

## 2. Alcance
- **Backend**:
  - Crear endpoint `DELETE /api/teams/:id` accesible por los roles `ADMIN` y `ORGANIZER`.
  - Validación de integridad referencial: impedir borrado si el equipo tiene partidos asignados o disputados (retornando `409 Conflict`), o permitir borrado seguro en cascada para inscripciones (`ranking_teams`), emails (`team_emails`) y desvinculación de usuarios (`users.teamId -> NULL`).
  - Registro de auditoría (`audit_logs`) con acción `DELETE_TEAM`.
- **Frontend (`rpm-admin`)**:
  - Botón de acción de borrado en cada fila de la tabla de equipos en la administración.
  - Botón de borrado secundario dentro de la modal de edición de datos de equipo.
  - Modal/diálogo de confirmación interactivo (`p-confirmDialog`) previo a la eliminación.
  - Notificaciones Toast de éxito o error descriptivo.
  - Sincronización de modelos y servicios Angular mediante `npm run api:sync`.

## 3. Criterios de Aceptación
- [ ] `DELETE /api/teams/:id` retorna `200` y elimina el equipo si no tiene partidos vinculados.
- [ ] `DELETE /api/teams/:id` retorna `409` con mensaje explicativo si el equipo tiene partidos en la base de datos.
- [ ] Los roles `ADMIN` y `ORGANIZER` están autorizados para ejecutar la eliminación.
- [ ] Usuarios con rol `TEAM_USER` reciben `403 Forbidden`.
- [ ] La tabla de equipos en `rpm-admin` muestra el botón de borrado con confirmación.
- [ ] La modal de edición de equipo en `rpm-admin` incluye el botón de borrado con confirmación.
- [ ] Tras el borrado exitoso, la lista de equipos se actualiza automáticamente y se muestra un Toast de confirmación.
