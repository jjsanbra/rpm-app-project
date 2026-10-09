# 🏛️ Catálogo de Arquitectura y Matriz de Capacidades del Sistema

> **Documentación viva autogenerada por OpenSpec (`npm run spec:docs`)**  
> *Fecha de última actualización: 2026-10-09*

---

## 1. Topología del Monorepo

| Capa / Aplicación | Tipo | Puerto Local | Descripción |
| :--- | :--- | :--- | :--- |
| **`backend`** | REST API & SSE | `http://localhost:3000` | API Node.js / Express con SQLite, autenticación JWT, SSE de marcadores y Swagger OpenAPI 3.0. |
| **`rpm-app`** | Host Shell | `http://localhost:4200` | Shell principal Angular 22 con Native Federation, enrutador global y barra de navegación. |
| **`rpm-rankings`** | Remote MFE | `http://localhost:4202` | Landing pública, clasificaciones oficiales/provisionales y calendario de partidos. |
| **`rpm-teams`** | Remote MFE | `http://localhost:4203` | Portal de equipo: reporte de resultados y apertura de disputas. |
| **`rpm-users`** | Remote MFE | `http://localhost:4204` | Gestión de identidad: Login, activación de cuenta y reseteo de contraseña. |
| **`rpm-live`** | Remote MFE | `http://localhost:4205` | Tanteador en tiempo real punto a punto y firma de acta digital mediante SSE. |
| **`rpm-admin`** | Remote MFE | `http://localhost:4201` | Panel de control integral: rankings, equipos, incidencias, auditoría y catálogos auxiliares. |

---

## 2. Cobertura de Especificaciones Funcionales (.openspec/specs)

El comportamiento de la plataforma está gobernado por las siguientes especificaciones canónicas de dominio:

