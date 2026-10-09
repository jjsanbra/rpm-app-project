/**
 * Punto de entrada central de la capa compartida (@core).
 */

// Modelos de datos generados automáticamente por Orval / OpenAPI
export * from './api/model';

// Servicios de API generados por Orval
export {
  RankingsService,
  TeamsService,
  MatchesService,
  IncidentsService,
  UsersService,
  CategoriesService,
  LevelsService,
  LocationsService,
  SponsorsService,
  RankingTeamsService,
  SystemService,
  AuditService as AuditApiService,
  ClassificationService as ClassificationApiService,
  AuthService as AuthApiService,
} from './api/endpoints';

// Servicios de aplicación y compatibilidad
export * from './services/api.services';
export * from './services/auth.service';

// Seguridad, Guards e Interceptores
export * from './guards/auth.guard';
export * from './interceptors/auth.interceptor';

// Utilidades
export * from './utils/date.utils';
export * from './utils/error.utils';
