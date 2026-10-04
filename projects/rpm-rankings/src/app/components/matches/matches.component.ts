import { Component, input, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { Match } from '@core';

@Component({
  selector: 'rpm-matches',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonDirective, TagModule, CardModule, BadgeModule, TranslatePipe],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {
  private router = inject(Router);

  matches = input<Match[]>([]);
  matchFilter = signal<string>('ALL');

  goToLive(m: Match): void {
    this.router.navigate(['/live', m.id]);
  }

  setMatchFilter(filter: string): void {
    this.matchFilter.set(filter);
  }

  filteredMatches(): Match[] {
    const f = this.matchFilter();
    if (f === 'ALL') return this.matches();
    return this.matches().filter(m => m.status === f);
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
}
