# Especificación: Partidos y Resultados (Matches)

## 1. Requerimientos Funcionales
* **Programación de Encuentros:** Fecha, hora, sede (`locationId`) y pista.
* **Estados del Partido:** `PENDING` -> `IN_PROGRESS` -> `COMPLETED` -> `DISPUTED` -> `CANCELLED`.
* **Introducción de Resultados:**
  * Al mejor de 3 sets (6-4, 7-6 con tiebreak, o super tiebreak a 10 puntos en el 3º set).
  * Validación estricta de tanteo de pádel (diferencia mínima de 2 juegos salvo tiebreak).
  * Confirmación por ambas partes o validación directa por organizador.

## 2. Contratos de Endpoints API
* `GET /api/matches`: Filtrado por ranking, equipo, fecha y estado.
* `GET /api/matches/:id`: Detalle completo del partido y marcador por sets.
* `POST /api/matches`: Programar nuevo partido.
* `PUT /api/matches/:id`: Actualizar horario, sede o estado.
* `POST /api/matches/:id/result`: Enviar resultado final de sets.
* `POST /api/matches/:id/override`: Sobrescritura administrativa del resultado.

## 3. Modelo de Datos Clave
* **Match:**
  * `id`: string (UUID)
  * `rankingId`: string (UUID)
  * `team1Id`: string (UUID)
  * `team2Id`: string (UUID)
  * `scheduledDate`: ISO8601 string
  * `locationId`: string (UUID, opcional)
  * `court`: string (opcional)
  * `status`: enum (`PENDING` | `IN_PROGRESS` | `COMPLETED` | `DISPUTED` | `CANCELLED`)
  * `score`: `{ set1: string, set2: string, set3?: string }`
  * `winnerTeamId`: string (UUID, opcional)
