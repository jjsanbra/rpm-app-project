# Diseño Técnico: Borrado de Equipos desde Administración

## 1. Arquitectura de Endpoints (Backend)

### `DELETE /api/teams/:id`
- **Autenticación**: JWT requerido (`authenticate`).
- **Autorización**: Roles `ADMIN`, `ORGANIZER` (`authorize('ADMIN', 'ORGANIZER')`).
- **Parámetros**: `id` (UUID en path).
- **Flujo de Ejecución**:
  1. Verificar existencia del equipo (`teamModel.findById(id)`). Si no existe ➔ `404 Not Found`.
  2. Verificar si existen partidos asociados en la tabla `matches` (`SELECT COUNT(*) FROM matches WHERE teamOneId = ? OR teamTwoId = ?`).
     - Si `count > 0` ➔ Lanzar error `409 Conflict` con mensaje: *"No se puede eliminar el equipo porque tiene partidos asignados o disputados. Desactívalo o elimina los partidos primero."*
  3. Ejecutar borrado en base de datos:
     - `DELETE FROM team_emails WHERE teamId = ?`
     - `DELETE FROM ranking_teams WHERE teamId = ?`
     - `UPDATE users SET teamId = NULL WHERE teamId = ?`
     - `DELETE FROM teams WHERE id = ?`
  4. Registrar evento en auditoría:
     ```javascript
     auditService.log({
       userId: req.user.id,
       action: 'DELETE_TEAM',
       entity: 'Team',
       entityId: id,
       data: { name: team.name }
     });
     ```
  5. Retornar `200 OK` con `{ message: 'Equipo eliminado correctamente.' }`.

---

## 2. Documentación OpenAPI / Swagger
Añadir bloque JSDoc en `backend/src/modules/teams/team.routes.js`:
```javascript
/**
 * @swagger
 * /api/teams/{id}:
 *   delete:
 *     summary: Eliminar un equipo (ADMIN y ORGANIZER)
 *     tags: [Teams]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Equipo eliminado exitosamente
 *       404:
 *         description: Equipo no encontrado
 *       409:
 *         description: Conflicto (el equipo tiene partidos asociados)
 */
```

---

## 3. Componentes Frontend (`projects/rpm-admin`)

### `AdminTeamsComponent` (`admin-teams.component.ts` & `.html`)
- **Outputs**:
  - `@Output() deleteTeam = new EventEmitter<Team>();`
- **Acciones en Tabla**:
  - Nuevo botón con severidad `danger`, icono `pi pi-trash` y tooltip *"Eliminar equipo"*.
  - Al pulsar, invoca `confirmDelete(team)`.
- **Acción en Modal de Edición**:
  - Botón secundario en el footer del modal: `severity="danger"`, icono `pi pi-trash`, texto *"Eliminar equipo"*.
  - Invoca `confirmDelete(currentEditingTeam)`.
- **Diálogo de Confirmación**:
  - Integración con `ConfirmationService` de PrimeNG (`<p-confirmDialog>`).

### `AdminDashboardComponent` (`admin-dashboard.component.ts`)
- Implementar `handleDeleteTeam(team: Team)`:
  - Invoca `teamsService.deleteApiTeamsId(team.id)`.
  - Muestra `Toast` de éxito o error (capturando 409 con mensaje específico).
  - Recarga la lista de equipos (`loadTeams()`).
  - Cierra la modal de edición si estaba abierta.
