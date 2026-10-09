# Especificación: Gestión de Rankings y Competiciones

## 1. Requerimientos Funcionales
* **Ciclo de Vida del Ranking:**
  * Estados: `DRAFT` -> `ACTIVE` -> `FINISHED` -> `ARCHIVED`.
* **Configuración de la Competición:**
  * Fechas de inicio y fin.
  * Reglas de puntuación (Puntos por victoria, sets ganados/perdidos, diferencia de juegos).
  * Categoría (Masculina, Femenina, Mixta).
  * Nivel (1ª a 5ª categoría / Niveles de juego personalizados).
  * Fases / Jornadas (Generación de enfrentamientos y calendario).

## 2. Contratos de Endpoints API
* `GET /api/rankings`: Lista paginada/filtrada de rankings activos y pasados.
* `GET /api/rankings/:id`: Detalle completo del ranking y configuración.
* `POST /api/rankings`: Creación de ranking (solo ADMIN/ORGANIZER).
* `PUT /api/rankings/:id`: Actualización de datos del ranking.
* `PATCH /api/rankings/:id/active`: Activar o pausar ranking.
* `GET /api/rankings/:id/teams`: Equipos inscritos en el ranking.
* `GET /api/classification/:rankingId`: Tabla de clasificación calculada en tiempo real.

## 3. Modelo de Datos Clave
* **Ranking:**
  * `id`: string (UUID)
  * `name`: string
  * `description`: string (opcional)
  * `startDate`: ISO8601 string
  * `endDate`: ISO8601 string
  * `status`: enum (`DRAFT` | `ACTIVE` | `FINISHED` | `ARCHIVED`)
  * `category`: string
  * `level`: string
  * `pointsPerWin`: number
  * `pointsPerLoss`: number
  * `createdAt`: ISO8601 string
* **ClassificationRow:**
  * `teamId`: string
  * `teamName`: string
  * `player1Name`: string
  * `player2Name`: string
  * `position`: number
  * `points`: number
  * `played`: number
  * `won`: number
  * `lost`: number
  * `setsWon`: number
  * `setsLost`: number
  * `gamesWon`: number
  * `gamesLost`: number
