# 📋 Propuesta de Cambio: app-design-system-restyling

## 1. Contexto y Problema de Negocio
La plataforma RPM Padel cuenta actualmente con microfrontends funcionales y estilos base, pero carece de la consistencia visual, jerarquía tipográfica, refinamiento de acabados y pulido interactivo definidos en el sistema de diseño de referencia [docs/DESIGN.md](file:///Users/jjsanquisb/Labs/rpm-app-project/docs/DESIGN.md) (**Padel Court Athletic Luxury**).

Para elevar la plataforma al nivel de un producto deportivo de alto rendimiento (inspirado en la claridad arquitectónica de las pistas panorámicas de cristal y la vitalidad del césped de competición bajo luz mediterránea), se requiere un restyling exhaustivo que unifique tokens de color, tipografía dual (`Outfit` + `Inter`), elevación atmosférica (vidrio esmerilado con `backdrop-filter: blur(16px)`), componentes PrimeNG y experiencias especializadas por dominio (tanteador en vivo, podios, portal de capitanes y panel administrativo).

## 2. Solución Funcional y Arquitectura (Enfoque Híbrido C)

Se implementa la solución mediante una **arquitectura híbrida en dos capas**:

### Capa 1: Preset Nativo PrimeNG (`PadelThemePreset` en `@core`)
- Se crea el preset `PadelThemePreset` mediante `definePreset(Aura, { ... })` de `@primeng/themes`.
- Se definen los tokens semánticos primarios (Emerald Padel `#059669` / `#10B981`), paleta de superficies slate (`#F8FAFC`, `#FFFFFF`), colores de estado y radios de esquina (`8px`, `16px`).
- Se provee de forma centralizada en todos los `app.config.ts` (`providePrimeNG({ theme: { preset: PadelThemePreset } })`), garantizando que todos los componentes PrimeNG (DataTables, Selects, Dialogs, FloatLabels, Tags, Toasts) hereden de forma limpia y nativa la identidad de marca.

### Capa 2: Capa SCSS Especializada (Padel Court Athletic Luxury)
- Resuelve lo que PrimeNG no puede modelar por configuración estática:
  - Botones de acción CTA con gradiente cinético esmeralda/cyan (`linear-gradient(135deg, #10B981 0%, #06B6D4 100%)`).
  - Sistema de elevación atmosférica de 4 niveles y vidrio esmerilado (`backdrop-filter: blur(16px)`).
  - Medallas circulares de podio de 1º Oro, 2º Plata y 3º Bronce con gradientes.
  - Marcador Courtside táctil gigante de `rpm-live` (`80px-120px` con `scale(0.98)`).
  - Barra de navegación de cristal suspendida (`top: 1rem`) y *Dev Quick Account Switcher*.

### B. Jerarquía Tipográfica Dual
- **`Outfit` (Display & Headlines):** Títulos de impacto (`display-hero` a `44px`/`800`, `headline-section` a `28px`/`700`, `title-card` a `20px`/`700`), nombres de equipos y dígitos de tanteador en directo (`score-live` a `36px`/`900` con `letterSpacing: 0.02em`).
- **`Inter` (Body & Tabular Data):** Tablas de clasificación densas, datos numéricos de sets, formularios y cuerpos de texto para máxima legibilidad.

### C. Elevación Atmosférica y Glassmorphism (4 Niveles)
- **Nivel 0:** Canvas `#F8FAFC`.
- **Nivel 1 (Cards y Paneles):** Superficie `#FFFFFF` con borde `1px solid #E2E8F0` y sombra sutil `box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(15,23,42,0.03)`.
- **Nivel 2 (Cards Interactivas / Hover):** Elevación dinámica con `transform: translateY(-2px)` y sombra `0 8px 24px -4px rgba(15,23,42,0.08)`.
- **Nivel 3 (Navbar Flotante y Modales):** Capas semi-transparentes `rgba(255, 255, 255, 0.85)` con `backdrop-filter: blur(16px)` y borde `1px solid rgba(226, 232, 240, 0.8)`.
- **Nivel 4 (Modales y Diálogos):** Sombra profunda `0 20px 40px -8px rgba(15, 23, 42, 0.16)` con telón de fondo `rgba(15, 23, 42, 0.4)` y `backdrop-filter: blur(4px)`.

### D. Componentes Específicos por Dominio
1. **Shell (`rpm-app`):** Navbar de cristal flotante pegajosa (`top: 1rem`), branding nítido, barra de cambio rápido de cuenta en desarrollo (*Quick Account Switcher*) con avatares píldora.
2. **Rankings (`rpm-rankings`):** Hero deportivo con gradiente y tipografía `Outfit`, podio de clasificación con medallas circulares (1º Oro, 2º Plata, 3º Bronce con gradientes), DataTables con cabeceras en `#F8FAFC` y reflow responsive para móviles.
3. **Portal de Equipos (`rpm-teams`):** Tarjetas de partido con estados visuales semánticos, badges de confirmación, modales de resultado y disputa con cálculo instantáneo de puntos.
4. **Marcador Courtside (`rpm-live`):** Vista enfocada (`max-width: 900px`), tipografía masiva en tanteo, botones táctiles gigantes de puntuación (`80px`-`120px`) con feedback táctil `scale(0.98)`, indicador de saque con pelota luminosa y alertas flotantes (Punto de Oro, Ventaja, Tie-Break, Cambio de Pista).
5. **Administración y Auth (`rpm-admin`, `rpm-users`):** DataTables refinadas, tarjetas de login y recuperación con `glass-panel` e inputs con FloatLabel.

## 3. Criterios de Aceptación (AC)
- [ ] **AC-1:** Todos los microfrontends y el shell comparten los tokens CSS, variables de color y tipografía de `docs/DESIGN.md`.
- [ ] **AC-2:** El Navbar del Shell (`rpm-app`) se presenta como una barra flotante de cristal (`top: 1rem`, `backdrop-filter: blur(16px)`) con el *Quick Account Switcher* de desarrollo integrado.
- [ ] **AC-3:** La tabla de clasificación en `rpm-rankings` muestra medallas de podio estilizadas con gradientes (Oro, Plata, Bronce) y reflow responsive en tarjetas para pantallas móviles.
- [ ] **AC-4:** Las tarjetas de partido en `rpm-teams` aplican los estilos semánticos exactos para estados (`CONFIRMED`, `PENDING_CONFIRMATION`, `PENDING_RESULT`, `DISPUTED`).
- [ ] **AC-5:** La vista de tanteo en directo (`rpm-live`) implementa el modo Courtside (`max-width: 900px`), botones gigantes con retroalimentación háptica visual (`scale(0.98)`), indicador de saque con pelota luminosa y píldoras flotantes de alerta.
- [ ] **AC-6:** Las tablas y modales administrativas en `rpm-admin` adoptan la nueva apariencia con cabeceras `#F8FAFC`, badges de estado y botones primarios con gradiente esmeralda/cyan.
- [ ] **AC-7:** Las vistas de autenticación en `rpm-users` presentan tarjetas de cristal centradas con FloatLabels e inputs estilizados.
- [ ] **AC-8:** Todos los microfrontends compilan limpiamente (`npm run build:all`) y pasan las pruebas unitarias.
