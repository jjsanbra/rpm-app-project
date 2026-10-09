# Arquitectura del Sistema (RPM App Project)

## 1. Visión General
Plataforma Integral de Gestión de Rankings de Pádel implementada como un monorepo compuesto por un backend Node.js/Express y una suite de microfrontends Angular basados en **Native Federation**.

## 2. Componentes del Sistema

### 2.1 Backend (`/backend`)
* **Stack:** Node.js, Express 5, Better-SQLite3, JWT, Swagger JSDoc.
* **Seguridad:** Helmet, CORS restringido, Rate Limiting por IP/endpoint, contraseñas hasheadas con bcrypt.
* **API Spec:** OpenAPI 3.0 generado dinámicamente con `swagger-jsdoc` en `/api-docs` y `/api-docs.json`.

### 2.2 Microfrontends (`/projects`)
* **Shell Principal:** `rpm-app` (Puerto 4200) — Maneja el enrutamiento principal, navbar, autenticación global y carga diferida de microfrontends.
* **Microfrontends Remotos:**
  * `rpm-admin` (Puerto 4201): Administración de torneos, usuarios, sedes, patrocinadores y auditoría.
  * `rpm-rankings` (Puerto 4202): Visualización de clasificaciones, fases y calendario.
  * `rpm-teams` (Puerto 4203): Inscripción y gestión de parejas.
  * `rpm-users` (Puerto 4204): Autenticación, recuperación de contraseña y perfil.
  * `rpm-live` (Puerto 4205): Puntuación en tiempo real y retransmisión de partidos.

### 2.3 Capa Compartida (`@core`)
* Configurada vía alias en `tsconfig.base.json` (`@core` -> `projects/rpm-app/src/app/core/index.ts`).
* Centraliza:
  * Modelos de datos e interfaces TypeScript.
  * Clientes HTTP y generados por Orval.
  * Interceptor de autenticación JWT (`auth.interceptor.ts`).
  * Guards de rutas (`auth.guard.ts`).
  * Utilidades comunes de fecha y manejo de errores.

## 3. Integración de Contratos con Orval
1. El backend expone la especificación en `backend/openapi.json`.
2. Orval compila este esquema en clientes Angular e interfaces TypeScript en `@core`.
3. Todos los microfrontends consumen los endpoints tipados sin duplicar definiciones de API.
