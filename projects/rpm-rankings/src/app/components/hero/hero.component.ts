import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { SelectModule } from 'primeng/select';
import { Ranking } from '@core';

@Component({
  selector: 'rpm-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  rankings = input<Ranking[]>([]);
  selectedRanking = input<Ranking | null>(null);
  rankingChange = output<string>();

  onRankingChange(id: string): void {
    this.rankingChange.emit(id);
  }
}
