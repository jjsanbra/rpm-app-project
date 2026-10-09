# Especificación: Autenticación y Control de Acceso (Auth)

## 1. Requerimientos Funcionales
* **Registro e Invitación de Usuarios:** Los organizadores y administradores pueden registrar usuarios que reciben un enlace temporal con token para establecer su contraseña inicial.
* **Inicio de Sesión:** Autenticación por email y contraseña. Retorna un JWT firmado con expiración configurable.
* **Recuperación de Contraseña:** Envío de token de recuperación de un solo uso por correo y restablecimiento seguro.
* **Roles de Usuario:**
  * `ADMIN`: Control total del sistema y auditoría.
  * `ORGANIZER`: Gestión de torneos, partidos y resolución de incidencias.
  * `PLAYER`: Consulta de rankings, parejas, introducción de resultados y registro de incidencias.
  * `VIEWER`: Acceso público de sólo lectura a clasificaciones y partidos en directo.

## 2. Contratos de Endpoints API
* `POST /api/auth/login`: `{ email, password }` -> `{ token, user }`
* `POST /api/auth/setup-password`: `{ token, password }` -> `{ message, user }`
* `POST /api/auth/forgot-password`: `{ email }` -> `{ message }`
* `POST /api/auth/reset-password`: `{ token, password }` -> `{ message }`
* `GET /api/auth/me`: Requiere Bearer JWT -> `{ user }`

## 3. Modelo de Datos Clave
* **User:**
  * `id`: string (UUID)
  * `email`: string (email)
  * `role`: enum (`ADMIN` | `ORGANIZER` | `PLAYER` | `VIEWER`)
  * `firstName`: string
  * `lastName`: string
  * `phone`: string (opcional)
  * `isActive`: boolean
  * `createdAt`: ISO8601 string
