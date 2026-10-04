// projects/rpm-app/src/app/core/services/api.services.ts
import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
var RankingService = class _RankingService {
  http = inject(HttpClient);
  apiUrl = "/api/rankings";
  getAll() {
    return this.http.get(this.apiUrl);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  toggleActive(id, active) {
    return this.http.patch(`${this.apiUrl}/${id}/active`, { active });
  }
  static \u0275fac = function RankingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RankingService)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _RankingService, factory: _RankingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(RankingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var TeamService = class _TeamService {
  http = inject(HttpClient);
  apiUrl = "/api/teams";
  getAll() {
    return this.http.get(this.apiUrl);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  toggleActive(id, active) {
    return this.http.patch(`${this.apiUrl}/${id}/active`, { active });
  }
  resendWelcome(id) {
    return this.http.post(`${this.apiUrl}/${id}/resend-welcome`, {});
  }
  static \u0275fac = function TeamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamService)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _TeamService, factory: _TeamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(TeamService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var MatchService = class _MatchService {
  http = inject(HttpClient);
  apiUrl = "/api/matches";
  getAll(filters) {
    let url = this.apiUrl;
    if (filters) {
      const params = new URLSearchParams();
      if (filters.rankingId)
        params.append("rankingId", filters.rankingId);
      if (filters.teamId)
        params.append("teamId", filters.teamId);
      if (filters.status)
        params.append("status", filters.status);
      url += `?${params.toString()}`;
    }
    return this.http.get(url);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  submitResult(id, data) {
    return this.http.post(`${this.apiUrl}/${id}/result`, data);
  }
  confirmResult(id) {
    return this.http.post(`${this.apiUrl}/${id}/confirm`, {});
  }
  disputeResult(id, description) {
    return this.http.post(`${this.apiUrl}/${id}/dispute`, { description });
  }
  generateMatches(rankingId, teamIds) {
    return this.http.post(`${this.apiUrl}/ranking/${rankingId}/generate`, { teamIds });
  }
  adminOverride(id, data) {
    return this.http.put(`${this.apiUrl}/${id}/admin-override`, data);
  }
  static \u0275fac = function MatchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatchService)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _MatchService, factory: _MatchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MatchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var ClassificationService = class _ClassificationService {
  http = inject(HttpClient);
  apiUrl = "/api/classification";
  getOfficial(rankingId) {
    return this.http.get(`${this.apiUrl}/${rankingId}/official`);
  }
  getProvisional(rankingId) {
    return this.http.get(`${this.apiUrl}/${rankingId}/provisional`);
  }
  static \u0275fac = function ClassificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassificationService)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _ClassificationService, factory: _ClassificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ClassificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var IncidentService = class _IncidentService {
  http = inject(HttpClient);
  apiUrl = "/api/incidents";
  getAll(filters) {
    let url = this.apiUrl;
    if (filters) {
      const params = new URLSearchParams();
      if (filters.matchId)
        params.append("matchId", filters.matchId);
      if (filters.status)
        params.append("status", filters.status);
      url += `?${params.toString()}`;
    }
    return this.http.get(url);
  }
  resolve(id, data) {
    return this.http.patch(`${this.apiUrl}/${id}/resolve`, data);
  }
  static \u0275fac = function IncidentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncidentService)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _IncidentService, factory: _IncidentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(IncidentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var AuditService = class _AuditService {
  http = inject(HttpClient);
  apiUrl = "/api/audit-logs";
  getLogs(filters) {
    let url = this.apiUrl;
    if (filters) {
      const params = new URLSearchParams();
      if (filters.entity)
        params.append("entity", filters.entity);
      if (filters.entityId)
        params.append("entityId", filters.entityId);
      url += `?${params.toString()}`;
    }
    return this.http.get(url);
  }
  static \u0275fac = function AuditService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditService)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _AuditService, factory: _AuditService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AuditService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var AuxiliaryService = class _AuxiliaryService {
  http = inject(HttpClient);
  getItems(type) {
    return this.http.get(`/api/${type}`);
  }
  createItem(type, data) {
    return this.http.post(`/api/${type}`, data);
  }
  updateItem(type, id, data) {
    return this.http.put(`/api/${type}/${id}`, data);
  }
  deleteItem(type, id) {
    return this.http.delete(`/api/${type}/${id}`);
  }
  static \u0275fac = function AuxiliaryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuxiliaryService)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _AuxiliaryService, factory: _AuxiliaryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AuxiliaryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// projects/rpm-app/src/app/core/services/auth.service.ts
import { Injectable as Injectable2, signal, computed, inject as inject2 } from "@angular/core";
import { HttpClient as HttpClient2 } from "@angular/common/http";
import { Router } from "@angular/router";
import { tap } from "rxjs";
import * as i02 from "@angular/core";
var AuthService = class _AuthService {
  http = inject2(HttpClient2);
  router = inject2(Router);
  apiUrl = "/api/auth";
  currentUser = signal(
    this.getStoredUser(),
    ...ngDevMode ? [{ debugName: "currentUser" }] : (
      /* istanbul ignore next */
      []
    )
  );
  token = signal(
    localStorage.getItem("token"),
    ...ngDevMode ? [{ debugName: "token" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isAuthenticated = computed(
    () => !!this.token(),
    ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isAdmin = computed(
    () => this.currentUser()?.role === "ADMIN",
    ...ngDevMode ? [{ debugName: "isAdmin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isTeamUser = computed(
    () => this.currentUser()?.role === "TEAM_USER",
    ...ngDevMode ? [{ debugName: "isTeamUser" }] : (
      /* istanbul ignore next */
      []
    )
  );
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(tap((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      this.token.set(res.data.token);
      this.currentUser.set(res.data.user);
    }));
  }
  setupPassword(data) {
    return this.http.post(`${this.apiUrl}/setup-password`, data);
  }
  forgotPassword(email) {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }
  resetPassword(data) {
    return this.http.post(`${this.apiUrl}/reset-password`, data);
  }
  fetchProfile() {
    return this.http.get(`${this.apiUrl}/profile`).pipe(tap((res) => {
      this.currentUser.set(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    }));
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.token.set(null);
    this.currentUser.set(null);
    this.router.navigate(["/auth/login"]);
  }
  getStoredUser() {
    const raw = localStorage.getItem("user");
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(AuthService, [{
    type: Injectable2,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// projects/rpm-app/src/app/core/guards/auth.guard.ts
import { inject as inject3 } from "@angular/core";
import { Router as Router2 } from "@angular/router";
var authGuard = () => {
  const authService = inject3(AuthService);
  const router = inject3(Router2);
  if (authService.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/auth/login"]);
};
var adminGuard = () => {
  const authService = inject3(AuthService);
  const router = inject3(Router2);
  if (authService.isAuthenticated() && authService.isAdmin()) {
    return true;
  }
  return router.createUrlTree(["/auth/login"]);
};
var teamGuard = () => {
  const authService = inject3(AuthService);
  const router = inject3(Router2);
  if (authService.isAuthenticated() && (authService.isTeamUser() || authService.isAdmin())) {
    return true;
  }
  return router.createUrlTree(["/auth/login"]);
};

// projects/rpm-app/src/app/core/interceptors/auth.interceptor.ts
import { inject as inject4 } from "@angular/core";
import { Router as Router3 } from "@angular/router";
import { catchError, throwError } from "rxjs";
var authInterceptor = (req, next) => {
  const token = localStorage.getItem("token");
  const router = inject4(Router3);
  let clonedReq = req;
  if (token) {
    clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(clonedReq).pipe(
    catchError((error) => {
      if (error.status === 401 && !req.url.includes("/api/auth/login")) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.navigate(["/auth/login"]);
      }
      return throwError(() => error);
    })
  );
};

// projects/rpm-app/src/app/core/utils/date.utils.ts
import { DATE_PIPE_DEFAULT_OPTIONS } from "@angular/common";
var DEFAULT_DATE_FORMAT = "dd/MM/yyyy";
var provideDefaultDateFormat = (dateFormat = DEFAULT_DATE_FORMAT) => ({
  provide: DATE_PIPE_DEFAULT_OPTIONS,
  useValue: { dateFormat }
});
export {
  AuditService,
  AuthService,
  AuxiliaryService,
  ClassificationService,
  DEFAULT_DATE_FORMAT,
  IncidentService,
  MatchService,
  RankingService,
  TeamService,
  adminGuard,
  authGuard,
  authInterceptor,
  provideDefaultDateFormat,
  teamGuard
};
//# sourceMappingURL=_core.js.map
