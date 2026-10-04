import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ranking, Team, Match, ClassificationRow, Incident, AuditLog, AuxiliaryItem, SubmitResultPayload, LiveMatchSession, LivePointPayload } from '../models';

@Injectable({ providedIn: 'root' })
export class RankingService {
  private http = inject(HttpClient);
  private apiUrl = '/api/rankings';

  getAll(): Observable<{ data: Ranking[] }> {
    return this.http.get<{ data: Ranking[] }>(this.apiUrl);
  }

  getById(id: string): Observable<{ data: Ranking }> {
    return this.http.get<{ data: Ranking }>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Ranking>): Observable<{ data: Ranking }> {
    return this.http.post<{ data: Ranking }>(this.apiUrl, data);
  }

  update(id: string, data: Partial<Ranking>): Observable<{ data: Ranking }> {
    return this.http.put<{ data: Ranking }>(`${this.apiUrl}/${id}`, data);
  }

  toggleActive(id: string, active: boolean): Observable<{ data: Ranking }> {
    return this.http.patch<{ data: Ranking }>(`${this.apiUrl}/${id}/active`, { active });
  }
}

@Injectable({ providedIn: 'root' })
export class TeamService {
  private http = inject(HttpClient);
  private apiUrl = '/api/teams';

  getAll(): Observable<{ data: Team[] }> {
    return this.http.get<{ data: Team[] }>(this.apiUrl);
  }

  getById(id: string): Observable<{ data: Team }> {
    return this.http.get<{ data: Team }>(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<{ data: Team }> {
    return this.http.post<{ data: Team }>(this.apiUrl, data);
  }

  update(id: string, data: any): Observable<{ data: Team }> {
    return this.http.put<{ data: Team }>(`${this.apiUrl}/${id}`, data);
  }

  toggleActive(id: string, active: boolean): Observable<{ data: Team }> {
    return this.http.patch<{ data: Team }>(`${this.apiUrl}/${id}/active`, { active });
  }

  resendWelcome(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/resend-welcome`, {});
  }
}

@Injectable({ providedIn: 'root' })
export class MatchService {
  private http = inject(HttpClient);
  private apiUrl = '/api/matches';

  getAll(filters?: { rankingId?: string; teamId?: string; status?: string }): Observable<{ data: Match[] }> {
    let url = this.apiUrl;
    if (filters) {
      const params = new URLSearchParams();
      if (filters.rankingId) params.append('rankingId', filters.rankingId);
      if (filters.teamId) params.append('teamId', filters.teamId);
      if (filters.status) params.append('status', filters.status);
      url += `?${params.toString()}`;
    }
    return this.http.get<{ data: Match[] }>(url);
  }

  getById(id: string): Observable<{ data: Match }> {
    return this.http.get<{ data: Match }>(`${this.apiUrl}/${id}`);
  }

  submitResult(id: string, data: SubmitResultPayload): Observable<{ data: Match; message: string }> {
    return this.http.post<{ data: Match; message: string }>(`${this.apiUrl}/${id}/result`, data);
  }

  confirmResult(id: string): Observable<{ data: Match; message: string }> {
    return this.http.post<{ data: Match; message: string }>(`${this.apiUrl}/${id}/confirm`, {});
  }

  disputeResult(id: string, description: string): Observable<{ data: any; message: string }> {
    return this.http.post<{ data: any; message: string }>(`${this.apiUrl}/${id}/dispute`, { description });
  }

  generateMatches(rankingId: string, teamIds: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/ranking/${rankingId}/generate`, { teamIds });
  }

  adminOverride(id: string, data: any): Observable<{ data: Match }> {
    return this.http.put<{ data: Match }>(`${this.apiUrl}/${id}/admin-override`, data);
  }
}

@Injectable({ providedIn: 'root' })
export class ClassificationService {
  private http = inject(HttpClient);
  private apiUrl = '/api/classification';

  getOfficial(rankingId: string): Observable<{ data: ClassificationRow[] }> {
    return this.http.get<{ data: ClassificationRow[] }>(`${this.apiUrl}/${rankingId}/official`);
  }

