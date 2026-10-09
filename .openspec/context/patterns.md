# Patrones de Arquitectura y Desarrollo (RPM Monorepo)

## 1. Patrón de Single Source of Truth
* **Fuente de Verdad de Datos:** Esquemas OpenAPI 3.0 definidos en `backend/src/docs/schemas.js`.
* **Exportación:** `backend/openapi.json` (automatizado con `npm run api:export`).
* **Consumo Frontend:** Generación estricta de TypeScript con Orval en `projects/rpm-app/src/app/core/api/`.

## 2. Patrón de Consumo de Microfrontends (@core)
* Todos los microfrontends (`rpm-admin`, `rpm-rankings`, `rpm-teams`, `rpm-users`, `rpm-live`, `rpm-app`) consumen modelos y clientes de red importando exclusivamente desde `@core`.
* No se deben definir interfaces de entidad duplicadas en los proyectos remotos.

## 3. Manejo de Autenticación y Autorización
* El interceptor `auth.interceptor.ts` en `@core` inyecta la cabecera `Authorization: Bearer <token>` en todas las peticiones `HttpClient` generadas por Orval.
* El estado reactivo de usuario y roles se consulta mediante Signals en `AuthService` (`isAdmin()`, `isOrganizer()`, `currentUser()`).
