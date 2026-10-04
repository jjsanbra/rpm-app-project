# 🎾 Padel Ranking Application

Plataforma web completa, modular y escalable para la gestión de **Rankings de Pádel**, desarrollada con arquitectura limpia en **Node.js / Express (Backend)** y **Angular Multi-Project Workspace con Micro-Frontends Native Federation, PrimeNG Aura Light y ngx-translate (Frontend)**.

---

## 🌟 Características Principales

- **Concepto Centrado en Ranking**: Diseñado específicamente para rankings por temporadas con formato todos contra todos (Round-Robin).
- **Sistema de Puntuación Federado en Backend**:
  - Victoria 2 - 0: **5 puntos** al ganador / **1 punto** al perdedor.
  - Victoria 2 - 1: **4 puntos** al ganador / **2 puntos** al perdedor.
  - *Cálculo y asignación 100% blindados en backend.*
- **Flujo de Partidos y Resultados Seguro**:
  - `PENDING_RESULT` → `PENDING_CONFIRMATION` → `CONFIRMED` / `DISPUTED`.
  - El usuario del equipo solo puede registrar resultados de su propio equipo indicando la **fecha real** del partido (validada estrictamente dentro del periodo de inicio/fin del ranking).
  - El rival dispone de 48h para **confirmar** el resultado o **comunicar una incidencia**.
  - Clasificación oficial (solo partidos confirmados) y provisional en tiempo real.
- **Resolución Arbitral y Auditoría**:
  - El administrador puede intervenir en cualquier partido con **Admin Override** (recálculo automático de clasificación y puntos) y resolver disputas con registro de actas y auditoría inmutable.
- **Gestión Integral de Equipos y Accesos**:
  - Alta y edición completa de datos de equipo (2 titulares obligatorios + 1 reserva opcional).
  - 1 a 2 emails de contacto con sincronización automática con usuarios `TEAM_USER`, control de activación/desactivación y reenvío de credenciales de bienvenida.
- **Entidades Maestras Desacopladas**:
  - Niveles, Categorías, Patrocinadores y Sedes/Ubicaciones gestionados mediante factory CRUD extensible.
- **Frontend Multi-Proyecto y Micro-Frontends Reales**:
  - Estructura **Angular Multi-Project Workspace** (`projects/*`) basada en el estándar industrial.
  - **Native Federation** (`@angular-architects/native-federation`) con remotos independientes expuestos por puertos dedicados (4200 a 4204).
  - Componentes divididos en estándar modular de 4 archivos (`.html`, `.scss`, `.ts`, `.spec.ts`).
  - **PrimeNG** configurado con el tema oficial **Aura en variante clara (Light Mode)** y contraste optimizado.
  - **Internacionalización (i18n)** con `@ngx-translate/core` (`assets/i18n/es.json`).
  - Estado reactivo con **Angular Signals** y componentes **Standalone** con control flow nativo (`@if`, `@for`).

---

## 🚀 Puesta en Marcha Rápida

### 1. Requisitos
- **Node.js** >= 18 (Probado en v22.23.2)
- **npm** >= 9

### 2. Ejecución Simultánea (Backend + Todos los Microfrontends)
Desde la raíz del proyecto, ejecuta un único comando para lanzar concurrentemente el backend y todos los microfrontends:

```bash
npm start
```

Esto levantará de forma simultánea:
- **API REST & Swagger (Backend)**: `http://localhost:3000` (Swagger en `http://localhost:3000/api-docs`)
- **Host / Shell App (`rpm-app`)**: `http://localhost:4200` (con proxy `/api` integrado hacia el backend)
- **Admin Remote (`rpm-admin`)**: `http://localhost:4201`
- **Rankings Remote (`rpm-rankings`)**: `http://localhost:4202`
- **Teams Remote (`rpm-teams`)**: `http://localhost:4203`
- **Users Remote (`rpm-users`)**: `http://localhost:4204`

### 3. Ejecución Individual
```bash
# Solo Backend (Puerto 3000)
npm run dev:backend

# Solo Shell App (Puerto 4200)
npx ng serve rpm-app

# Remoto individual (ej: Admin en 4201)
npx ng serve rpm-admin
```

