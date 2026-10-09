import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, MatchesService, TeamsService, Match, Team, extractErrorMessage } from '@core';
import { MessageService, ConfirmationService } from 'primeng/api';
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
  private matchesService = inject(MatchesService);
  private teamsService = inject(TeamsService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
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
    this.teamsService.getApiTeamsId<{ data: Team }>(user.teamId).subscribe({
      next: (res) => {
        this.team.set(res.data);
      }
    });

    this.matchesService.getApiMatches<{ data: Match[] }>({ teamId: user.teamId }).subscribe({
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
    this.matchesService.postApiMatchesIdResult(data.matchId, {
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
    const s1 = (m.set1TeamOne !== undefined && m.set1TeamOne !== null) ? `${m.set1TeamOne}-${m.set1TeamTwo}` : '';
    const s2 = (m.set2TeamOne !== undefined && m.set2TeamOne !== null) ? `${m.set2TeamOne}-${m.set2TeamTwo}` : '';
    const s3 = (m.set3TeamOne !== undefined && m.set3TeamOne !== null) ? `${m.set3TeamOne}-${m.set3TeamTwo}` : '';
    const score = [s1, s2, s3].filter(Boolean).join(', ');

    this.confirmationService.confirm({
      header: this.translate.instant('TEAM_PORTAL.CONFIRM_RESULT_MODAL_TITLE'),
      message: this.translate.instant('TEAM_PORTAL.CONFIRM_RESULT_MODAL_MSG', { score }),
      icon: 'pi pi-check-circle text-primary',
      acceptButtonStyleClass: 'p-button-primary p-button-sm',
      rejectButtonStyleClass: 'p-button-secondary p-button-outlined p-button-sm',
      acceptLabel: this.translate.instant('TEAM_PORTAL.CONFIRM_BTN'),
      rejectLabel: this.translate.instant('COMMON.CANCEL'),
      accept: () => {
        this.matchesService.postApiMatchesIdConfirm(m.id).subscribe({
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
    this.matchesService.postApiMatchesIdDispute(data.matchId, { description: data.description }).subscribe({
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
