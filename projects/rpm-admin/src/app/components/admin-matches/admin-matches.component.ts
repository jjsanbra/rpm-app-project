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
import { SelectModule } from 'primeng/select';

export interface AdminOverridePayload {
  matchId: string;
  set1TeamOne?: number | null;
  set1TeamTwo?: number | null;
  set2TeamOne?: number | null;
  set2TeamTwo?: number | null;
  set3TeamOne?: number | null;
  set3TeamTwo?: number | null;
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
    SelectModule,
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

  statusOptions = [
    { labelKey: 'STATUS.CONFIRMED', value: 'CONFIRMED' },
    { labelKey: 'STATUS.PENDING_CONFIRMATION', value: 'PENDING_CONFIRMATION' },
    { labelKey: 'STATUS.PENDING_RESULT', value: 'PENDING_RESULT' },
    { labelKey: 'STATUS.DISPUTED', value: 'DISPUTED' },
    { labelKey: 'STATUS.CANCELLED', value: 'CANCELLED' }
  ];

  // Override Modal state
  showOverrideModal = false;
  activeOverrideMatch: Match | null = null;
  overrideMatchDate = '';
  overrideSet1TeamOne: number | null = null;
  overrideSet1TeamTwo: number | null = null;
  overrideSet2TeamOne: number | null = null;
  overrideSet2TeamTwo: number | null = null;
  overrideSet3TeamOne: number | null = null;
  overrideSet3TeamTwo: number | null = null;
  overrideStatus = 'CONFIRMED';
  overrideReason = '';

  openOverrideModal(m: Match): void {
    this.activeOverrideMatch = m;
    this.overrideMatchDate = m.matchDate || new Date().toISOString().split('T')[0];
    this.overrideSet1TeamOne = m.set1TeamOne ?? null;
    this.overrideSet1TeamTwo = m.set1TeamTwo ?? null;
    this.overrideSet2TeamOne = m.set2TeamOne ?? null;
    this.overrideSet2TeamTwo = m.set2TeamTwo ?? null;
    this.overrideSet3TeamOne = m.set3TeamOne ?? null;
    this.overrideSet3TeamTwo = m.set3TeamTwo ?? null;
    this.overrideStatus = m.status === 'PENDING_RESULT' ? 'CONFIRMED' : m.status;
    this.overrideReason = '';
    this.showOverrideModal = true;
  }

  validateSet(g1: number | null, g2: number | null, isThird = false): { valid: boolean; winner?: 1 | 2 } {
    if (g1 === null || g2 === null || g1 === undefined || g2 === undefined) {
      return { valid: false };
    }
    const a = Number(g1);
    const b = Number(g2);
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 || a === b) {
      return { valid: false };
    }
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    const winner: 1 | 2 = a > b ? 1 : 2;

    if (max === 6 && min <= 4) return { valid: true, winner };
    if (max === 7 && (min === 5 || min === 6)) return { valid: true, winner };
    if (isThird && max >= 10 && (max - min >= 2)) return { valid: true, winner };

    return { valid: false };
  }

  set1Result() {
    return this.validateSet(this.overrideSet1TeamOne, this.overrideSet1TeamTwo, false);
  }

  set2Result() {
    return this.validateSet(this.overrideSet2TeamOne, this.overrideSet2TeamTwo, false);
  }

  set3Result() {
    return this.validateSet(this.overrideSet3TeamOne, this.overrideSet3TeamTwo, true);
  }

  isThirdSetNeeded(): boolean {
    const s1 = this.set1Result();
    const s2 = this.set2Result();
    if (!s1.valid || !s2.valid) return false;
    return s1.winner !== s2.winner;
  }

  calculatedSetsOne(): number {
    let count = 0;
    if (this.set1Result().winner === 1) count++;
    if (this.set2Result().winner === 1) count++;
    if (this.isThirdSetNeeded() && this.set3Result().winner === 1) count++;
    return count;
  }

  calculatedSetsTwo(): number {
    let count = 0;
    if (this.set1Result().winner === 2) count++;
    if (this.set2Result().winner === 2) count++;
    if (this.isThirdSetNeeded() && this.set3Result().winner === 2) count++;
    return count;
  }

  calculatedGamesOne(): number {
    const g1 = Number(this.overrideSet1TeamOne) || 0;
    const g2 = Number(this.overrideSet2TeamOne) || 0;
    const g3 = this.isThirdSetNeeded() ? (Number(this.overrideSet3TeamOne) || 0) : 0;
    return g1 + g2 + g3;
  }

  calculatedGamesTwo(): number {
    const g1 = Number(this.overrideSet1TeamTwo) || 0;
    const g2 = Number(this.overrideSet2TeamTwo) || 0;
    const g3 = this.isThirdSetNeeded() ? (Number(this.overrideSet3TeamTwo) || 0) : 0;
    return g1 + g2 + g3;
  }

  previewPointsOne(): number {
    const s1 = this.calculatedSetsOne();
    const s2 = this.calculatedSetsTwo();
    if (s1 === 2 && s2 === 0) return 5;
    if (s1 === 2 && s2 === 1) return 4;
    if (s1 === 1 && s2 === 2) return 2;
    if (s1 === 0 && s2 === 2) return 1;
    return 0;
  }

  previewPointsTwo(): number {
    const s1 = this.calculatedSetsOne();
    const s2 = this.calculatedSetsTwo();
    if (s2 === 2 && s1 === 0) return 5;
    if (s2 === 2 && s1 === 1) return 4;
    if (s2 === 1 && s1 === 2) return 2;
    if (s2 === 0 && s1 === 2) return 1;
    return 0;
  }

  formatSetScores(m: Match): string | null {
    if (m.set1TeamOne === null || m.set1TeamOne === undefined || m.set1TeamTwo === null || m.set1TeamTwo === undefined) {
      return null;
    }
    const sets = [`${m.set1TeamOne}-${m.set1TeamTwo}`, `${m.set2TeamOne}-${m.set2TeamTwo}`];
    if (m.set3TeamOne !== null && m.set3TeamOne !== undefined && m.set3TeamTwo !== null && m.set3TeamTwo !== undefined) {
      sets.push(`${m.set3TeamOne}-${m.set3TeamTwo}`);
    }
    return sets.join(', ');
  }

  submitOverride(): void {
    if (!this.activeOverrideMatch) return;
    this.overrideMatch.emit({
      matchId: this.activeOverrideMatch.id,
      set1TeamOne: this.overrideSet1TeamOne !== null ? Number(this.overrideSet1TeamOne) : null,
      set1TeamTwo: this.overrideSet1TeamTwo !== null ? Number(this.overrideSet1TeamTwo) : null,
      set2TeamOne: this.overrideSet2TeamOne !== null ? Number(this.overrideSet2TeamOne) : null,
      set2TeamTwo: this.overrideSet2TeamTwo !== null ? Number(this.overrideSet2TeamTwo) : null,
      set3TeamOne: this.isThirdSetNeeded() && this.overrideSet3TeamOne !== null ? Number(this.overrideSet3TeamOne) : null,
      set3TeamTwo: this.isThirdSetNeeded() && this.overrideSet3TeamTwo !== null ? Number(this.overrideSet3TeamTwo) : null,
      setsTeamOne: this.calculatedSetsOne(),
      setsTeamTwo: this.calculatedSetsTwo(),
      status: this.overrideStatus,
      matchDate: this.overrideMatchDate,
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
