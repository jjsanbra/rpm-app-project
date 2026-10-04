import { Component, input, output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { Match } from '@core';

import { ButtonDirective } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'rpm-team-matches',
  standalone: true,
  imports: [CommonModule, DatePipe, TranslatePipe, ButtonDirective, TagModule, BadgeModule],
  templateUrl: './team-matches.component.html',
  styleUrl: './team-matches.component.scss'
})
export class TeamMatchesComponent {
  matches = input<Match[]>([]);
  loading = input<boolean>(false);
  currentTeamId = input<string | null | undefined>();
  currentUserId = input<string | null | undefined>();

  submitResult = output<Match>();
  confirmResult = output<Match>();
  openDispute = output<Match>();

  isMyTeam(teamId: string): boolean {
    return this.currentTeamId() === teamId;
  }

  canIConfirm(m: Match): boolean {
    const teamId = this.currentTeamId();
    const userId = this.currentUserId();
    if (!teamId) return false;
    const isParticipant = m.teamOneId === teamId || m.teamTwoId === teamId;
    const isSubmitter = m.resultSubmittedBy === userId;
    return isParticipant && !isSubmitter;
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
