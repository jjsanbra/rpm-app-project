# Guía de Desarrollo: Arquitectura Spec-Driven (OpenSpec + Orval)

Esta guía documenta los nuevos patrones y flujos de trabajo del proyecto **RPM App** para el desarrollo de nuevas funcionalidades, refactorizaciones y evolutivos.

---

## 1. Visión y Flujo de Trabajo (Spec-Driven Development)

El proyecto utiliza un ciclo de desarrollo guiado por especificaciones (**SDD**) para garantizar que el contrato entre el backend y los 6 microfrontends de Angular se mantenga 100% tipado, sincronizado y libre de errores.

```
                   FLUJO DE TRABAJO PARA NUEVAS FUNCIONALIDADES
                   
  1. ESPECIFICACIÓN        2. BACKEND & SWAGGER        3. GENERACIÓN        4. FRONTEND ANGULAR
  ┌─────────────────┐      ┌────────────────────┐      ┌─────────────┐      ┌──────────────────┐
  │  .openspec/     │ ───> │  Express Route &   │ ───> │   npm run   │ ───> │  Inyectar desde  │
  │  specs/*.md     │      │  schemas.js        │      │   api:sync  │      │  @core           │
  └─────────────────┘      └────────────────────┘      └─────────────┘      └──────────────────┘
```

---

## 2. Patrones de Desarrollo

### Patrón A: Añadir o Modificar un Endpoint de API

Cuando necesites crear un nuevo endpoint (ej. `POST /api/tournaments`):

#### 1. Actualizar la especificación funcional
Añade el caso de uso y el contrato en el archivo correspondiente dentro de `.openspec/specs/` (ej. `rankings.spec.md`).

#### 2. Definir los Schemas en el Backend
En [`backend/src/docs/schemas.js`](file:///Users/jjsanquisb/Labs/rpm-app-project/backend/src/docs/schemas.js):
```javascript
CreateTournamentRequest: {
  type: 'object',
  required: ['name', 'startDate'],
  properties: {
    name: { type: 'string' },
    startDate: { type: 'string', format: 'date' },
    maxTeams: { type: 'integer' }
  }
},
Tournament: {
  type: 'object',
  required: ['id', 'name', 'startDate'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    name: { type: 'string' },
    startDate: { type: 'string' },
    maxTeams: { type: 'integer' },
    createdAt: { type: 'string', format: 'date-time' }
  }
}
```

#### 3. Implementar y Documentar la Ruta en Express
En el archivo de rutas (ej. `tournament.routes.js`):
```javascript
/**
 * @swagger
 * /api/tournaments:
 *   post:
 *     summary: Crear un nuevo torneo
 *     tags: [Tournaments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTournamentRequest'
 *     responses:
 *       201:
 *         description: Torneo creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Tournament'
 */
router.post('/', authenticate, ctrl.create);
```

#### 4. Sincronizar el Proyecto con un solo comando
Ejecuta desde la raíz:
```bash
npm run api:sync
```
*Esto valida las specs, exporta `openapi.json` y genera los servicios Angular e interfaces TypeScript en `core/api`.*

#### 5. Consumir en Componentes Angular
En cualquier componente de cualquier microfrontend:
```typescript
import { Component, inject, signal } from '@angular/core';
import { TournamentsService, Tournament } from '@core';

@Component({
  selector: 'app-tournament-list',
  standalone: true,
  templateUrl: './tournament-list.component.html'
})
export class TournamentListComponent {
  private tournamentsService = inject(TournamentsService);
  tournaments = signal<Tournament[]>([]);

  loadTournaments() {
    this.tournamentsService.getApiTournaments().subscribe({
      next: (res) => this.tournaments.set(res.data),
      error: (err) => console.error(err)
    });
  }
}
```

---

### Patrón B: Pruebas Unitarias con Mocks de MSW

Orval genera automáticamente archivos `.msw.ts` listos para usar en tests de componentes o mocks de desarrollo sin servidor activo.

```typescript
import { getApiRankingsResponseMock } from '@core';

describe('RankingsComponent', () => {
  it('should process mock rankings', () => {
    const mockData = getApiRankingsResponseMock();
    expect(mockData).toBeDefined();
  });
});
```

---

### Patrón C: Gestión de Estado y Sesión con `@core`

* **Servicios de Red (API):** Generados automáticamente por Orval (`RankingsService`, `TeamsService`, `MatchesService`, etc.).
* **Servicio de Sesión / Auth (`AuthService`):** Proporciona Signals reactivos de sesión (`currentUser()`, `isAdmin()`, `isOrganizer()`, `token()`) y gestiona el ciclo de vida del JWT.
* **Interceptores:** Todas las llamadas generadas por Orval utilizan `HttpClient` de Angular y pasan automáticamente por [`auth.interceptor.ts`](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-app/src/app/core/interceptors/auth.interceptor.ts).

---

## 3. Comandos de Referencia Rápida

| Comando | Descripción | Cuándo usarlo |
| :--- | :--- | :--- |
| `npm run spec:check` | Valida la coherencia de los archivos OpenSpec. | Antes de hacer commit o al cambiar requerimientos. |
| `npm run api:export` | Exporta el schema OpenAPI 3.0 desde Express a JSON. | Al cambiar anotaciones Swagger en el backend. |
| `npm run api:generate` | Exporta OpenAPI + regenera clientes y modelos de Angular. | Al añadir o modificar endpoints. |
| `npm run api:sync` | Pipeline completo (valida specs + exporta + genera). | **Recomendado en el día a día tras cambios de API.** |
| `npm run build:all` | Compila los 6 microfrontends Angular. | Para verificar que no existan errores de tipos. |
| `npm run test:backend` | Ejecuta la suite de pruebas unitarias de Jest. | Para validar lógica del backend. |