  getProvisional(rankingId: string): Observable<{ data: ClassificationRow[] }> {
    return this.http.get<{ data: ClassificationRow[] }>(`${this.apiUrl}/${rankingId}/provisional`);
  }
}

@Injectable({ providedIn: 'root' })
export class IncidentService {
  private http = inject(HttpClient);
  private apiUrl = '/api/incidents';

  getAll(filters?: { matchId?: string; status?: string }): Observable<{ data: Incident[] }> {
    let url = this.apiUrl;
    if (filters) {
      const params = new URLSearchParams();
      if (filters.matchId) params.append('matchId', filters.matchId);
      if (filters.status) params.append('status', filters.status);
      url += `?${params.toString()}`;
    }
    return this.http.get<{ data: Incident[] }>(url);
  }

  resolve(id: string, data: { status: string; resolution: string }): Observable<{ data: Incident }> {
    return this.http.patch<{ data: Incident }>(`${this.apiUrl}/${id}/resolve`, data);
  }
}

@Injectable({ providedIn: 'root' })
export class AuditService {
  private http = inject(HttpClient);
  private apiUrl = '/api/audit-logs';

  getLogs(filters?: { entity?: string; entityId?: string }): Observable<{ data: AuditLog[] }> {
    let url = this.apiUrl;
    if (filters) {
      const params = new URLSearchParams();
      if (filters.entity) params.append('entity', filters.entity);
      if (filters.entityId) params.append('entityId', filters.entityId);
      url += `?${params.toString()}`;
    }
    return this.http.get<{ data: AuditLog[] }>(url);
  }
}

@Injectable({ providedIn: 'root' })
export class AuxiliaryService {
  private http = inject(HttpClient);

  getItems(type: 'levels' | 'categories' | 'sponsors' | 'locations'): Observable<{ data: AuxiliaryItem[] }> {
    return this.http.get<{ data: AuxiliaryItem[] }>(`/api/${type}`);
  }

  createItem(type: string, data: any): Observable<{ data: AuxiliaryItem }> {
    return this.http.post<{ data: AuxiliaryItem }>(`/api/${type}`, data);
  }

  updateItem(type: string, id: string, data: any): Observable<{ data: AuxiliaryItem }> {
    return this.http.put<{ data: AuxiliaryItem }>(`/api/${type}/${id}`, data);
  }

  deleteItem(type: string, id: string): Observable<any> {
    return this.http.delete(`/api/${type}/${id}`);
  }
}

@Injectable({ providedIn: 'root' })
export class LiveMatchService {
  private http = inject(HttpClient);
  private apiUrl = '/api/matches';

  getActiveLiveMatches(): Observable<{ data: LiveMatchSession[] }> {
    return this.http.get<{ data: LiveMatchSession[] }>(`${this.apiUrl}/live/active`);
  }

  getLiveSession(matchId: string): Observable<{ data: LiveMatchSession | null }> {
    return this.http.get<{ data: LiveMatchSession | null }>(`${this.apiUrl}/${matchId}/live`);
  }

  requestLive(matchId: string): Observable<{ data: LiveMatchSession }> {
    return this.http.post<{ data: LiveMatchSession }>(`${this.apiUrl}/${matchId}/live/request`, {});
  }

  acceptLive(matchId: string): Observable<{ data: LiveMatchSession }> {
    return this.http.post<{ data: LiveMatchSession }>(`${this.apiUrl}/${matchId}/live/accept`, {});
  }

  scorePoint(matchId: string, team: 1 | 2): Observable<{ data: LiveMatchSession }> {
    return this.http.post<{ data: LiveMatchSession }>(`${this.apiUrl}/${matchId}/live/point`, { team });
  }

  undoPoint(matchId: string): Observable<{ data: LiveMatchSession }> {
    return this.http.post<{ data: LiveMatchSession }>(`${this.apiUrl}/${matchId}/live/undo`, {});
  }

  signLive(matchId: string): Observable<{ data: LiveMatchSession }> {
    return this.http.post<{ data: LiveMatchSession }>(`${this.apiUrl}/${matchId}/live/sign`, {});
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
        // SSE automatically attempts reconnection; emit error or handle
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

