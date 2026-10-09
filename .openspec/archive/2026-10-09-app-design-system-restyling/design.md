## 1. Arquitectura de Tokens e Integración Híbrida
Para asegurar una experiencia idéntica en modo federado y standalone, sin fricciones de especificidad, se implementa una solución de dos niveles:

### Nivel 1: Preset Nativo TypeScript (`PadelThemePreset`) en `@core`
Ubicado en `projects/rpm-app/src/app/core/theme/padel-preset.ts` y exportado por `@core`:
```typescript
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const PadelThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      }
    }
  }
});
```

### Nivel 2: Capa SCSS de Alto Rendimiento (Tokens Globales)

- Variables CSS en `:root`:
  - `--bg-canvas: #F8FAFC`
  - `--surface-pure: #FFFFFF`
  - `--surface-glass: rgba(255, 255, 255, 0.85)`
  - `--surface-card: rgba(255, 255, 255, 0.95)`
  - `--border-subtle: #E2E8F0`
  - `--border-input: #CBD5E1`
  - `--primary-turf: #059669`
  - `--primary-turf-hover: #047857`
  - `--primary-gradient: linear-gradient(135deg, #10B981 0%, #06B6D4 100%)`
  - `--primary-gradient-hover: linear-gradient(135deg, #059669 0%, #0891B2 100%)`
  - `--cyan-pulse: #0891B2`
  - `--court-blue: #2563EB`
  - `--text-slate: #0F172A`
  - `--text-secondary: #1E293B`
  - `--text-muted: #475569`
  - `--text-dim: #64748B`
  - `--status-confirmed: #10B981`
  - `--status-confirmed-bg: rgba(16, 185, 129, 0.12)`
  - `--status-confirmed-border: rgba(16, 185, 129, 0.25)`
  - `--status-confirmed-text: #047857`
  - `--status-pending: #D97706`
  - `--status-pending-bg: rgba(245, 158, 11, 0.12)`
  - `--status-pending-border: rgba(245, 158, 11, 0.25)`
  - `--status-pending-text: #B45309`
  - `--status-disputed: #DC2626`
  - `--status-disputed-bg: rgba(239, 68, 68, 0.12)`
  - `--status-disputed-border: rgba(239, 68, 68, 0.25)`
  - `--status-disputed-text: #B91C1C`
  - `--podium-gold: linear-gradient(135deg, #F59E0B, #D97706)`
  - `--podium-silver: linear-gradient(135deg, #94A3B8, #64748B)`
  - `--podium-bronze: linear-gradient(135deg, #B45309, #78350F)`
  - `--radius-sm: 8px`
  - `--radius-md: 16px`
  - `--radius-lg: 24px`
  - `--radius-full: 9999px`
  - `--shadow-tier1: 0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 4px 12px 0 rgba(15, 23, 42, 0.03)`
  - `--shadow-tier2: 0 8px 24px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.03)`
  - `--shadow-tier3: 0 12px 32px -4px rgba(15, 23, 42, 0.08)`
  - `--shadow-tier4: 0 20px 40px -8px rgba(15, 23, 42, 0.16)`
  - `--shadow-glow-emerald: 0 0 20px rgba(16, 185, 129, 0.20)`
  - `--focus-ring: 0 0 0 3px rgba(16, 185, 129, 0.15)`

## 2. Especificación por Microfrontend

### A. Shell (`projects/rpm-app`)
- **Sticky Floating Glass Navbar:**
  - Contenedor flotante a `top: 1rem`, ancho máximo `1240px`, centrado.
  - Fondo `rgba(255, 255, 255, 0.85)` con `backdrop-filter: blur(16px)` y borde `1px solid rgba(226, 232, 240, 0.8)`.
  - Enlaces de navegación con indicador de ruta activa en esmeralda (`#059669`).
  - *Dev Quick Account Switcher*: Píldora horizontal en sub-barra o menú con avatares de 1 clic para Admin, Capitán y Jugador.

### B. Rankings (`projects/rpm-rankings`)
- **Hero Section:** Tipografía `Outfit` 800 (`display-hero`), etiqueta deportiva en mayúsculas `label-caps`, estadísticas destacadas del torneo.
- **Standings Table (DataTable PrimeNG):**
  - Cabecera con fondo `#F8FAFC`, texto `#64748B` uppercase `12px` font-weight 700.
  - Medallas de podio circulares (`28x28px`):
    - 1º: Gradiente Oro (`#F59E0B` -> `#D97706`).
    - 2º: Gradiente Plata (`#94A3B8` -> `#64748B`).
    - 3º: Gradiente Bronce (`#B45309` -> `#78350F`).
    - 4º+: `#F1F5F9` con borde `#E2E8F0` y texto `#475569`.
  - Nombre del equipo en `Outfit` 700 con nombres de jugadores en subtítulo `12px` Inter.
  - Reflow a tarjetas en móviles (< 640px).

### C. Portal de Equipos (`projects/rpm-teams`)
- **Team Header:** Tarjeta KPI de 4 columnas (Partidos totales, Jugados, Pendientes, Confirmados) con micro-animaciones al cargar.
- **Team Matches:** Tarjetas interactivas con estados semánticos (Borde verde esmeralda y brillo para `CONFIRMED`, ámbar para `PENDING_CONFIRMATION`, rojo para `DISPUTED`).
- **Submit Result Modal:** Formulario con pares numéricos para los 3 sets, previsualización en vivo del reparto de puntos y botones con gradiente esmeralda.

### D. Marcador Courtside en Vivo (`projects/rpm-live`)
- **Layout Courtside Mode:**
  - Ancho máximo `900px`, centrado, sin distracciones de navegación.
  - Tanteador principal con `score-live` (`Outfit` 900, `36px`/`40px`), badges de puntos de `65x48px`.
  - Pelota de saque activa con icono luminoso verde esmeralda (`box-shadow: 0 0 14px rgba(16, 185, 129, 0.5)`).
  - Botones táctiles de tanteo de gran tamaño (`min-height: 80px` en móvil, `120px` en tablet) con micro-animación `scale(0.98)` al presionar.
  - Alertas animadas para Punto de Oro (`#D97706`), Tie-Break (`#2563EB`) y Cambio de Pista.

### E. Administración y Autenticación (`projects/rpm-admin`, `projects/rpm-users`)
- **Admin Dashboard:** Pestañas estilo píldora con navegación fluida, DataTables con alineación perfecta, modales de edición con PrimeNG FloatLabel.
- **Auth Views:** Tarjetas de cristal centradas, FloatLabels con borde verde esmeralda al foco y botón de acción principal con gradiente.
