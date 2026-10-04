import { Component, input, output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Ranking, Match } from '@core';

import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

export interface AdminOverridePayload {
  matchId: string;
  setsTeamOne: number;
  setsTeamTwo: number;
  status: string;
  matchDate: string;
  reason: string;
}

@Component({
  selector: 'rpm-admin-matches',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
    TableModule,
    ButtonDirective,
    DialogModule,
    TagModule,
    TooltipModule,
    TranslatePipe
  ],
  templateUrl: './admin-matches.component.html',
  styleUrl: './admin-matches.component.scss'
})
export class AdminMatchesComponent {
  rankings = input<Ranking[]>([]);
  selectedRankingId = input<string>('');
  matches = input<Match[]>([]);

  rankingChange = output<string>();
  generateMatches = output<void>();
  overrideMatch = output<AdminOverridePayload>();

  // Override Modal state
  showOverrideModal = false;
  activeOverrideMatch: Match | null = null;
  overrideSetsOne = 0;
  overrideSetsTwo = 0;
  overrideStatus = 'CONFIRMED';
  overrideReason = '';

  openOverrideModal(m: Match): void {
    this.activeOverrideMatch = m;
    this.overrideSetsOne = m.setsTeamOne ?? 0;
    this.overrideSetsTwo = m.setsTeamTwo ?? 0;
    this.overrideStatus = m.status === 'PENDING_RESULT' ? 'CONFIRMED' : m.status;
    this.overrideReason = '';
    this.showOverrideModal = true;
  }

  submitOverride(): void {
    if (!this.activeOverrideMatch) return;
    this.overrideMatch.emit({
      matchId: this.activeOverrideMatch.id,
      setsTeamOne: this.overrideSetsOne,
      setsTeamTwo: this.overrideSetsTwo,
      status: this.overrideStatus,
      matchDate: this.activeOverrideMatch.matchDate || new Date().toISOString().split('T')[0],
      reason: this.overrideReason
    });
    this.showOverrideModal = false;
    this.activeOverrideMatch = null;
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
