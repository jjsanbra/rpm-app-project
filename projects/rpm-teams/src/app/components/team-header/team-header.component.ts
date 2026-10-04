import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { Team } from '@core';

@Component({
  selector: 'rpm-team-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './team-header.component.html',
  styleUrl: './team-header.component.scss'
})
export class TeamHeaderComponent {
  team = input<Team | null>(null);
  fallbackTeamName = input<string>('');
  matchesCount = input<number>(0);
  confirmedCount = input<number>(0);
  pendingCount = input<number>(0);
}
