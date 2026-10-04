import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingService, MatchService, ClassificationService, Ranking, Match, ClassificationRow } from '@core';

import { HeroComponent } from './components/hero/hero.component';
import { RankingInfoComponent } from './components/ranking-info/ranking-info.component';
import { StandingsComponent } from './components/standings/standings.component';
import { MatchesComponent } from './components/matches/matches.component';
import { RulesComponent } from './components/rules/rules.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    RankingInfoComponent,
    StandingsComponent,
    MatchesComponent,
    RulesComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  private rankingService = inject(RankingService);
  private matchService = inject(MatchService);
  private classificationService = inject(ClassificationService);

  rankings = signal<Ranking[]>([]);
  selectedRanking = signal<Ranking | null>(null);
  classification = signal<ClassificationRow[]>([]);
  matches = signal<Match[]>([]);
  
  viewMode = signal<'official' | 'provisional'>('official');
  loadingClassification = signal<boolean>(false);

  ngOnInit(): void {
    this.loadRankings();
  }

  loadRankings(): void {
    this.rankingService.getAll().subscribe({
      next: (res) => {
        this.rankings.set(res.data);
        if (res.data.length > 0) {
          this.selectedRanking.set(res.data[0]);
          this.loadRankingData(res.data[0].id);
        }
      }
    });
  }

  onRankingChange(id: string): void {
    const found = this.rankings().find(r => r.id === id);
    if (found) {
      this.selectedRanking.set(found);
      this.loadRankingData(found.id);
    }
  }

  loadRankingData(rankingId: string): void {
    this.loadClassification(rankingId);
    this.loadMatches(rankingId);
  }

  loadClassification(rankingId: string): void {
    this.loadingClassification.set(true);
    const obs = this.viewMode() === 'official'
      ? this.classificationService.getOfficial(rankingId)
      : this.classificationService.getProvisional(rankingId);

    obs.subscribe({
      next: (res) => {
        this.classification.set(res.data);
        this.loadingClassification.set(false);
      },
      error: () => this.loadingClassification.set(false)
    });
  }

  loadMatches(rankingId: string): void {
    this.matchService.getAll({ rankingId }).subscribe({
      next: (res) => {
        this.matches.set(res.data);
      }
    });
  }

  setMode(mode: 'official' | 'provisional'): void {
    this.viewMode.set(mode);
    const r = this.selectedRanking();
    if (r) this.loadClassification(r.id);
  }
}
