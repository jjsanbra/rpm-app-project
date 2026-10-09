import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Ranking,
  Team,
  Match,
  ClassificationRow,
  Incident,
  AuditLog,
  AuxiliaryItem,
  LiveMatchSession,
  User
} from '../api/model';
import {
  RankingsService,
  TeamsService,
  MatchesService,
  IncidentsService,
  UsersService,
  AuditService as OrvalAuditService,
  ClassificationService as OrvalClassificationService,
  CategoriesService,
  LevelsService,
  LocationsService,
  SponsorsService,
  RankingTeamsService
} from '../api/endpoints';

@Injectable({ providedIn: 'root' })
export class RankingService {
  private orval = inject(RankingsService);
  private rankingTeams = inject(RankingTeamsService);

  getAll(): Observable<{ data: Ranking[] }> {
    return this.orval.getApiRankings();
  }

  getById(id: string): Observable<{ data: Ranking }> {
    return this.orval.getApiRankingsId(id);
  }

  create(data: any): Observable<{ data: Ranking }> {
    return this.orval.postApiRankings(data);
  }

  update(id: string, data: any): Observable<{ data: Ranking }> {
    return this.orval.putApiRankingsId(id, data);
  }

  toggleActive(id: string, active: boolean): Observable<{ data: Ranking }> {
    return this.orval.patchApiRankingsIdActive(id, { active });
  }

  getTeams(rankingId: string): Observable<{ data: Team[] }> {
    return this.orval.getApiRankingsIdTeams(rankingId);
  }

  enrollTeam(rankingId: string, teamId: string): Observable<any> {
    return this.rankingTeams.postApiRankingTeamRegistrationsRankingIdTeams(rankingId, { teamId });
  }

  unenrollTeam(rankingId: string, teamId: string): Observable<any> {
    return this.rankingTeams.deleteApiRankingTeamRegistrationsRankingIdTeamsTeamId(rankingId, teamId);
  }

  delete(id: string): Observable<any> {
    return this.orval.deleteApiRankingsId(id);
  }
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private orval = inject(UsersService);

  getOrganizers(): Observable<{ data: User[] }> {
    return this.orval.getApiUsersOrganizers();
  }

  createOrganizer(data: any): Observable<{ data: User; message: string }> {
    return this.orval.postApiUsersOrganizers(data);
  }

  updateOrganizer(id: string, data: any): Observable<{ data: User }> {
    return this.orval.putApiUsersOrganizersId(id, data);
  }

  deleteOrganizer(id: string): Observable<{ message: string }> {
    return this.orval.deleteApiUsersOrganizersId(id);
  }
}

@Injectable({ providedIn: 'root' })
export class TeamService {
  private orval = inject(TeamsService);

  getAll(): Observable<{ data: Team[] }> {
    return this.orval.getApiTeams();
  }

  getById(id: string): Observable<{ data: Team }> {
    return this.orval.getApiTeamsId(id);
  }

  create(data: any): Observable<{ data: Team }> {
    return this.orval.postApiTeams(data);
  }

  update(id: string, data: any): Observable<{ data: Team }> {
    return this.orval.putApiTeamsId(id, data);
  }

  toggleActive(id: string, active: boolean): Observable<{ data: Team }> {
    return this.orval.patchApiTeamsIdActive(id, { active });
  }

  resendWelcome(id: string): Observable<any> {
    return this.orval.postApiTeamsIdResendWelcome(id);
  }
}

@Injectable({ providedIn: 'root' })
export class MatchService {
  private orval = inject(MatchesService);
  private rankingTeams = inject(RankingTeamsService);

  getAll(params?: any): Observable<{ data: Match[] }> {
    return this.orval.getApiMatches(params);
  }

  getById(id: string): Observable<{ data: Match }> {
    return this.orval.getApiMatchesId(id);
  }

  submitResult(id: string, data: any): Observable<{ data: Match }> {
    return this.orval.postApiMatchesIdResult(id, data);
  }

  confirmResult(id: string): Observable<{ data: Match }> {
    return this.orval.postApiMatchesIdConfirm(id);
  }

  disputeResult(id: string, description: string): Observable<{ data: Match }> {
    return this.orval.postApiMatchesIdDispute(id, { description });
  }

  adminOverride(id: string, data: any): Observable<{ data: Match }> {
    return this.orval.putApiMatchesIdAdminOverride(id, data);
  }

  generateMatches(rankingId: string, rounds = 1, _teamIds?: string[]): Observable<{ data: { message: string; matchesCreated: number } }> {
    return this.rankingTeams.postApiRankingTeamRegistrationsRankingIdGenerateMatches<{ data: { message: string; matchesCreated: number } }>(rankingId, { rounds });
  }
}

@Injectable({ providedIn: 'root' })
export class ClassificationService {
  private orval = inject(OrvalClassificationService);

  getOfficial(rankingId: string): Observable<{ data: ClassificationRow[] }> {
    return this.orval.getApiClassificationRankingIdOfficial<{ data: ClassificationRow[] }>(rankingId);
  }

  getProvisional(rankingId: string): Observable<{ data: ClassificationRow[] }> {
    return this.orval.getApiClassificationRankingIdProvisional<{ data: ClassificationRow[] }>(rankingId);
  }
}

@Injectable({ providedIn: 'root' })
export class IncidentService {
  private orval = inject(IncidentsService);

