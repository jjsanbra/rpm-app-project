import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiveMatchSession } from '../api/model';

@Injectable({ providedIn: 'root' })
export class LiveStreamService {
  private apiUrl = '/api/matches';

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
          console.error('Error parsing global active SSE matches', err);
        }
      };

      eventSource.onerror = (error) => {
        console.warn('SSE connection warning on global live matches', error);
      };

      return () => {
        eventSource.close();
      };
    });
  }
}
