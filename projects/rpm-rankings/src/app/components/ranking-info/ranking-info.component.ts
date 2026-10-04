import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { Ranking } from '@core';

@Component({
  selector: 'rpm-ranking-info',
  standalone: true,
  imports: [CommonModule, CardModule, TranslatePipe],
  templateUrl: './ranking-info.component.html',
  styleUrl: './ranking-info.component.scss'
})
export class RankingInfoComponent {
  ranking = input<Ranking | null>(null);
}
