# 📐 Diseño Técnico y Arquitectura: primeng-confirmation-modals

## 1. Impacto en Contratos y Endpoints (OpenAPI 3.0)
No requiere nuevos endpoints ni cambios en contratos OpenAPI existentes. Se mantiene el consumo de los servicios generados en `@core`:
- `MatchesService.postApiMatchesIdConfirm(id)`
- `MatchesService.postApiMatchesIdLiveSign(id)`
- `UsersService.deleteApiUsersOrganizersId(id)`
- `RankingsService.deleteApiRankingsId(id)`
- `TeamsService.deleteApiTeamsId(id)`
- `RankingTeamsService.deleteApiRankingTeamRegistrationsRankingIdTeamsTeamId(rankingId, teamId)`

## 2. Impacto en Microfrontends (Angular 22 + Native Federation)

### A. Shell (`projects/rpm-app`)
- Mantiene `<p-confirmdialog></p-confirmdialog>` en [app.component.html](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-app/src/app/app.component.html) y `ConfirmationService` en [app.config.ts](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-app/src/app/app.config.ts).
- Agrega claves de traducción compartidas en `projects/rpm-app/src/assets/i18n/es.json` y `en.json`.

### B. Portal de Equipos (`projects/rpm-teams`)
- Componente [team-portal.component.ts](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-teams/src/app/team-portal.component.ts): Inyecta `ConfirmationService` y abre la modal en `confirmMatch(m: Match)`.
- Componente raíz [app.component.ts](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-teams/src/app/app.component.ts) / [app.component.html](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-teams/src/app/app.component.html): Añade `ConfirmDialogModule` y `<p-confirmdialog>` para soporte standalone.

### C. Marcador en Vivo (`projects/rpm-live`)
- Componente [live-tracker.component.ts](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-live/src/app/live-tracker/live-tracker.component.ts): Inyecta `ConfirmationService` y añade confirmación en `onSign()`.
- Componente raíz [app.component.ts](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-live/src/app/app.component.ts): Añade `ConfirmDialogModule` y `<p-confirmdialog>`.

### D. Panel de Administración (`projects/rpm-admin`)
- Componente [admin-dashboard.component.ts](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-admin/src/app/admin-dashboard.component.ts): Estandariza las llamadas a `confirmationService.confirm({...})`.
- Componente raíz [app.component.ts](file:///Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-admin/src/app/app.component.ts): Añade `ConfirmDialogModule` y `<p-confirmdialog>`.

## 3. Patrones y Decisiones Técnicas

### Tipos de Diálogo de Confirmación PrimeNG
Se definen dos patrones estándar de invocación:

#### 1. Confirmación de Validación / Aprobación (No destructiva)
```typescript
this.confirmationService.confirm({
  header: this.translate.instant('TEAM_PORTAL.CONFIRM_RESULT_MODAL_TITLE'),
  message: this.translate.instant('TEAM_PORTAL.CONFIRM_RESULT_MODAL_MSG', { score }),
  icon: 'pi pi-check-circle text-primary',
  acceptButtonStyleClass: 'p-button-primary p-button-sm',
  rejectButtonStyleClass: 'p-button-secondary p-button-outlined p-button-sm',
  acceptLabel: this.translate.instant('TEAM_PORTAL.CONFIRM_BTN'),
  rejectLabel: this.translate.instant('COMMON.CANCEL'),
  accept: () => { /* Ejecutar acción */ }
});
```

#### 2. Confirmación Destructiva (Eliminaciones / Desinscripciones)
```typescript
this.confirmationService.confirm({
  header: this.translate.instant('ADMIN.CONFIRM_DELETE_TEAM_TITLE'),
  message: this.translate.instant('ADMIN.CONFIRM_DELETE_TEAM_MSG', { name: team.name }),
  icon: 'pi pi-exclamation-triangle text-danger',
  acceptButtonStyleClass: 'p-button-danger p-button-sm',
  rejectButtonStyleClass: 'p-button-secondary p-button-outlined p-button-sm',
  acceptLabel: this.translate.instant('COMMON.DELETE'),
  rejectLabel: this.translate.instant('COMMON.CANCEL'),
  accept: () => { /* Ejecutar acción destructiva */ }
});
```
