import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

// PrimeNG Components
import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { TranslatePipe } from '@ngx-translate/core';

type AdminTab = 'rankings' | 'teams' | 'matches' | 'incidents' | 'auxiliary' | 'audit';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonDirective,
    DialogModule,
    TagModule,
    BadgeModule,
    CardModule,
    SelectModule,
    InputTextModule,
    TooltipModule,
    TranslatePipe
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
  auxType = signal<'levels' | 'categories' | 'locations' | 'sponsors'>('levels');

  selectedRankingId = '';

  levelsList = signal<AuxiliaryItem[]>([]);
  categoriesList = signal<AuxiliaryItem[]>([]);
  locationsList = signal<AuxiliaryItem[]>([]);

  // Modals visibility
  showCreateRankingModal = false;
  newRankingName = '';
  newRankingDesc = '';
  newRankingStart = '2026-11-01';
  newRankingEnd = '2026-12-31';
  newRankingLocationId = '';
  newRankingLevelId = '';
  newRankingCategoryId = '';

  showEditRankingModal = false;
  editRankingId = '';
  editRankingName = '';
  editRankingDesc = '';
  editRankingStart = '';
  editRankingEnd = '';
  editRankingLocationId = '';
  editRankingLevelId = '';
  editRankingCategoryId = '';

  showCreateTeamModal = false;
  newTeamName = '';
  newTeamP1N = '';
  newTeamP1S = '';
  newTeamP2N = '';
  newTeamP2S = '';
  newTeamRN = '';
  newTeamRS = '';
  newTeamEmail1 = '';
  newTeamEmail2 = '';

  showEditTeamModal = false;
  editTeamId = '';
  editTeamName = '';
  editTeamP1N = '';
  editTeamP1S = '';
  editTeamP2N = '';
  editTeamP2S = '';
  editTeamRN = '';
  editTeamRS = '';
  editTeamEmail1 = '';
  editTeamEmail2 = '';

  showOverrideModal = false;
  activeOverrideMatch = signal<Match | null>(null);
  overrideSetsOne = 0;
  overrideSetsTwo = 0;
  overrideStatus = 'CONFIRMED';
  overrideReason = '';

  showResolveIncidentModal = false;
  activeResolveIncident = signal<Incident | null>(null);
  incResolveStatus = 'RESOLVED';
  incResolution = '';

  showCreateAuxModal = false;
  newAuxName = '';
  newAuxDesc = '';

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
    if (tab === 'matches' && this.selectedRankingId) {
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
        if (res.data.length > 0 && !this.selectedRankingId) {
          this.selectedRankingId = res.data[0].id;
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
    if (!this.selectedRankingId) return;
    this.matchService.getAll({ rankingId: this.selectedRankingId }).subscribe({
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

  setAuxType(type: 'levels' | 'categories' | 'locations' | 'sponsors'): void {
    this.auxType.set(type);
    this.loadAuxItems();
  }

  openIncidentsCount(): number {
    return this.incidents().filter(i => i.status === 'OPEN').length;
  }

  getTeamEmailsList(team: Team): string[] {
    if (!team.emails) return [];
    if (typeof team.emails[0] === 'string') return team.emails as string[];
    return (team.emails as any[]).map(e => e.email);
  }

  // Create & Edit Ranking
  openCreateRankingModal(): void {
    this.newRankingName = '';
    this.newRankingDesc = '';
    this.newRankingStart = '2026-11-01';
    this.newRankingEnd = '2026-12-31';
    this.newRankingLocationId = '';
    this.newRankingLevelId = '';
    this.newRankingCategoryId = '';
    this.showCreateRankingModal = true;
  }

  createRanking(): void {
    this.rankingService.create({
      name: this.newRankingName,
      description: this.newRankingDesc,
      startDate: this.newRankingStart,
      endDate: this.newRankingEnd,
      locationId: this.newRankingLocationId || undefined,
      levelId: this.newRankingLevelId || undefined,
      categoryId: this.newRankingCategoryId || undefined,
      active: true,
    }).subscribe({
      next: () => {
        this.showCreateRankingModal = false;
        this.messageService.add({ severity: 'success', summary: 'Ranking Creado', detail: 'El ranking ha sido creado correctamente.' });
        this.loadRankings();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al crear el ranking.' })
    });
  }

  openEditRankingModal(r: Ranking): void {
    this.editRankingId = r.id;
    this.editRankingName = r.name;
    this.editRankingDesc = r.description || '';
    this.editRankingStart = r.startDate || '';
    this.editRankingEnd = r.endDate || '';
    this.editRankingLocationId = r.locationId || '';
    this.editRankingLevelId = r.levelId || '';
    this.editRankingCategoryId = r.categoryId || '';
    this.showEditRankingModal = true;
  }

  saveEditRanking(): void {
    if (!this.editRankingId) return;
    this.rankingService.update(this.editRankingId, {
      name: this.editRankingName,
      description: this.editRankingDesc,
      startDate: this.editRankingStart,
      endDate: this.editRankingEnd,
      locationId: this.editRankingLocationId || null as any,
      levelId: this.editRankingLevelId || null as any,
      categoryId: this.editRankingCategoryId || null as any,
    }).subscribe({
      next: () => {
        this.showEditRankingModal = false;
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

  selectForMatches(r: Ranking): void {
    this.selectedRankingId = r.id;
    this.setTab('matches');
    this.loadMatchesForSelectedRanking();
  }

  // Create Team
  openCreateTeamModal(): void {
    this.newTeamName = '';
    this.newTeamP1N = '';
    this.newTeamP1S = '';
    this.newTeamP2N = '';
    this.newTeamP2S = '';
    this.newTeamRN = '';
    this.newTeamRS = '';
    this.newTeamEmail1 = '';
    this.newTeamEmail2 = '';
    this.showCreateTeamModal = true;
  }

  createTeam(): void {
    const emails = [this.newTeamEmail1];
    if (this.newTeamEmail2.trim()) emails.push(this.newTeamEmail2.trim());

    this.teamService.create({
      name: this.newTeamName,
      player1Name: this.newTeamP1N,
      player1Surname: this.newTeamP1S,
      player2Name: this.newTeamP2N,
      player2Surname: this.newTeamP2S,
      reserveName: this.newTeamRN.trim() || null,
      reserveSurname: this.newTeamRS.trim() || null,
      emails,
    }).subscribe({
      next: () => {
        this.showCreateTeamModal = false;
        this.messageService.add({ severity: 'success', summary: 'Equipo Registrado', detail: 'Email de bienvenida enviado con token de acceso.' });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al crear el equipo.' })
    });
  }

  openEditTeamModal(t: Team): void {
    this.editTeamId = t.id;
    this.editTeamName = t.name;
    this.editTeamP1N = t.player1Name;
    this.editTeamP1S = t.player1Surname;
    this.editTeamP2N = t.player2Name;
    this.editTeamP2S = t.player2Surname;
    this.editTeamRN = t.reserveName || '';
    this.editTeamRS = t.reserveSurname || '';
    const emails = this.getTeamEmailsList(t);
    this.editTeamEmail1 = emails[0] || '';
    this.editTeamEmail2 = emails[1] || '';
    this.showEditTeamModal = true;
  }

  saveEditTeam(): void {
    if (!this.editTeamId) return;
    const emails = [this.editTeamEmail1];
    if (this.editTeamEmail2.trim()) emails.push(this.editTeamEmail2.trim());

    this.teamService.update(this.editTeamId, {
      name: this.editTeamName,
      player1Name: this.editTeamP1N,
      player1Surname: this.editTeamP1S,
      player2Name: this.editTeamP2N,
      player2Surname: this.editTeamP2S,
      reserveName: this.editTeamRN.trim() || null,
      reserveSurname: this.editTeamRS.trim() || null,
      emails,
    }).subscribe({
      next: () => {
        this.showEditTeamModal = false;
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

  resendWelcome(t: Team): void {
    this.teamService.resendWelcome(t.id).subscribe({
      next: () => this.messageService.add({ severity: 'success', summary: 'Email Enviado', detail: `Email de acceso reenviado a ${t.name}.` }),
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al reenviar email.' })
    });
  }

  // Round-Robin Generator
  generateRoundRobin(): void {
    if (!this.selectedRankingId) return;
    const teamIds = this.teams().map(t => t.id);
    if (teamIds.length < 4) {
      this.messageService.add({ severity: 'warn', summary: 'Equipos Insuficientes', detail: 'Se necesitan al menos 4 equipos para generar partidos.' });
      return;
    }

    this.matchService.generateMatches(this.selectedRankingId, teamIds).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Partidos Generados', detail: res.data.message || 'Calendario round-robin generado con éxito.' });
        this.loadMatchesForSelectedRanking();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al generar partidos.' })
    });
  }

  // Admin Override Match
  openAdminOverrideModal(m: Match): void {
    this.activeOverrideMatch.set(m);
    this.overrideSetsOne = m.setsTeamOne ?? 0;
    this.overrideSetsTwo = m.setsTeamTwo ?? 0;
    this.overrideStatus = m.status === 'PENDING_RESULT' ? 'CONFIRMED' : m.status;
    this.overrideReason = '';
    this.showOverrideModal = true;
  }

  submitAdminOverride(): void {
    const m = this.activeOverrideMatch();
    if (!m) return;

    this.matchService.adminOverride(m.id, {
      setsTeamOne: this.overrideSetsOne,
      setsTeamTwo: this.overrideSetsTwo,
      status: this.overrideStatus,
      matchDate: m.matchDate || new Date().toISOString().split('T')[0],
      reason: this.overrideReason,
    }).subscribe({
      next: () => {
        this.showOverrideModal = false;
        this.activeOverrideMatch.set(null);
        this.messageService.add({ severity: 'success', summary: 'Partido Modificado', detail: 'Puntos y clasificación recalculados.' });
        this.loadMatchesForSelectedRanking();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al modificar el partido.' })
    });
  }

  // Resolve Incident
  openResolveIncidentModal(inc: Incident): void {
    this.activeResolveIncident.set(inc);
    this.incResolveStatus = 'RESOLVED';
    this.incResolution = '';
    this.showResolveIncidentModal = true;
  }

  submitResolveIncident(): void {
    const inc = this.activeResolveIncident();
    if (!inc) return;

    this.incidentService.resolve(inc.id, {
      status: this.incResolveStatus,
      resolution: this.incResolution,
    }).subscribe({
      next: () => {
        this.showResolveIncidentModal = false;
        this.activeResolveIncident.set(null);
        this.messageService.add({ severity: 'success', summary: 'Incidencia Resuelta', detail: 'La disputa ha sido cerrada.' });
        this.loadIncidents();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al resolver la incidencia.' })
    });
  }

  // Auxiliary
  openCreateAuxModal(): void {
    this.newAuxName = '';
    this.newAuxDesc = '';
    this.showCreateAuxModal = true;
  }

  createAuxItem(): void {
    this.auxService.createItem(this.auxType(), {
      name: this.newAuxName,
      description: this.newAuxDesc,
    }).subscribe({
      next: () => {
        this.showCreateAuxModal = false;
        this.messageService.add({ severity: 'success', summary: 'Registro Creado', detail: `Elemento añadido a ${this.auxType()}.` });
        this.loadAuxItems();
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.error || 'Error al crear elemento.' })
    });
  }

  deleteAuxItem(id: string): void {
    this.auxService.deleteItem(this.auxType(), id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'info', summary: 'Eliminado', detail: 'Elemento eliminado con éxito.' });
        this.loadAuxItems();
      }
    });
  }

  getTagSeverity(status: string): 'success' | 'warn' | 'danger' | 'info' | 'secondary' {
    switch (status) {
      case 'CONFIRMED': return 'success';
      case 'PENDING_CONFIRMATION': return 'warn';
      case 'DISPUTED': return 'danger';
      case 'PENDING_RESULT': return 'secondary';
      default: return 'info';
    }
  }

  formatLogData(data: any): string {
    if (!data) return '-';
    if (typeof data === 'string') return data;
    return JSON.stringify(data);
  }
}
