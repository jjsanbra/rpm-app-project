# 🛠️ Plan de Tareas: primeng-confirmation-modals

> Ordenadas secuencialmente por dependencias técnicas (Infraestructura / i18n -> Microfrontends -> Pruebas -> Verificación).

## Fase 1: Infraestructura y Soporte Standalone / i18n
- [x] **TASK-1:** Actualizar archivos de internacionalización (`es.json`, `en.json`) con las claves de modal de confirmación en `rpm-app` y microfrontends.
- [x] **TASK-2:** Configurar `ConfirmDialogModule` y `<p-confirmdialog>` en los componentes raíz (`AppComponent`) y `app.config.ts` de `rpm-teams`, `rpm-live` y `rpm-admin`.

## Fase 2: Implementación en Microfrontends
- [x] **TASK-3:** Implementar modal de confirmación en `rpm-teams` (`team-portal.component.ts`) para la acción `confirmMatch(m: Match)`.
- [x] **TASK-4:** Implementar modal de confirmación en `rpm-live` (`live-tracker.component.ts`) para la acción `onSign()`.
- [x] **TASK-5:** Estandarizar estilos e iconografía de los diálogos de confirmación en `rpm-admin` (`admin-dashboard.component.ts`).

## Fase 3: Pruebas y Validación
- [x] **TASK-6:** Actualizar y ejecutar tests unitarios de componentes afectados (`team-portal.component.spec.ts`, `live-tracker.component.spec.ts`, `admin-dashboard.component.spec.ts`).
- [x] **TASK-7:** Ejecutar compilación completa de todos los microfrontends (`npm run build:all`) para garantizar cero regresiones.