  getAll(params?: any): Observable<{ data: Incident[] }> {
    return this.orval.getApiIncidents(params);
  }

  getById(id: string): Observable<{ data: Incident }> {
    return this.orval.getApiIncidentsId(id);
  }

  resolve(id: string, payload: any): Observable<{ data: Incident }> {
    const resolution = typeof payload === 'string' ? payload : (payload.resolution || '');
    const status = payload.status || 'RESOLVED';
    return this.orval.postApiIncidentsIdResolve(id, { resolution, status });
  }
}

@Injectable({ providedIn: 'root' })
export class AuditService {
  private orval = inject(OrvalAuditService);

  getLogs(params?: any): Observable<{ data: AuditLog[] }> {
    return this.orval.getApiAuditLogs<{ data: AuditLog[] }>(params);
  }
}

@Injectable({ providedIn: 'root' })
export class AuxiliaryService {
  private levels = inject(LevelsService);
  private categories = inject(CategoriesService);
  private locations = inject(LocationsService);
  private sponsors = inject(SponsorsService);

  getItems(type: 'levels' | 'categories' | 'sponsors' | 'locations'): Observable<{ data: AuxiliaryItem[] }> {
    switch (type) {
      case 'levels': return this.levels.getApiLevels();
      case 'categories': return this.categories.getApiCategories();
      case 'locations': return this.locations.getApiLocations();
      case 'sponsors': return this.sponsors.getApiSponsors();
    }
  }

  createItem(type: 'levels' | 'categories' | 'sponsors' | 'locations', data: any): Observable<{ data: AuxiliaryItem }> {
    switch (type) {
      case 'levels': return this.levels.postApiLevels(data);
      case 'categories': return this.categories.postApiCategories(data);
      case 'locations': return this.locations.postApiLocations(data);
      case 'sponsors': return this.sponsors.postApiSponsors(data);
    }
  }

  updateItem(type: 'levels' | 'categories' | 'sponsors' | 'locations', id: string, data: any): Observable<{ data: AuxiliaryItem }> {
    switch (type) {
      case 'levels': return this.levels.putApiLevelsId(id, data);
      case 'categories': return this.categories.putApiCategoriesId(id, data);
      case 'locations': return this.locations.putApiLocationsId(id, data);
      case 'sponsors': return this.sponsors.putApiSponsorsId(id, data);
    }
  }

  deleteItem(type: 'levels' | 'categories' | 'sponsors' | 'locations', id: string): Observable<any> {
    switch (type) {
      case 'levels': return this.levels.deleteApiLevelsId(id);
      case 'categories': return this.categories.deleteApiCategoriesId(id);
      case 'locations': return this.locations.deleteApiLocationsId(id);
      case 'sponsors': return this.sponsors.deleteApiSponsorsId(id);
    }
  }
}

@Injectable({ providedIn: 'root' })
export class LiveMatchService {
  private matches = inject(MatchesService);
  private http = inject(HttpClient);
  private apiUrl = '/api/matches';

  getActiveLiveMatches(): Observable<{ data: LiveMatchSession[] }> {
    return this.matches.getApiMatchesLiveActive();
  }

  getLiveSession(matchId: string): Observable<{ data: LiveMatchSession | null }> {
    return this.matches.getApiMatchesIdLive(matchId);
  }

  requestLive(matchId: string, gameMode?: 'GOLDEN_POINT' | 'ADVANTAGE'): Observable<{ data: LiveMatchSession }> {
    return this.matches.postApiMatchesIdLiveRequest(matchId, { gameMode });
  }

  acceptLive(matchId: string, gameMode?: 'GOLDEN_POINT' | 'ADVANTAGE'): Observable<{ data: LiveMatchSession }> {
    return this.matches.postApiMatchesIdLiveAccept(matchId, { gameMode });
  }

  scorePoint(matchId: string, team: 1 | 2): Observable<{ data: LiveMatchSession }> {
    return this.matches.postApiMatchesIdLivePoint(matchId, { team });
  }

  undoPoint(matchId: string): Observable<{ data: LiveMatchSession }> {
    return this.matches.postApiMatchesIdLiveUndo(matchId);
  }

  signLive(matchId: string): Observable<{ data: LiveMatchSession }> {
    return this.matches.postApiMatchesIdLiveSign(matchId);
  }

  listenMatchStream(matchId: string): Observable<LiveMatchSession> {
    return new Observable<LiveMatchSession>((observer) => {
      const eventSource = new EventSource(`${this.apiUrl}/${matchId}/live/stream`);

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          observer.next(data);
        } catch (err) {
          console.error('Error parsing SSE match data', err);
        }
      };

      eventSource.onerror = (error) => {
        console.warn('SSE connection warning on live match', error);
      };

      return () => {
        eventSource.close();
      };
    });
  }

  listenGlobalActiveStream(): Observable<LiveMatchSession[]> {
    return new Observable<LiveMatchSession[]>((observer) => {
      const eventSource = new EventSource(`${this.apiUrl}/live/stream`);

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          observer.next(data);
        } catch (err) {
          console.error('Error parsing global active matches SSE', err);
        }
      };

      eventSource.onerror = (error) => {
        console.warn('SSE connection warning on global live stream', error);
      };

      return () => {
        eventSource.close();
      };
    });
  }
}
