# Arquitectura Micro-Frontends con Native Federation

Este documento describe la arquitectura de **Micro-Frontends** implementada en el frontend de la plataforma **Padel Ranking** mediante **Angular Multi-Project Workspace** y **Native Federation** (`@angular-architects/native-federation`).

---

## 1. Visión General y Principios

Native Federation aprovecha los **estándares web nativos (ECMAScript Modules / Import Maps)** en el navegador y el bundler moderno de Angular basado en **esbuild**, desacoplando los diferentes dominios de la aplicación en proyectos independientes con sus propios servidores y puertos de desarrollo.

```mermaid
flowchart TD
    subgraph Host Shell [Host Shell (rpm-app: Puerto 4200)]
        A[Navbar & Layout Global]
        B[AuthGuard & AuthService]
        C[PrimeNG Aura Theme Provider]
        D[ngx-translate i18n Provider]
        E[Router Outlet]
    end

    subgraph Remotes [Micro-Frontend Remote Applications]
        R1[rpm-rankings:4202 : Public / Ranking / Standings / Calendar]
        R2[rpm-admin:4201 : Admin Dashboard / Teams / Incidents / Audit]
        R3[rpm-teams:4203 : Team Portal / Score Submission / Disputas]
        R4[rpm-users:4204 : Auth / Login / Setup / Reset]
        R5[rpm-live:4205 : Live Match Tracker / Tanteo en Pista / SSE Retransmisión]
    end

    E -->|Lazy Dynamic Federation| R1
    E -->|Lazy Dynamic Federation| R2
    E -->|Lazy Dynamic Federation| R3
    E -->|Lazy Dynamic Federation| R4
    E -->|Lazy Dynamic Federation| R5
```

---

## 2. Proyectos del Workspace (`projects/`)

### A. Host Shell (`rpm-app` — Puerto 4200)
* **Responsabilidad**: Contenedor y orquestador principal de la aplicación.
* **Componentes clave**:
  * `app.component.ts` / `app.component.html`: Layout raíz con `router-outlet`, `p-toast` y `p-confirmdialog`.
  * `navbar.component.ts`: Barra de navegación con estado de autenticación y cambio de vistas.
  * `footer.component.ts`: Pie de página informativo con normativa de puntuación.
  * `app.config.ts`: Proveedores globales (`provideHttpClient`, `providePrimeNG`, `provideTranslateService`, interceptores de seguridad).
  * `app.routes.ts`: Enrutamiento dinámico federado mediante `loadRemoteModule(...)`.

### B. Aplicaciones Remotas (`projects/*`)

| Proyecto Remoto | Puerto | Exposición (`federation.config.js`) | Descripción y Funcionalidad |
| :--- | :--- | :--- | :--- |
| **`rpm-rankings`** | 4202 | `'./routes': './projects/rpm-rankings/src/app/app.routes.ts'` | Vista pública con selector de ranking, clasificación en tiempo real, calendario de partidos, visor de sets y normativa oficial. |
| **`rpm-admin`** | 4201 | `'./routes': './projects/rpm-admin/src/app/app.routes.ts'` | Panel de control de administración, alta/edición de rankings, alta/edición de equipos y jugadores, generador round-robin, modificación administrativa de partidos (Admin Override), resolución de incidencias arbitrales, tablas maestras y auditoría. |
| **`rpm-teams`** | 4203 | `'./routes': './projects/rpm-teams/src/app/app.routes.ts'` | Portal exclusivo para usuarios de equipo: consulta de enfrentamientos, registro interactivo de marcadores (2-0, 2-1, 1-2, 0-2), confirmación de resultados y apertura de incidencias. |
| **`rpm-users`** | 4204 | `'./routes': './projects/rpm-users/src/app/app.routes.ts'` | Flujo de autenticación, login, recuperación y activación de cuentas. |
| **`rpm-live`** | 4205 | `'./routes': './projects/rpm-live/src/app/app.routes.ts'` | Tanteo en tiempo real punto a punto en pista: selector de modalidad (Punto de Oro o Con Ventajas), confirmación cruzada de rival, marcador en directo con alertas de cambio de lado / desempate / punto decisivo, undo de puntos, firma digital de capitanes y streaming SSE para espectadores. |

---

## 3. Configuración de Native Federation

### Host (`projects/rpm-app/federation.config.js`)
```javascript
const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'rpm-app',
  remotes: {
    'rpm-admin': 'http://localhost:4201/remoteEntry.js',
    'rpm-rankings': 'http://localhost:4202/remoteEntry.js',
    'rpm-teams': 'http://localhost:4203/remoteEntry.js',
    'rpm-users': 'http://localhost:4204/remoteEntry.js',
    'rpm-live': 'http://localhost:4205/remoteEntry.js',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    '@angular/cdk': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'primeng': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@primeng/themes': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'rxjs': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },
  skip: ['rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket', 'primeicons']
});
```

### Remoto (Ejemplo `projects/rpm-admin/federation.config.js`)
```javascript
const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'rpm-admin',
  exposes: {
    './routes': './projects/rpm-admin/src/app/app.routes.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    '@angular/cdk': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'primeng': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@primeng/themes': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },
  skip: ['rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket', 'primeicons']
});
```

---

## 4. Estándares de Código y Directrices de Componentes

1. **Estructura Modular de 4 Archivos**: Todos los componentes cuentan con sus respectivos `.html`, `.scss`, `.ts` y `.spec.ts`.
2. **Componentes Standalone**: Todos los componentes son `standalone: true` sin uso de `NgModule`.
3. **Gestión de Estado Reactiva**: Uso exclusivo de Angular Signals (`signal()`, `computed()`), actualizados con `.set()` o `.update()`, evitando `.mutate()`.
4. **Control Flow Nativo**: Uso de `@if`, `@for`, `@switch` en lugar de directivas estructurales legacy.
5. **Inyección de Dependencias**: Servicios declarados con `providedIn: 'root'` e inyectados con la función `inject()`.
6. **Estética y UI**: Librería de componentes **PrimeNG** configurada con el tema oficial **Aura en variante clara (Light Mode)** y contraste tipográfico optimizado (WCAG).
7. **Internacionalización (i18n)**: Configuración con `@ngx-translate/core` y `@ngx-translate/http-loader` utilizando español (`es.json`) como idioma predeterminado.