| Módulo | Fichero Spec | Requerimientos BDD | Descripción |
| :--- | :--- | :--- | :--- |
| **Especificación: Administración y Catálogos Maestros (Admin)** | [`admin.spec.md`](file:////Users/jjsanquisb/Labs/rpm-app-project/.openspec/specs/admin.spec.md) | `1 Requerimientos` | Especificación funcional del dominio especificación: administración y catálogos maestros (admin). |
| **Especificación: Autenticación y Control de Acceso (Auth)** | [`auth.spec.md`](file:////Users/jjsanquisb/Labs/rpm-app-project/.openspec/specs/auth.spec.md) | `1 Requerimientos` | Especificación funcional del dominio especificación: autenticación y control de acceso (auth). |
| **Especificación: Incidencias y Disputas (Incidents)** | [`incidents.spec.md`](file:////Users/jjsanquisb/Labs/rpm-app-project/.openspec/specs/incidents.spec.md) | `1 Requerimientos` | Especificación funcional del dominio especificación: incidencias y disputas (incidents). |
| **Especificación: Marcador en Directo (Live Match)** | [`live.spec.md`](file:////Users/jjsanquisb/Labs/rpm-app-project/.openspec/specs/live.spec.md) | `1 Requerimientos` | Especificación funcional del dominio especificación: marcador en directo (live match). |
| **Especificación: Partidos y Resultados (Matches)** | [`matches.spec.md`](file:////Users/jjsanquisb/Labs/rpm-app-project/.openspec/specs/matches.spec.md) | `1 Requerimientos` | Especificación funcional del dominio especificación: partidos y resultados (matches). |
| **Especificación: Gestión de Rankings y Competiciones** | [`rankings.spec.md`](file:////Users/jjsanquisb/Labs/rpm-app-project/.openspec/specs/rankings.spec.md) | `1 Requerimientos` | Especificación funcional del dominio especificación: gestión de rankings y competiciones. |
| **Especificación: Equipos y Parejas (Teams)** | [`teams.spec.md`](file:////Users/jjsanquisb/Labs/rpm-app-project/.openspec/specs/teams.spec.md) | `1 Requerimientos` | Especificación funcional del dominio especificación: equipos y parejas (teams). |
| **Especificación: Diálogos de Confirmación UI (PrimeNG)** | [`ui-confirmations.spec.md`](file:////Users/jjsanquisb/Labs/rpm-app-project/.openspec/specs/ui-confirmations.spec.md) | `1 Requerimientos` | Especificación funcional del dominio especificación: diálogos de confirmación ui (primeng). |

---

## 3. Matriz de Endpoints y Contratos OpenAPI 3.0 (54 Rutas / 30 Esquemas de Datos)


### 🏷️ Dominio: Users (7 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/users` | Listar todos los usuarios del sistema (solo ADMIN) |
| `GET` | `/api/users/organizers` | Listar todos los organizadores y rankings a su cargo (solo ADMIN) |
| `POST` | `/api/users/organizers` | Crear un nuevo usuario ORGANIZER (solo ADMIN) |
| `PUT` | `/api/users/organizers/{id}` | Actualizar datos de un usuario ORGANIZER (solo ADMIN) |
| `DELETE` | `/api/users/organizers/{id}` | Eliminar un usuario ORGANIZER (solo ADMIN) |
| `GET` | `/api/users/{id}` | Obtener detalle de usuario por ID (solo ADMIN) |
| `PATCH` | `/api/users/{id}/active` | Activar o desactivar un usuario (solo ADMIN) |


### 🏷️ Dominio: Teams (7 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/teams` | Listar todos los equipos |
| `POST` | `/api/teams` | Crear un nuevo equipo (solo ADMIN) |
| `GET` | `/api/teams/{id}` | Obtener información detallada de un equipo |
| `PUT` | `/api/teams/{id}` | Actualizar datos de un equipo (solo ADMIN) |
| `DELETE` | `/api/teams/{id}` | Eliminar un equipo (ADMIN y ORGANIZER) |
| `PATCH` | `/api/teams/{id}/active` | Activar o desactivar un equipo (solo ADMIN) |
| `POST` | `/api/teams/{id}/resend-welcome` | Reenviar email de bienvenida / activación a los contactos del equipo (solo ADMIN) |


### 🏷️ Dominio: Rankings (8 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/rankings` | Listar todos los rankings (público / admin) |
| `POST` | `/api/rankings` | Crear un nuevo ranking (ADMIN u ORGANIZER) |
| `GET` | `/api/rankings/{id}` | Obtener detalle completo de un ranking |
| `PUT` | `/api/rankings/{id}` | Actualizar datos de un ranking (ADMIN u ORGANIZER propietario) |
| `DELETE` | `/api/rankings/{id}` | Eliminar un ranking (ADMIN u ORGANIZER propietario) |
| `GET` | `/api/rankings/{id}/teams` | Listar equipos inscritos en el ranking |
| `GET` | `/api/rankings/{id}/sponsors` | Listar patrocinadores asociados al ranking |
| `PATCH` | `/api/rankings/{id}/active` | Activar o pausar/desactivar un ranking (ADMIN u ORGANIZER propietario) |


### 🏷️ Dominio: RankingTeams (4 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/ranking-team-registrations/{rankingId}/teams` | Listar equipos inscritos en un ranking |
| `POST` | `/api/ranking-team-registrations/{rankingId}/teams` | Inscribir un equipo en un ranking (ADMIN u ORGANIZER) |
| `DELETE` | `/api/ranking-team-registrations/{rankingId}/teams/{teamId}` | Desinscribir un equipo de un ranking (ADMIN u ORGANIZER) |
| `POST` | `/api/ranking-team-registrations/{rankingId}/generate-matches` | Generar calendario de partidos Round-Robin para los equipos inscritos (mínimo 4 equipos) |


### 🏷️ Dominio: Matches (16 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/matches` | Listar partidos con filtros opcionales (rankingId, teamId, status) |
| `GET` | `/api/matches/{id}` | Obtener detalle completo de un partido por ID |
| `POST` | `/api/matches/ranking/{rankingId}/generate` | Generar o regenerar calendario de partidos (ADMIN u ORGANIZER) |
| `POST` | `/api/matches/{id}/result` | Registrar resultado de un partido (Equipo participante) |
| `POST` | `/api/matches/{id}/confirm` | Confirmar resultado de un partido (Equipo rival) |
| `POST` | `/api/matches/{id}/dispute` | Comunicar incidencia sobre un resultado (Equipo rival) |
| `PUT` | `/api/matches/{id}/admin-override` | Modificación administrativa de acta / resultado (solo ADMIN) |
| `GET` | `/api/matches/live/active` | Obtener listado de partidos actualmente en vivo o pendientes de aceptación |
| `GET` | `/api/matches/live/stream` | Streaming Server-Sent Events (SSE) global para cambios en cualquier partido en vivo |
| `GET` | `/api/matches/{id}/live` | Obtener estado actual de la sesión en directo de un partido |
| `GET` | `/api/matches/{id}/live/stream` | Conexión SSE para recibir actualizaciones en tiempo real del partido |
| `POST` | `/api/matches/{id}/live/request` | Solicitar inicio de tanteo en directo en pista (Equipo participante o Admin) |
| `POST` | `/api/matches/{id}/live/accept` | Aceptar invitación de partido en vivo en pista (Equipo rival o Admin) |
| `POST` | `/api/matches/{id}/live/point` | Anotar un punto para un equipo en tiempo real |
| `POST` | `/api/matches/{id}/live/undo` | Deshacer el último punto anotado (Undo) |
| `POST` | `/api/matches/{id}/live/sign` | Firma digital del acta oficial por el capitán de equipo |


### 🏷️ Dominio: Incidents (4 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/incidents` | Listar incidencias (Admin ve todas, equipos ven las de sus partidos) |
| `GET` | `/api/incidents/{id}` | Obtener detalle de una incidencia |
| `POST` | `/api/incidents/{id}/resolve` | Resolver o rechazar una incidencia arbitral (solo ADMIN) |
| `PATCH` | `/api/incidents/{id}/review` | Marcar una incidencia en revisión (solo ADMIN) |


### 🏷️ Dominio: Classification (2 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/classification/{rankingId}/official` | Obtener clasificación oficial (solo partidos confirmados) |
| `GET` | `/api/classification/{rankingId}/provisional` | Obtener clasificación provisional (incluye partidos pendientes de confirmar) |


### 🏷️ Dominio: Auth (5 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Iniciar sesión |
| `POST` | `/api/auth/setup-password` | Configurar contraseña inicial mediante token de bienvenida |
| `POST` | `/api/auth/forgot-password` | Solicitar recuperación de contraseña |
| `POST` | `/api/auth/reset-password` | Restablecer contraseña con token de recuperación |
| `GET` | `/api/auth/profile` | Obtener perfil del usuario autenticado |


### 🏷️ Dominio: System (1 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check del estado del servidor API |


### 🏷️ Dominio: Levels (5 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/levels` | Listar todos los niveles |
| `POST` | `/api/levels` | Crear un nuevo nivel (solo ADMIN) |
| `GET` | `/api/levels/{id}` | Obtener nivel por ID |
| `PUT` | `/api/levels/{id}` | Actualizar nivel (solo ADMIN) |
| `DELETE` | `/api/levels/{id}` | Eliminar nivel (solo ADMIN) |


### 🏷️ Dominio: Categories (5 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/categories` | Listar todas las categorías |
| `POST` | `/api/categories` | Crear una nueva categoría (solo ADMIN) |
| `GET` | `/api/categories/{id}` | Obtener categoría por ID |
| `PUT` | `/api/categories/{id}` | Actualizar categoría (solo ADMIN) |
| `DELETE` | `/api/categories/{id}` | Eliminar categoría (solo ADMIN) |


### 🏷️ Dominio: Sponsors (5 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/sponsors` | Listar todos los patrocinadores |
| `POST` | `/api/sponsors` | Crear un nuevo patrocinador (solo ADMIN) |
| `GET` | `/api/sponsors/{id}` | Obtener patrocinador por ID |
| `PUT` | `/api/sponsors/{id}` | Actualizar patrocinador (solo ADMIN) |
| `DELETE` | `/api/sponsors/{id}` | Eliminar patrocinador (solo ADMIN) |


### 🏷️ Dominio: Locations (5 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/locations` | Listar todas las sedes / ubicaciones |
| `POST` | `/api/locations` | Crear una nueva sede deportiva con todos los datos de dirección (solo ADMIN) |
| `GET` | `/api/locations/{id}` | Obtener sede por ID |
| `PUT` | `/api/locations/{id}` | Actualizar sede deportiva (solo ADMIN) |
| `DELETE` | `/api/locations/{id}` | Eliminar sede (solo ADMIN) |


### 🏷️ Dominio: Audit (1 operaciones)

| Método | Endpoint | Resumen |
| :--- | :--- | :--- |
| `GET` | `/api/audit-logs` | Consultar registros globales de auditoría de la plataforma (solo ADMIN) |


---

## 4. Pipeline de Sincronización Automática (SDD)

El flujo de entrega continua está garantizado mediante el pipeline unificado:

```
.openspec/specs/ ➔ backend/src/ (JSDoc Swagger) ➔ backend/openapi.json ➔ Orval (@core/api) ➔ Angular MFEs
```

- **Validación de Integridad:** `npm run spec:check`
- **Auditoría de Salud:** `npm run spec:audit`
- **Regeneración de Contratos:** `npm run api:sync`
- **Refresco de esta Documentación:** `npm run spec:docs`
