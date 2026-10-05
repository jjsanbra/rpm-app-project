import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import {
  RankingService,
  TeamService,
  MatchService,
  IncidentService,
  AuditService,
  AuxiliaryService,
  UserService,
  AuthService,
  Ranking,
  Team,
  Match,
  Incident,
  AuditLog,
  AuxiliaryItem,
  User
} from '@core';

import { AdminHeaderComponent, AdminTab } from './components/admin-header/admin-header.component';
import { AdminRankingsComponent, CreateRankingPayload, UpdateRankingPayload } from './components/admin-rankings/admin-rankings.component';
import { AdminTeamsComponent, CreateTeamPayload, UpdateTeamPayload } from './components/admin-teams/admin-teams.component';
import { AdminMatchesComponent, AdminOverridePayload } from './components/admin-matches/admin-matches.component';
import { AdminIncidentsComponent, ResolveIncidentPayload } from './components/admin-incidents/admin-incidents.component';
import { AdminAuxiliaryComponent, AuxCatalogType } from './components/admin-auxiliary/admin-auxiliary.component';
import { AdminAuditComponent } from './components/admin-audit/admin-audit.component';
import { AdminOrganizersComponent, CreateOrganizerPayload } from './components/admin-organizers/admin-organizers.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AdminHeaderComponent,
    AdminRankingsComponent,
    AdminTeamsComponent,
    AdminMatchesComponent,
    AdminIncidentsComponent,
    AdminAuxiliaryComponent,
    AdminAuditComponent,
    AdminOrganizersComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {
  private rankingService = inject(RankingService);
  private teamService = inject(TeamService);
  private matchService = inject(MatchService);
  private incidentService = inject(IncidentService);
  private auditService = inject(AuditService);
  private auxService = inject(AuxiliaryService);
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private messageService = inject(MessageService);
  private translate = inject(TranslateService);

  isAdmin = this.authService.isAdmin;
  activeTab = signal<AdminTab>('rankings');

  rankings = signal<Ranking[]>([]);
  teams = signal<Team[]>([]);
  matches = signal<Match[]>([]);
  incidents = signal<Incident[]>([]);
  auditLogs = signal<AuditLog[]>([]);
  auxItems = signal<AuxiliaryItem[]>([]);
  organizers = signal<User[]>([]);
  auxType = signal<AuxCatalogType>('levels');

  selectedRankingId = signal<string>('');

  levelsList = signal<AuxiliaryItem[]>([]);
  categoriesList = signal<AuxiliaryItem[]>([]);
  locationsList = signal<AuxiliaryItem[]>([]);

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData(): void {
    this.loadRankings();
    this.loadTeams();
    this.loadIncidents();
    if (this.isAdmin()) {
      this.loadAuditLogs();
      this.loadOrganizers();
    }
    this.loadAuxItems();
    this.loadAllAuxCatalogs();
  }

  loadOrganizers(): void {
    if (!this.isAdmin()) return;
    this.userService.getOrganizers().subscribe({
      next: (res) => this.organizers.set(res.data),
      error: () => {}
    });
  }

  handleCreateOrganizer(payload: CreateOrganizerPayload): void {
    this.userService.createOrganizer(payload).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.ORGANIZER_CREATED_SUCCESS'),
          detail: this.translate.instant('ADMIN.ORGANIZER_CREATED_DETAIL')
        });
        this.loadOrganizers();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  handleDeleteOrganizer(user: User): void {
    if (!confirm(`¿Eliminar organizador ${user.email}?`)) return;
    this.userService.deleteOrganizer(user.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('ADMIN.ORGANIZER_DELETED_INFO'),
          detail: this.translate.instant('ADMIN.ORGANIZER_DELETED_DETAIL')
        });
        this.loadOrganizers();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  handleDeleteRanking(ranking: Ranking): void {
    if (!confirm(`¿Estás seguro de que deseas eliminar el ranking "${ranking.name}"?`)) return;
    this.rankingService.delete(ranking.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('ADMIN.RANKING_DELETED_INFO'),
          detail: this.translate.instant('ADMIN.RANKING_DELETED_DETAIL')
        });
        this.loadRankings();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  loadAllAuxCatalogs(): void {
    this.auxService.getItems('levels').subscribe({
      next: (res) => this.levelsList.set(res.data)
    });
    this.auxService.getItems('categories').subscribe({
      next: (res) => this.categoriesList.set(res.data)
    });
    this.auxService.getItems('locations').subscribe({
      next: (res) => this.locationsList.set(res.data)
    });
  }

  setTab(tab: AdminTab): void {
    this.activeTab.set(tab);
    if (tab === 'matches' && this.selectedRankingId()) {
      this.loadMatchesForSelectedRanking();
    }
    if (tab === 'audit') {
      this.loadAuditLogs();
    }
  }

  loadRankings(): void {
    this.rankingService.getAll().subscribe({
      next: (res) => {
        this.rankings.set(res.data);
        if (res.data.length > 0 && !this.selectedRankingId()) {
          this.selectedRankingId.set(res.data[0].id);
          this.loadMatchesForSelectedRanking();
        }
      }
    });
  }

  loadTeams(): void {
    this.teamService.getAll().subscribe({
      next: (res) => this.teams.set(res.data)
    });
  }

  loadMatchesForSelectedRanking(): void {
    const rankingId = this.selectedRankingId();
    if (!rankingId) return;
    this.matchService.getAll({ rankingId }).subscribe({
      next: (res) => this.matches.set(res.data)
    });
  }

  loadIncidents(): void {
    this.incidentService.getAll().subscribe({
      next: (res) => this.incidents.set(res.data)
    });
  }

  loadAuditLogs(): void {
    this.auditService.getLogs().subscribe({
      next: (res) => this.auditLogs.set(res.data)
    });
  }

  loadAuxItems(): void {
    this.auxService.getItems(this.auxType()).subscribe({
      next: (res) => {
        this.auxItems.set(res.data);
        this.loadAllAuxCatalogs();
      }
    });
  }

  setAuxType(type: AuxCatalogType): void {
    this.auxType.set(type);
    this.loadAuxItems();
  }

  openIncidentsCount(): number {
    return this.incidents().filter(i => i.status === 'OPEN').length;
  }

  // Ranking actions
  handleCreateRanking(payload: CreateRankingPayload): void {
    this.rankingService.create({
      name: payload.name,
      description: payload.description,
      startDate: payload.startDate,
      endDate: payload.endDate,
      locationId: payload.locationId,
      levelId: payload.levelId,
      categoryId: payload.categoryId,
      active: true,
    }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.RANKING_CREATED_SUCCESS'),
          detail: this.translate.instant('ADMIN.RANKING_CREATED_DETAIL')
        });
        this.loadRankings();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  handleUpdateRanking(payload: UpdateRankingPayload): void {
    this.rankingService.update(payload.id, {
      name: payload.name,
      description: payload.description,
      startDate: payload.startDate,
      endDate: payload.endDate,
      locationId: payload.locationId || null as any,
      levelId: payload.levelId || null as any,
      categoryId: payload.categoryId || null as any,
    }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.RANKING_UPDATED_SUCCESS'),
          detail: this.translate.instant('ADMIN.RANKING_UPDATED_DETAIL')
        });
        this.loadRankings();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  toggleRankingActive(r: Ranking): void {
    this.rankingService.toggleActive(r.id, !r.active).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('ADMIN.STATUS_UPDATED_INFO'),
          detail: !r.active
            ? this.translate.instant('ADMIN.RANKING_ACTIVATED')
            : this.translate.instant('ADMIN.RANKING_DEACTIVATED')
        });
        this.loadRankings();
      }
    });
  }

  selectRankingForMatches(r: Ranking): void {
    this.selectedRankingId.set(r.id);
    this.setTab('matches');
    this.loadMatchesForSelectedRanking();
  }

  // Team actions
  handleCreateTeam(payload: CreateTeamPayload): void {
    this.teamService.create({
      name: payload.name,
      player1Name: payload.player1Name,
      player1Surname: payload.player1Surname,
      player2Name: payload.player2Name,
      player2Surname: payload.player2Surname,
      reserveName: payload.reserveName,
      reserveSurname: payload.reserveSurname,
      emails: payload.emails,
    }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.TEAM_REGISTERED_SUCCESS'),
          detail: this.translate.instant('ADMIN.TEAM_REGISTERED_DETAIL')
        });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  handleUpdateTeam(payload: UpdateTeamPayload): void {
    this.teamService.update(payload.id, {
      name: payload.name,
      player1Name: payload.player1Name,
      player1Surname: payload.player1Surname,
      player2Name: payload.player2Name,
      player2Surname: payload.player2Surname,
      reserveName: payload.reserveName,
      reserveSurname: payload.reserveSurname,
      emails: payload.emails,
    }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.TEAM_UPDATED_SUCCESS'),
          detail: this.translate.instant('ADMIN.TEAM_UPDATED_DETAIL')
        });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  toggleTeamActive(t: Team): void {
    this.teamService.toggleActive(t.id, !t.active).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('ADMIN.STATUS_UPDATED_INFO'),
          detail: !t.active
            ? this.translate.instant('ADMIN.TEAM_ACTIVATED')
            : this.translate.instant('ADMIN.TEAM_DEACTIVATED')
        });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  resendTeamWelcome(t: Team): void {
    this.teamService.resendWelcome(t.id).subscribe({
      next: () => this.messageService.add({
        severity: 'success',
        summary: this.translate.instant('ADMIN.EMAIL_SENT_SUCCESS'),
        detail: `${t.name}: ${this.translate.instant('ADMIN.EMAIL_SENT_SUCCESS')}`
      }),
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  // Matches actions
  onRankingSelectChange(rankingId: string): void {
    this.selectedRankingId.set(rankingId);
    this.loadMatchesForSelectedRanking();
  }

  generateRoundRobin(): void {
    const rankingId = this.selectedRankingId();
    if (!rankingId) return;
    const teamIds = this.teams().map(t => t.id);
    if (teamIds.length < 4) {
      this.messageService.add({
        severity: 'warn',
        summary: this.translate.instant('ADMIN.INSUFFICIENT_TEAMS_WARN'),
        detail: this.translate.instant('ADMIN.INSUFFICIENT_TEAMS_DETAIL')
      });
      return;
    }

    this.matchService.generateMatches(rankingId, teamIds).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.MATCHES_GENERATED_SUCCESS'),
          detail: res.data.message || this.translate.instant('ADMIN.MATCHES_GENERATED_SUCCESS')
        });
        this.loadMatchesForSelectedRanking();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  handleAdminOverride(payload: AdminOverridePayload): void {
    this.matchService.adminOverride(payload.matchId, {
      set1TeamOne: payload.set1TeamOne,
      set1TeamTwo: payload.set1TeamTwo,
      set2TeamOne: payload.set2TeamOne,
      set2TeamTwo: payload.set2TeamTwo,
      set3TeamOne: payload.set3TeamOne,
      set3TeamTwo: payload.set3TeamTwo,
      setsTeamOne: payload.setsTeamOne,
      setsTeamTwo: payload.setsTeamTwo,
      status: payload.status,
      matchDate: payload.matchDate,
      reason: payload.reason,
    }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.MATCH_MODIFIED_SUCCESS'),
          detail: this.translate.instant('ADMIN.MATCH_MODIFIED_DETAIL')
        });
        this.loadMatchesForSelectedRanking();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  // Incidents actions
  handleResolveIncident(payload: ResolveIncidentPayload): void {
    this.incidentService.resolve(payload.incidentId, {
      status: payload.status,
      resolution: payload.resolution,
    }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.INCIDENT_RESOLVED_SUCCESS'),
          detail: this.translate.instant('ADMIN.INCIDENT_RESOLVED_DETAIL')
        });
        this.loadIncidents();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  // Auxiliary actions
  handleCreateAuxItem(payload: { name: string; description: string }): void {
    this.auxService.createItem(this.auxType(), payload).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.AUX_CREATED_SUCCESS'),
          detail: this.translate.instant('ADMIN.AUX_CREATED_SUCCESS')
        });
        this.loadAuxItems();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: err.error?.error || this.translate.instant('COMMON.ERROR')
      })
    });
  }

  handleDeleteAuxItem(id: string): void {
    this.auxService.deleteItem(this.auxType(), id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('ADMIN.AUX_DELETED_INFO'),
          detail: this.translate.instant('ADMIN.AUX_DELETED_DETAIL')
        });
        this.loadAuxItems();
      }
    });
  }
}
