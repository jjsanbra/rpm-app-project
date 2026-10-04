import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = '/api/auth';

  currentUser = signal<User | null>(this.getStoredUser());
  token = signal<string | null>(localStorage.getItem('token'));

  isAuthenticated = computed(() => !!this.token());
  isAdmin = computed(() => this.currentUser()?.role === 'ADMIN');
  isTeamUser = computed(() => this.currentUser()?.role === 'TEAM_USER');

  login(credentials: { email: string; password: string }): Observable<{ data: { token: string; user: User } }> {
    return this.http.post<{ data: { token: string; user: User } }>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        this.token.set(res.data.token);
        this.currentUser.set(res.data.user);
      })
    );
  }

  setupPassword(data: { token: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/setup-password`, data);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  resetPassword(data: { token: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, data);
  }

  fetchProfile(): Observable<{ data: User }> {
    return this.http.get<{ data: User }>(`${this.apiUrl}/profile`).pipe(
      tap(res => {
        this.currentUser.set(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.token.set(null);
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }

  private getStoredUser(): User | null {
    const raw = localStorage.getItem('user');
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
}
