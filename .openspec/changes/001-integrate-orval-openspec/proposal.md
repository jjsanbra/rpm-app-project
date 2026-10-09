# Propuesta de Cambio: Integración de OpenSpec y Orval

* **ID:** 001-integrate-orval-openspec
* **Fecha:** 2026-10-09
* **Estado:** COMPLETADO / APLICADO
* **Rama:** `feature/Implement_Orval_Openspec`

## 1. Motivación
El proyecto cuenta con una arquitectura de Microfrontends federados (`rpm-app`, `rpm-admin`, `rpm-rankings`, `rpm-teams`, `rpm-users`, `rpm-live`) que consumen un backend Express. Para evitar duplicación de modelos, inconsistencias de contratos y simplificar el desarrollo guiado por IA, se integran OpenSpec (especificaciones vivas) y Orval (generador automático de clientes y modelos Angular).

## 2. Alcance
1. Centralizar especificaciones de módulos en `.openspec/specs/`.
2. Completar esquemas OpenAPI (`components.schemas`) en el backend Express y exportar `openapi.json`.
3. Configurar Orval para generar interfaces TypeScript, clientes Angular `HttpClient` y mocks MSW en `@core`.
4. Adaptar los 6 microfrontends para consumir los clientes tipados generados.
5. Integrar validaciones en scripts de CI.
