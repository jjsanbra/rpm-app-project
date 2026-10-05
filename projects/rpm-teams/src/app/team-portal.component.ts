import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, MatchService, TeamService, Match, Team, extractErrorMessage } from '@core';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

import { TeamHeaderComponent } from './components/team-header/team-header.component';
import { TeamMatchesComponent } from './components/team-matches/team-matches.component';
import { SubmitResultModalComponent, SubmitResultData } from './components/submit-result-modal/submit-result-modal.component';
import { DisputeModalComponent, DisputeData } from './components/dispute-modal/dispute-modal.component';

@Component({
  selector: 'app-team-portal',
  standalone: true,
  imports: [
    CommonModule,
    TeamHeaderComponent,
    TeamMatchesComponent,
    SubmitResultModalComponent,
    DisputeModalComponent
  ],
  templateUrl: './team-portal.component.html',
  styleUrl: './team-portal.component.scss'
})
export class TeamPortalComponent implements OnInit {
  authService = inject(AuthService);
  private matchService = inject(MatchService);
  private teamService = inject(TeamService);
  private messageService = inject(MessageService);
  private translate = inject(TranslateService);

  team = signal<Team | null>(null);
  matches = signal<Match[]>([]);
  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);

  // Submit modal state
  showSubmitModal = signal<boolean>(false);
  activeSubmitMatch = signal<Match | null>(null);

  // Dispute modal state
  showDisputeModal = signal<boolean>(false);
  activeDisputeMatch = signal<Match | null>(null);

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

  countConfirmed(): number {
    return this.matches().filter(m => m.status === 'CONFIRMED').length;
  }

  countPending(): number {
    return this.matches().filter(m => m.status === 'PENDING_RESULT' || m.status === 'PENDING_CONFIRMATION').length;
  }

  openSubmitModal(m: Match): void {
    this.activeSubmitMatch.set(m);
    this.showSubmitModal.set(true);
  }

  closeSubmitModal(): void {
    this.showSubmitModal.set(false);
    this.activeSubmitMatch.set(null);
  }

  handleSubmitResult(data: SubmitResultData): void {
    this.submitting.set(true);
    this.matchService.submitResult(data.matchId, {
      matchDate: data.matchDate,
      set1TeamOne: data.set1TeamOne,
      set1TeamTwo: data.set1TeamTwo,
      set2TeamOne: data.set2TeamOne,
      set2TeamTwo: data.set2TeamTwo,
      set3TeamOne: data.set3TeamOne,
      set3TeamTwo: data.set3TeamTwo,
      setsTeamOne: data.setsTeamOne,
      setsTeamTwo: data.setsTeamTwo,
    }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.closeSubmitModal();
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('TEAM_PORTAL.RESULT_SUBMITTED_SUCCESS'),
          detail: this.translate.instant('TEAM_PORTAL.RESULT_SUBMITTED_DETAIL')
        });
        this.loadTeamData();
      },
      error: (err) => {
        this.submitting.set(false);
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
        });
      }
    });
  }

  confirmMatch(m: Match): void {
    this.matchService.confirmResult(m.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('TEAM_PORTAL.RESULT_CONFIRMED_SUCCESS'),
          detail: this.translate.instant('TEAM_PORTAL.RESULT_CONFIRMED_DETAIL')
        });
        this.loadTeamData();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('TEAM_PORTAL.ERROR_CONFIRM_TITLE'),
          detail: extractErrorMessage(err, this.translate.instant('TEAM_PORTAL.ERROR_CONFIRM_DETAIL'))
        });
      }
    });
  }

  openDisputeModal(m: Match): void {
    this.activeDisputeMatch.set(m);
    this.showDisputeModal.set(true);
  }

  closeDisputeModal(): void {
    this.showDisputeModal.set(false);
    this.activeDisputeMatch.set(null);
  }

  handleSubmitDispute(data: DisputeData): void {
    this.submitting.set(true);
    this.matchService.disputeResult(data.matchId, data.description).subscribe({
      next: () => {
        this.submitting.set(false);
        this.closeDisputeModal();
        this.messageService.add({
          severity: 'warn',
          summary: this.translate.instant('TEAM_PORTAL.INCIDENT_REPORTED_WARN'),
          detail: this.translate.instant('TEAM_PORTAL.INCIDENT_REPORTED_DETAIL')
        });
        this.loadTeamData();
      },
      error: (err) => {
        this.submitting.set(false);
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, this.translate.instant('COMMON.ERROR'))
        });
      }
    });
  }
}
