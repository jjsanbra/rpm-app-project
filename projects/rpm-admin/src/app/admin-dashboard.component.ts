import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonDirective } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import {
  RankingsService,
  TeamsService,
  MatchesService,
  IncidentsService,
  AuditApiService,
  UsersService,
  LevelsService,
  CategoriesService,
  LocationsService,
  SponsorsService,
  RankingTeamsService,
  AuthService,
  Ranking,
  Team,
  Match,
  Incident,
  AuditLog,
  AuxiliaryItem,
  User,
  extractErrorMessage
} from '@core';

import { AdminHeaderComponent, AdminTab } from './components/admin-header/admin-header.component';
import { AdminRankingsComponent, CreateRankingPayload, UpdateRankingPayload } from './components/admin-rankings/admin-rankings.component';
import { AdminTeamsComponent, CreateTeamPayload, UpdateTeamPayload } from './components/admin-teams/admin-teams.component';
import { AdminMatchesComponent, AdminOverridePayload } from './components/admin-matches/admin-matches.component';
import { AdminIncidentsComponent, ResolveIncidentPayload } from './components/admin-incidents/admin-incidents.component';
import { AdminAuxiliaryComponent, AuxCatalogType } from './components/admin-auxiliary/admin-auxiliary.component';
import { AdminAuditComponent } from './components/admin-audit/admin-audit.component';
import { AdminOrganizersComponent, CreateOrganizerPayload, UpdateOrganizerPayload } from './components/admin-organizers/admin-organizers.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonDirective,
    SelectModule,
    TagModule,
    TooltipModule,
    TranslatePipe,
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
  private rankingsService = inject(RankingsService);
  private teamsService = inject(TeamsService);
  private matchesService = inject(MatchesService);
  private incidentsService = inject(IncidentsService);
  private auditApiService = inject(AuditApiService);
  private usersService = inject(UsersService);
  private levelsService = inject(LevelsService);
  private categoriesService = inject(CategoriesService);
  private locationsService = inject(LocationsService);
  private sponsorsService = inject(SponsorsService);
  private rankingTeamsService = inject(RankingTeamsService);
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

  // Generar Calendario Modal State
  showGenerateModal = signal<boolean>(false);
  generateRankingName = signal<string>('');
  generateEnrolledTeams = signal<Team[]>([]);
  generateRounds = signal<number>(1);

  roundsOptions = [
    { labelKey: 'ADMIN.ROUNDS_1_LABEL', value: 1 },
    { labelKey: 'ADMIN.ROUNDS_2_LABEL', value: 2 },
    { labelKey: 'ADMIN.ROUNDS_3_LABEL', value: 3 },
    { labelKey: 'ADMIN.ROUNDS_4_LABEL', value: 4 }
  ];

  levelsList = signal<AuxiliaryItem[]>([]);
  categoriesList = signal<AuxiliaryItem[]>([]);
  locationsList = signal<AuxiliaryItem[]>([]);

  // Manage Ranking Teams Modal State
  showManageTeamsModal = signal<boolean>(false);
  manageTeamsRanking = signal<Ranking | null>(null);
  rankingEnrolledTeams = signal<Team[]>([]);
  selectedTeamToEnroll = signal<string>('');
  loadingRankingTeams = signal<boolean>(false);

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
    this.usersService.getApiUsersOrganizers<{ data: User[] }>().subscribe({
      next: (res) => this.organizers.set(res.data),
      error: () => {}
    });
  }

  handleCreateOrganizer(payload: CreateOrganizerPayload): void {
    this.usersService.postApiUsersOrganizers<{ data: User }>({
      email: payload.email,
      password: payload.password || '',
      firstName: payload.firstName,
      lastName: payload.lastName,
      phone: payload.phone
    }).subscribe({
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  handleUpdateOrganizer(payload: UpdateOrganizerPayload): void {
    this.usersService.putApiUsersOrganizersId<{ data: User }>(payload.id, {
      email: payload.email,
      password: payload.password,
      firstName: payload.firstName,
      lastName: payload.lastName,
      phone: payload.phone,
      active: payload.active
    }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.ORGANIZER_UPDATED_SUCCESS'),
          detail: this.translate.instant('ADMIN.ORGANIZER_UPDATED_DETAIL')
        });
        this.loadOrganizers();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  handleDeleteOrganizer(user: User): void {
    if (!confirm(`¿Eliminar organizador ${user.email}?`)) return;
    this.usersService.deleteApiUsersOrganizersId(user.id).subscribe({
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  handleDeleteRanking(ranking: Ranking): void {
    if (!confirm(`¿Estás seguro de que deseas eliminar el ranking "${ranking.name}"?`)) return;
    this.rankingsService.deleteApiRankingsId(ranking.id).subscribe({
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  loadAllAuxCatalogs(): void {
    this.levelsService.getApiLevels<{ data: AuxiliaryItem[] }>().subscribe({
      next: (res) => this.levelsList.set(res.data)
    });
    this.categoriesService.getApiCategories<{ data: AuxiliaryItem[] }>().subscribe({
      next: (res) => this.categoriesList.set(res.data)
    });
    this.locationsService.getApiLocations<{ data: AuxiliaryItem[] }>().subscribe({
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
    this.rankingsService.getApiRankings<{ data: Ranking[] }>().subscribe({
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
    this.teamsService.getApiTeams<{ data: Team[] }>().subscribe({
      next: (res) => this.teams.set(res.data)
    });
  }

  loadMatchesForSelectedRanking(): void {
    const rankingId = this.selectedRankingId();
    if (!rankingId) return;
    this.matchesService.getApiMatches<{ data: Match[] }>({ rankingId }).subscribe({
      next: (res) => this.matches.set(res.data)
    });
  }

  loadIncidents(): void {
    this.incidentsService.getApiIncidents<{ data: Incident[] }>().subscribe({
      next: (res) => this.incidents.set(res.data)
    });
  }

  loadAuditLogs(): void {
    this.auditApiService.getApiAuditLogs<{ data: AuditLog[] }>().subscribe({
      next: (res) => this.auditLogs.set(res.data)
    });
  }

  loadAuxItems(): void {
    const type = this.auxType();
    let obs$;
    switch (type) {
      case 'levels': obs$ = this.levelsService.getApiLevels<{ data: AuxiliaryItem[] }>(); break;
      case 'categories': obs$ = this.categoriesService.getApiCategories<{ data: AuxiliaryItem[] }>(); break;
      case 'locations': obs$ = this.locationsService.getApiLocations<{ data: AuxiliaryItem[] }>(); break;
      case 'sponsors': obs$ = this.sponsorsService.getApiSponsors<{ data: AuxiliaryItem[] }>(); break;
    }
    obs$?.subscribe({
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
    this.rankingsService.postApiRankings<{ data: Ranking }>({
      name: payload.name,
      description: payload.description,
      startDate: payload.startDate,
      endDate: payload.endDate,
      locationId: payload.locationId,
      levelId: payload.levelId,
      categoryId: payload.categoryId,
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  handleUpdateRanking(payload: UpdateRankingPayload): void {
    this.rankingsService.putApiRankingsId<{ data: Ranking }>(payload.id, {
      name: payload.name,
      description: payload.description,
      startDate: payload.startDate,
      endDate: payload.endDate,
      locationId: payload.locationId || undefined,
      levelId: payload.levelId || undefined,
      categoryId: payload.categoryId || undefined,
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  toggleRankingActive(r: Ranking): void {
    this.rankingsService.patchApiRankingsIdActive<{ data: Ranking }>(r.id, { active: !r.active }).subscribe({
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

  // Manage Ranking Teams
  openManageTeams(r: Ranking): void {
    this.manageTeamsRanking.set(r);
    this.selectedTeamToEnroll.set('');
    this.loadingRankingTeams.set(true);
    this.showManageTeamsModal.set(true);
    this.loadRankingTeams(r.id);
  }

  loadRankingTeams(rankingId: string): void {
    this.rankingTeamsService.getApiRankingTeamRegistrationsRankingIdTeams<{ data: Team[] }>(rankingId).subscribe({
      next: (res) => {
        this.rankingEnrolledTeams.set(res.data || []);
        this.loadingRankingTeams.set(false);
      },
      error: () => {
        this.loadingRankingTeams.set(false);
      }
    });
  }

  getAvailableTeamsToEnroll(): Team[] {
    const enrolledIds = new Set(this.rankingEnrolledTeams().map(t => t.id));
    return this.teams().filter(t => !enrolledIds.has(t.id));
  }

  handleEnrollTeam(): void {
    const ranking = this.manageTeamsRanking();
    const teamId = this.selectedTeamToEnroll();
    if (!ranking || !teamId) return;

    this.rankingTeamsService.postApiRankingTeamRegistrationsRankingIdTeams<{ data: any }>(ranking.id, { teamId }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.TEAM_ENROLLED_SUCCESS'),
          detail: this.translate.instant('ADMIN.TEAM_ENROLLED_DETAIL')
        });
        this.selectedTeamToEnroll.set('');
        this.loadRankingTeams(ranking.id);
        this.loadRankings();
        if (this.selectedRankingId() === ranking.id) {
          this.loadMatchesForSelectedRanking();
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
        });
      }
    });
  }

  handleUnenrollTeam(team: Team): void {
    const ranking = this.manageTeamsRanking();
    if (!ranking) return;

    this.rankingTeamsService.deleteApiRankingTeamRegistrationsRankingIdTeamsTeamId(ranking.id, team.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('ADMIN.TEAM_UNENROLLED_SUCCESS'),
          detail: this.translate.instant('ADMIN.TEAM_UNENROLLED_DETAIL')
        });
        this.loadRankingTeams(ranking.id);
        this.loadRankings();
        if (this.selectedRankingId() === ranking.id) {
          this.loadMatchesForSelectedRanking();
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
        });
      }
    });
  }

  // Team actions
  handleCreateTeam(payload: CreateTeamPayload): void {
    this.teamsService.postApiTeams<{ data: Team }>({
      name: payload.name,
      player1Name: payload.player1Name,
      player1Surname: payload.player1Surname,
      player2Name: payload.player2Name,
      player2Surname: payload.player2Surname,
      reserveName: payload.reserveName || undefined,
      reserveSurname: payload.reserveSurname || undefined,
      phone: payload.phone || undefined,
      phone2: payload.phone2 || undefined,
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  handleUpdateTeam(payload: UpdateTeamPayload): void {
    this.teamsService.putApiTeamsId<{ data: Team }>(payload.id, {
      name: payload.name,
      player1Name: payload.player1Name,
      player1Surname: payload.player1Surname,
      player2Name: payload.player2Name,
      player2Surname: payload.player2Surname,
      reserveName: payload.reserveName || undefined,
      reserveSurname: payload.reserveSurname || undefined,
      phone: payload.phone || undefined,
      phone2: payload.phone2 || undefined,
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  toggleTeamActive(t: Team): void {
    this.teamsService.patchApiTeamsIdActive<{ data: Team }>(t.id, { active: !t.active }).subscribe({
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  resendTeamWelcome(t: Team): void {
    this.teamsService.postApiTeamsIdResendWelcome(t.id).subscribe({
      next: () => this.messageService.add({
        severity: 'success',
        summary: this.translate.instant('ADMIN.EMAIL_SENT_SUCCESS'),
        detail: `${t.name}: ${this.translate.instant('ADMIN.EMAIL_SENT_SUCCESS')}`
      }),
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
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

    const ranking = this.rankings().find(r => r.id === rankingId);
    this.generateRankingName.set(ranking ? ranking.name : '');

    this.rankingTeamsService.getApiRankingTeamRegistrationsRankingIdTeams<{ data: Team[] }>(rankingId).subscribe({
      next: (res) => {
        const enrolled = res.data || [];
        if (enrolled.length < 4) {
          this.messageService.add({
            severity: 'warn',
            summary: this.translate.instant('ADMIN.INSUFFICIENT_TEAMS_WARN'),
            detail: this.translate.instant('ADMIN.INSUFFICIENT_ENROLLED_TEAMS_DETAIL')
          });
          return;
        }

        // Si ya hay partidos generados, comparar si los equipos participantes son exactamente los mismos
        if (this.matches().length > 0) {
          const matchTeamIds = new Set(this.matches().flatMap(m => [m.teamOneId, m.teamTwoId]));
          const isSameTeams = matchTeamIds.size === enrolled.length && enrolled.every(t => matchTeamIds.has(t.id));

          if (isSameTeams) {
            this.messageService.add({
              severity: 'warn',
              summary: this.translate.instant('ADMIN.CALENDAR_ALREADY_GENERATED_WARN'),
              detail: this.translate.instant('ADMIN.CALENDAR_ALREADY_GENERATED_DETAIL')
            });
            return;
          }
        }

        this.generateEnrolledTeams.set(enrolled);
        this.generateRounds.set(1);
        this.showGenerateModal.set(true);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
        });
      }
    });
  }

  getExpectedMatchesCount(): number {
    const n = this.generateEnrolledTeams().length;
    const r = this.generateRounds() || 1;
    return Math.floor((n * (n - 1)) / 2) * r;
  }

  confirmGenerateMatches(): void {
    const rankingId = this.selectedRankingId();
    if (!rankingId) return;

    const rounds = this.generateRounds();

    this.rankingTeamsService.postApiRankingTeamRegistrationsRankingIdGenerateMatches<{ data: { message: string; matchesCreated: number } }>(rankingId, { rounds }).subscribe({
      next: (res) => {
        this.showGenerateModal.set(false);
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.MATCHES_GENERATED_SUCCESS'),
          detail: res.data?.message || this.translate.instant('ADMIN.MATCHES_GENERATED_SUCCESS')
        });
        this.loadMatchesForSelectedRanking();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  handleAdminOverride(payload: AdminOverridePayload): void {
    this.matchesService.putApiMatchesIdAdminOverride<{ data: Match }>(payload.matchId, {
      set1TeamOne: payload.set1TeamOne ?? undefined,
      set1TeamTwo: payload.set1TeamTwo ?? undefined,
      set2TeamOne: payload.set2TeamOne ?? undefined,
      set2TeamTwo: payload.set2TeamTwo ?? undefined,
      set3TeamOne: payload.set3TeamOne,
      set3TeamTwo: payload.set3TeamTwo,
      setsTeamOne: payload.setsTeamOne ?? undefined,
      setsTeamTwo: payload.setsTeamTwo ?? undefined,
      status: payload.status as any,
      matchDate: payload.matchDate ?? undefined,
      reason: payload.reason ?? undefined,
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  // Incidents actions
  handleResolveIncident(payload: ResolveIncidentPayload): void {
    this.incidentsService.postApiIncidentsIdResolve<{ data: Incident }>(payload.incidentId, {
      status: payload.status as any,
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  // Auxiliary actions
  handleCreateAuxItem(payload: any): void {
    const type = this.auxType();
    let obs$;
    switch (type) {
      case 'levels': obs$ = this.levelsService.postApiLevels<{ data: AuxiliaryItem }>(payload); break;
      case 'categories': obs$ = this.categoriesService.postApiCategories<{ data: AuxiliaryItem }>(payload); break;
      case 'locations': obs$ = this.locationsService.postApiLocations<{ data: AuxiliaryItem }>(payload); break;
      case 'sponsors': obs$ = this.sponsorsService.postApiSponsors<{ data: AuxiliaryItem }>(payload); break;
    }
    obs$?.subscribe({
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
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  handleUpdateAuxItem(payload: { id: string; data: any }): void {
    const type = this.auxType();
    let obs$;
    switch (type) {
      case 'levels': obs$ = this.levelsService.putApiLevelsId<{ data: AuxiliaryItem }>(payload.id, payload.data); break;
      case 'categories': obs$ = this.categoriesService.putApiCategoriesId<{ data: AuxiliaryItem }>(payload.id, payload.data); break;
      case 'locations': obs$ = this.locationsService.putApiLocationsId<{ data: AuxiliaryItem }>(payload.id, payload.data); break;
      case 'sponsors': obs$ = this.sponsorsService.putApiSponsorsId<{ data: AuxiliaryItem }>(payload.id, payload.data); break;
    }
    obs$?.subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('ADMIN.AUX_UPDATED_SUCCESS'),
          detail: this.translate.instant('ADMIN.AUX_UPDATED_DETAIL')
        });
        this.loadAuxItems();
      },
      error: (err) => this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
      })
    });
  }

  handleDeleteAuxItem(id: string): void {
    const type = this.auxType();
    let obs$;
    switch (type) {
      case 'levels': obs$ = this.levelsService.deleteApiLevelsId(id); break;
      case 'categories': obs$ = this.categoriesService.deleteApiCategoriesId(id); break;
      case 'locations': obs$ = this.locationsService.deleteApiLocationsId(id); break;
      case 'sponsors': obs$ = this.sponsorsService.deleteApiSponsorsId(id); break;
    }
    obs$?.subscribe({
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
