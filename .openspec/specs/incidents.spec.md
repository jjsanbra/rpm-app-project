# Especificación: Incidencias y Disputas (Incidents)

## 1. Requerimientos Funcionales
* **Registro de Incidencias:** Los jugadores o árbitros pueden reportar discrepancias en resultados, incomparecencias (W.O.), lesiones o problemas de pista.
* **Estados:** `OPEN` -> `IN_REVIEW` -> `RESOLVED` -> `REJECTED`.
* **Resolución Administrativa:** El organizador o administrador puede emitir una resolución formal y opcionalmente sobrescribir el resultado del partido.

## 2. Contratos de Endpoints API
* `GET /api/incidents`: Lista de incidencias con filtros de estado y torneo.
* `GET /api/incidents/:id`: Detalle y mensajes de seguimiento.
* `POST /api/incidents`: Crear nueva incidencia asociada a un partido o ranking.
* `PATCH /api/incidents/:id/resolve`: Resolver incidencia con dictamen final.

## 3. Modelo de Datos Clave
* **Incident:**
  * `id`: string (UUID)
  * `matchId`: string (UUID, opcional)
  * `rankingId`: string (UUID)
  * `reportedById`: string (UUID)
  * `type`: enum (`SCORE_DISPUTE` | `WALKOVER` | `BEHAVIOR` | `FACILITY_ISSUE` | `OTHER`)
  * `title`: string
  * `description`: string
  * `status`: enum (`OPEN` | `IN_REVIEW` | `RESOLVED` | `REJECTED`)
  * `resolution`: string (opcional)
  * `resolvedById`: string (UUID, opcional)
  * `createdAt`: ISO8601 string