---

## 🔑 Credenciales de Desarrollo (Dev Seed)

| Rol | Email | Contraseña | Permisos |
| :--- | :--- | :--- | :--- |
| **ADMIN** | `admin@padelranking.dev` | `Admin123!` | Control total, rankings, equipos, resolución de disputas, auditoría |
| **TEAM_USER** (Equipo 1) | `equipo1@padelranking.dev` | `Team123!` | Registro y confirmación de partidos de Los Ases |
| **TEAM_USER** (Equipo 2) | `equipo2@padelranking.dev` | `Team123!` | Registro y confirmación de partidos de Smash Bros |
| **TEAM_USER** (Equipo 3) | `equipo3@padelranking.dev` | `Team123!` | Registro y confirmación de partidos de Net Masters |
| **TEAM_USER** (Equipo 4) | `equipo4@padelranking.dev` | `Team123!` | Registro y confirmación de partidos de Reyes del Pádel |

---

## 🧪 Pruebas Automatizadas

### Backend Tests (22 pruebas de integración)
```bash
npm run test:backend
```
- Autenticación y RBAC (`auth.test.js`)
- Creación y listado de rankings (`rankings.test.js`)
- Equipos, emails y jugadores (`teams.test.js`)
- Flujo de resultados, confirmación, disputa y auditoría (`matches.test.js`)
- Entidades auxiliares (`auxiliary.test.js`)

### Frontend Build
```bash
npm run build
```

---

## 📐 Estructura del Proyecto

```
rpm-app-project/
├── backend/                             # Backend Node.js 22 + Express (Intacto)
│   ├── src/
│   │   ├── config/                      # Variables de entorno y ajustes Swagger
│   │   ├── database/                    # SQLite singleton y seed con 5 rankings y 20 equipos
│   │   ├── middleware/                  # JWT auth, RBAC, rate limiting, validator, errorHandler
│   │   ├── modules/                     # Módulos de dominio (auth, rankings, teams, matches, etc.)
│   │   ├── services/email/              # Servicio de notificaciones por email
│   │   ├── utils/                       # Scoring, validadores de fechas y match generator
│   │   ├── app.js                       # Configuración Express y Swagger
│   │   └── server.js                    # Punto de entrada
│   └── tests/                           # Suites de integración Supertest + Jest
│
├── projects/                            # Angular Multi-Project Workspace (Microfrontends)
│   ├── rpm-app/                         # Shell / Host Application (Puerto 4200)
│   │   ├── federation.config.js         # Orquestador Native Federation de remotos
│   │   └── src/app/
│   │       ├── core/                    # Servicios API, AuthService, modelos, guards, interceptores
│   │       └── shared/                  # Navbar, Footer y componentes comunes
│   │
│   ├── rpm-admin/                       # Microfrontend Admin Dashboard (Puerto 4201)
│   │   ├── federation.config.js         # Exposes './routes'
│   │   └── src/app/                     # admin-dashboard (html, scss, ts, spec.ts)
│   │
│   ├── rpm-rankings/                    # Microfrontend Landing & Clasificación (Puerto 4202)
│   │   ├── federation.config.js         # Exposes './routes'
│   │   └── src/app/                     # landing (html, scss, ts, spec.ts)
│   │
│   ├── rpm-teams/                       # Microfrontend Portal de Equipo (Puerto 4203)
│   │   ├── federation.config.js         # Exposes './routes'
│   │   └── src/app/                     # team-portal (html, scss, ts, spec.ts)
│   │
│   └── rpm-users/                       # Microfrontend Autenticación (Puerto 4204)
│       ├── federation.config.js         # Exposes './routes'
│       └── src/app/                     # login (html, scss, ts, spec.ts), forgot, reset, setup
│
├── angular.json                         # Configuración Angular Workspace con 5 proyectos
├── proxy.conf.json                      # Proxy /api hacia localhost:3000
├── tsconfig.base.json                   # Path mappings (@core)
├── tsconfig.json                        # TypeScript Configuration
└── docs/
    └── microfrontends-architecture.md  # Arquitectura detallada de Micro-Frontends
```
