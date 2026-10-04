import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService, MatchService, TeamService, Match, Team } from '@core';

// PrimeNG Components
import { DialogModule } from 'primeng/dialog';
import { ButtonDirective } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-team-portal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonDirective,
    TagModule,
    BadgeModule,
    CardModule,
    InputTextModule,
    TranslatePipe
  ],
  templateUrl: './team-portal.component.html',
  styleUrl: './team-portal.component.scss'
})
export class TeamPortalComponent implements OnInit {
  authService = inject(AuthService);
  private matchService = inject(MatchService);
  private teamService = inject(TeamService);
  private messageService = inject(MessageService);

  team = signal<Team | null>(null);
  matches = signal<Match[]>([]);
  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);

  // Submit modal state
  showSubmitModal = false;
  activeSubmitMatch = signal<Match | null>(null);
  formMatchDate = new Date().toISOString().split('T')[0];
  formSetsOne: number | null = null;
  formSetsTwo: number | null = null;

  // Dispute modal state
  showDisputeModal = false;
  activeDisputeMatch = signal<Match | null>(null);
  disputeDescription = '';

  ngOnInit(): void {
    this.loadTeamData();
  }

  loadTeamData(): void {
    const user = this.authService.currentUser();
    if (!user?.teamId) return;

    this.loading.set(true);
    this.teamService.getById(user.teamId).subscribe({
      next: (res) => {
        this.team.set(res.data);
      }
    });

    this.matchService.getAll({ teamId: user.teamId }).subscribe({
      next: (res) => {
        this.matches.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  isMyTeam(teamId: string): boolean {
    return this.authService.currentUser()?.teamId === teamId;
  }

  canIConfirm(m: Match): boolean {
    const user = this.authService.currentUser();
    if (!user?.teamId) return false;
    const isParticipant = m.teamOneId === user.teamId || m.teamTwoId === user.teamId;
    const isSubmitter = m.resultSubmittedBy === user.id;
    return isParticipant && !isSubmitter;
  }

  countConfirmed(): number {
    return this.matches().filter(m => m.status === 'CONFIRMED').length;
  }

  countPending(): number {
    return this.matches().filter(m => m.status === 'PENDING_RESULT' || m.status === 'PENDING_CONFIRMATION').length;
  }

  openSubmitModal(m: Match): void {
    this.activeSubmitMatch.set(m);
    this.formMatchDate = new Date().toISOString().split('T')[0];
    this.formSetsOne = null;
    this.formSetsTwo = null;
    this.showSubmitModal = true;
  }

  closeSubmitModal(): void {
    this.showSubmitModal = false;
    this.activeSubmitMatch.set(null);
  }

  setScore(s1: number, s2: number): void {
    this.formSetsOne = s1;
    this.formSetsTwo = s2;
  }

  previewPointsOne(): number {
    if (this.formSetsOne === null || this.formSetsTwo === null) return 0;
    if (this.formSetsOne === 2 && this.formSetsTwo === 0) return 5;
    if (this.formSetsOne === 2 && this.formSetsTwo === 1) return 4;
    if (this.formSetsOne === 1 && this.formSetsTwo === 2) return 2;
    if (this.formSetsOne === 0 && this.formSetsTwo === 2) return 1;
    return 0;
  }

  previewPointsTwo(): number {
    if (this.formSetsOne === null || this.formSetsTwo === null) return 0;
    if (this.formSetsTwo === 2 && this.formSetsOne === 0) return 5;
    if (this.formSetsTwo === 2 && this.formSetsOne === 1) return 4;
    if (this.formSetsTwo === 1 && this.formSetsOne === 2) return 2;
    if (this.formSetsTwo === 0 && this.formSetsOne === 2) return 1;
    return 0;
  }

  submitResult(): void {
    const m = this.activeSubmitMatch();
    if (!m || this.formSetsOne === null || this.formSetsTwo === null) return;

    this.submitting.set(true);
    this.matchService.submitResult(m.id, {
      matchDate: this.formMatchDate,
      setsTeamOne: this.formSetsOne,
      setsTeamTwo: this.formSetsTwo,
    }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.closeSubmitModal();
        this.messageService.add({
          severity: 'success',
          summary: 'Resultado Registrado',
          detail: 'Pendiente de confirmación del equipo rival.'
        });
        this.loadTeamData();
      },
      error: (err) => {
        this.submitting.set(false);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.error || 'Error al registrar el resultado.'
        });
      }
    });
  }

  confirmMatch(m: Match): void {
    this.matchService.confirmResult(m.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Resultado Confirmado',
          detail: 'La clasificación oficial ha sido actualizada.'
        });
        this.loadTeamData();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al Confirmar',
          detail: err.error?.error || 'No se pudo confirmar el partido.'
        });
      }
    });
  }

  openDisputeModal(m: Match): void {
    this.activeDisputeMatch.set(m);
    this.disputeDescription = '';
    this.showDisputeModal = true;
  }

  closeDisputeModal(): void {
    this.showDisputeModal = false;
    this.activeDisputeMatch.set(null);
  }

  submitDispute(): void {
    const m = this.activeDisputeMatch();
    if (!m || !this.disputeDescription.trim()) return;

    this.submitting.set(true);
    this.matchService.disputeResult(m.id, this.disputeDescription).subscribe({
      next: () => {
        this.submitting.set(false);
        this.closeDisputeModal();
        this.messageService.add({
          severity: 'warn',
          summary: 'Incidencia Comunicada',
          detail: 'La administración ha sido notificada para revisar el acta.'
        });
        this.loadTeamData();
      },
      error: (err) => {
        this.submitting.set(false);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.error || 'Error al comunicar la incidencia.'
        });
      }
    });
  }

  getTagSeverity(status: string): 'success' | 'warn' | 'danger' | 'info' | 'secondary' {
    switch (status) {
      case 'CONFIRMED': return 'success';
      case 'PENDING_CONFIRMATION': return 'warn';
      case 'DISPUTED': return 'danger';
      default: return 'secondary';
    }
  }

  formatStatus(status: string): string {
    switch (status) {
      case 'CONFIRMED': return 'STATUS.CONFIRMED';
      case 'PENDING_CONFIRMATION': return 'STATUS.PENDING_CONFIRMATION';
      case 'DISPUTED': return 'STATUS.DISPUTED';
      case 'PENDING_RESULT': return 'STATUS.PENDING_RESULT';
      default: return status;
    }
  }
}
