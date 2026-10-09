# Especificación: Marcador en Directo (Live Match)

## 1. Requerimientos Funcionales
* **Sesión en Tiempo Real:** Control punto a punto de un partido en curso (15, 30, 40, ventaja, juego de oro / punto de oro).
* **Control de Saque:** Registro del jugador que realiza el servicio y lado de pista.
* **Historial de Puntos:** Deshacer último punto, registro de aces, dobles faltas y errores no forzados.
* **Transmisión:** Los espectadores en `rpm-live` pueden ver el marcador actualizarse sin recargar la página.

## 2. Contratos de Endpoints API
* `GET /api/matches/:id/live`: Estado actual de la sesión en directo.
* `POST /api/matches/:id/live/start`: Iniciar retransmisión en vivo.
* `POST /api/matches/:id/live/point`: Registrar un punto ganado (`team1` o `team2`).
* `POST /api/matches/:id/live/undo`: Deshacer última anotación.
* `POST /api/matches/:id/live/finish`: Finalizar partido y consolidar resultado en la clasificación.

## 3. Modelo de Datos Clave
* **LiveMatchSession:**
  * `matchId`: string (UUID)
  * `currentSet`: number (1, 2 o 3)
  * `gamesTeam1`: number
  * `gamesTeam2`: number
  * `pointsTeam1`: string (`0`, `15`, `30`, `40`, `AD`)
  * `pointsTeam2`: string (`0`, `15`, `30`, `40`, `AD`)
  * `servingTeamId`: string (UUID)
  * `isGoldPoint`: boolean
