# 🛠️ Plan de Tareas: app-design-system-restyling

> Plan secuencial de restyling con arquitectura híbrida (Preset PrimeNG + Tokens SCSS).

## Fase 1: Preset Nativo PrimeNG, Tokens Globales y Tipografía
- [x] **TASK-1:** Crear `PadelThemePreset` en `@core` (`projects/rpm-app/src/app/core/theme/padel-preset.ts`) usando `definePreset(Aura, ...)` con la paleta esmeralda y superficies slate, y proveerlo en todos los `app.config.ts`.
- [x] **TASK-2:** Actualizar archivos de estilos raíz (`styles.scss`) en el shell (`rpm-app`) y en todos los microfrontends con los tokens de color, sombras de 4 niveles, estados de partido y fuentes (`Outfit` y `Inter`).

## Fase 2: Shell, Navegación y Header (`rpm-app`)
- [x] **TASK-3:** Rediseñar la barra de navegación (`NavbarComponent`) como barra de cristal flotante (`top: 1rem`, `backdrop-filter: blur(16px)`), enlaces con acento esmeralda e integrar el *Quick Account Switcher* de desarrollo.
- [x] **TASK-4:** Actualizar el pie de página (`FooterComponent`) con la estética limpia y tipografía del sistema de diseño.

## Fase 3: Portal Público y Rankings (`rpm-rankings`)
- [x] **TASK-5:** Rediseñar `HeroComponent` con tipografía de impacto (`display-hero` en `Outfit` 800) y badges deportivos.
- [x] **TASK-6:** Rediseñar `StandingsComponent` con medallas circulares de podio con gradientes (Oro, Plata, Bronce) y reflow responsive de DataTable.
- [x] **TASK-7:** Actualizar tarjetas de enfrentamientos (`MatchesComponent`), reglas (`RulesComponent`) y detalle de sede (`RankingInfoComponent`).

## Fase 4: Portal de Equipos (`rpm-teams`)
- [x] **TASK-8:** Rediseñar `TeamHeaderComponent` con tarjetas métricas KPI y micro-animaciones.
- [x] **TASK-9:** Rediseñar `TeamMatchesComponent` con tarjetas interactivas de partido, bordes semánticos de estado y botones de confirmación/registro con gradiente esmeralda.
- [x] **TASK-10:** Pulir modales de resultado (`SubmitResultModalComponent`) y disputa (`DisputeModalComponent`) con inputs FloatLabel y feedback de puntos en tiempo real.

## Fase 5: Marcador Courtside en Directo (`rpm-live`)
- [x] **TASK-11:** Implementar el diseño Courtside en `LiveTrackerComponent`: scoreboard de alto contraste (`score-live`), pelota de saque brillante, botones táctiles gigantes (`80px`-`120px`), feedback al presionar (`scale(0.98)`) y píldoras animadas de Punto de Oro / Tie-Break.

## Fase 6: Autenticación y Administración (`rpm-users` y `rpm-admin`)
- [x] **TASK-12:** Rediseñar vistas de autenticación (`LoginComponent`, `ForgotPasswordComponent`, `ResetPasswordComponent`, `SetupPasswordComponent`) con tarjetas de cristal y FloatLabels.
- [x] **TASK-13:** Actualizar el panel de administración (`AdminDashboardComponent` y sus subcomponentes) con DataTables de cabecera `#F8FAFC`, badges de estado y modales armonizadas.

## Fase 7: Pruebas, Validación y Compilación Global
- [x] **TASK-14:** Ejecutar todos los tests unitarios (`*.spec.ts`) y compilar todos los microfrontends (`npm run build:all`).
