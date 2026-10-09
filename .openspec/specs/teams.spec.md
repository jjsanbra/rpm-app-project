# Especificación: Equipos y Parejas (Teams)

## 1. Requerimientos Funcionales
* **Composición del Equipo:** Parejas formadas por dos jugadores (`player1Id`, `player2Id`).
* **Nombre de Equipo:** Autogenerado por nombres de jugadores o personalizado.
* **Inscripciones en Competiciones:** Una pareja puede estar inscrita en uno o más rankings simultáneamente.
* **Capitán / Contacto:** Jugador principal para recibir notificaciones de partidos e incidencias.

## 2. Contratos de Endpoints API
* `GET /api/teams`: Lista de parejas registradas.
* `GET /api/teams/:id`: Detalle del equipo y estadísticas históricas.
* `POST /api/teams`: Registrar nueva pareja.
* `PUT /api/teams/:id`: Editar información de la pareja.
* `POST /api/ranking-team-registrations/:rankingId/teams`: Inscribir equipo en un ranking.
* `DELETE /api/ranking-team-registrations/:rankingId/teams/:teamId`: Desinscribir equipo de un ranking.

## 3. Modelo de Datos Clave
* **Team:**
  * `id`: string (UUID)
  * `name`: string
  * `player1Id`: string (UUID)
  * `player2Id`: string (UUID)
  * `player1`: User (opcional poblado)
  * `player2`: User (opcional poblado)
  * `contactEmail`: string
  * `contactPhone`: string (opcional)
  * `createdAt`: ISO8601 string
