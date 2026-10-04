import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import {
  RankingService,
  TeamService,
  MatchService,
  IncidentService,
  AuditService,
  AuxiliaryService,
  Ranking,
  Team,
  Match,
  Incident,
  AuditLog,
  AuxiliaryItem
} from '@core';

import { AdminHeaderComponent, AdminTab } from './components/admin-header/admin-header.component';
import { AdminRankingsComponent, CreateRankingPayload, UpdateRankingPayload } from './components/admin-rankings/admin-rankings.component';
import { AdminTeamsComponent, CreateTeamPayload, UpdateTeamPayload } from './components/admin-teams/admin-teams.component';
import { AdminMatchesComponent, AdminOverridePayload } from './components/admin-matches/admin-matches.component';
import { AdminIncidentsComponent, ResolveIncidentPayload } from './components/admin-incidents/admin-incidents.component';
import { AdminAuxiliaryComponent, AuxCatalogType } from './components/admin-auxiliary/admin-auxiliary.component';
import { AdminAuditComponent } from './components/admin-audit/admin-audit.component';

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
    AdminAuditComponent
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
  private messageService = inject(MessageService);

  activeTab = signal<AdminTab>('rankings');

  rankings = signal<Ranking[]>([]);
  teams = signal<Team[]>([]);
  matches = signal<Match[]>([]);
  incidents = signal<Incident[]>([]);
  auditLogs = signal<AuditLog[]>([]);
  auxItems = signal<AuxiliaryItem[]>([]);
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
    this.loadAuditLogs();
    this.loadAuxItems();
    this.loadAllAuxCatalogs();
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
        this.messageService.add({ severity: 'success', summary: 'Ranking Creado', detail: 'El ranking ha sido creado correctamente.' });
        this.loadRankings();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al crear el ranking.' })
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
        this.messageService.add({ severity: 'success', summary: 'Ranking Actualizado', detail: 'Categoría, nivel, sede y datos del ranking actualizados con éxito.' });
        this.loadRankings();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al actualizar el ranking.' })
    });
  }

  toggleRankingActive(r: Ranking): void {
    this.rankingService.toggleActive(r.id, !r.active).subscribe({
      next: () => {
        this.messageService.add({ severity: 'info', summary: 'Estado Actualizado', detail: `Ranking ${!r.active ? 'activado' : 'desactivado'}.` });
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
        this.messageService.add({ severity: 'success', summary: 'Equipo Registrado', detail: 'Email de bienvenida enviado con token de acceso.' });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al crear el equipo.' })
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
        this.messageService.add({ severity: 'success', summary: 'Equipo Actualizado', detail: 'Datos del equipo y usuarios actualizados con éxito.' });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al actualizar el equipo.' })
    });
  }

  toggleTeamActive(t: Team): void {
    this.teamService.toggleActive(t.id, !t.active).subscribe({
      next: () => {
        this.messageService.add({ severity: 'info', summary: 'Estado Actualizado', detail: `Equipo ${!t.active ? 'activado' : 'desactivado'}.` });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al cambiar estado del equipo.' })
    });
  }

  resendTeamWelcome(t: Team): void {
    this.teamService.resendWelcome(t.id).subscribe({
      next: () => this.messageService.add({ severity: 'success', summary: 'Email Enviado', detail: `Email de acceso reenviado a ${t.name}.` }),
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al reenviar email.' })
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
      this.messageService.add({ severity: 'warn', summary: 'Equipos Insuficientes', detail: 'Se necesitan al menos 4 equipos para generar partidos.' });
      return;
    }

    this.matchService.generateMatches(rankingId, teamIds).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Partidos Generados', detail: res.data.message || 'Calendario round-robin generado con éxito.' });
        this.loadMatchesForSelectedRanking();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al generar partidos.' })
    });
  }

  handleAdminOverride(payload: AdminOverridePayload): void {
    this.matchService.adminOverride(payload.matchId, {
      setsTeamOne: payload.setsTeamOne,
      setsTeamTwo: payload.setsTeamTwo,
      status: payload.status,
      matchDate: payload.matchDate,
      reason: payload.reason,
    }).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Partido Modificado', detail: 'Puntos y clasificación recalculados.' });
        this.loadMatchesForSelectedRanking();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al modificar el partido.' })
    });
  }

  // Incidents actions
  handleResolveIncident(payload: ResolveIncidentPayload): void {
    this.incidentService.resolve(payload.incidentId, {
      status: payload.status,
      resolution: payload.resolution,
    }).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Incidencia Resuelta', detail: 'La disputa ha sido cerrada.' });
        this.loadIncidents();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al resolver la incidencia.' })
    });
  }

  // Auxiliary actions
  handleCreateAuxItem(payload: { name: string; description: string }): void {
    this.auxService.createItem(this.auxType(), payload).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Registro Creado', detail: `Elemento añadido a ${this.auxType()}.` });
        this.loadAuxItems();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al crear elemento.' })
    });
  }

  handleDeleteAuxItem(id: string): void {
    this.auxService.deleteItem(this.auxType(), id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'info', summary: 'Eliminado', detail: 'Elemento eliminado con éxito.' });
        this.loadAuxItems();
      }
    });
  }
}
