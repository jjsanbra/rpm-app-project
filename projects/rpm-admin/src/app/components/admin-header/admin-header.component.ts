import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

export type AdminTab = 'rankings' | 'teams' | 'matches' | 'incidents' | 'auxiliary' | 'audit' | 'organizers';

@Component({
  selector: 'rpm-admin-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective, BadgeModule, TranslatePipe],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent {
  activeTab = input<AdminTab>('rankings');
  isAdmin = input<boolean>(true);
  rankingsCount = input<number>(0);
  teamsCount = input<number>(0);
  matchesCount = input<number>(0);
  openIncidentsCount = input<number>(0);
  organizersCount = input<number>(0);

  tabChange = output<AdminTab>();
}
