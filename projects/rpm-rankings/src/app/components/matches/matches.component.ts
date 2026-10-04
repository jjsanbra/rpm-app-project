import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { Match } from '@core';

@Component({
  selector: 'rpm-matches',
  standalone: true,
  imports: [CommonModule, ButtonDirective, TagModule, CardModule, BadgeModule, TranslatePipe],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {
  matches = input<Match[]>([]);
  matchFilter = signal<string>('ALL');

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
}
