import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RankingService, MatchService, ClassificationService, Ranking, Match, ClassificationRow } from '@core';

// PrimeNG Components
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    TagModule,
    CardModule,
    BadgeModule,
    SelectModule
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
  matchFilter = signal<string>('ALL');
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
      case 'CONFIRMED': return 'Confirmado';
      case 'PENDING_CONFIRMATION': return 'Pendiente Confirmar';
      case 'DISPUTED': return 'En Disputa';
      case 'PENDING_RESULT': return 'Pendiente Resultado';
      default: return status;
    }
  }
}
