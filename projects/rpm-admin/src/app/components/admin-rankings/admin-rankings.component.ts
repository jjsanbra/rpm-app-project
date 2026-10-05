import { Component, input, output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Ranking, AuxiliaryItem } from '@core';

import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';

export interface CreateRankingPayload {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  locationId?: string;
  levelId?: string;
  categoryId?: string;
}

export interface UpdateRankingPayload {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  locationId?: string;
  levelId?: string;
  categoryId?: string;
}

@Component({
  selector: 'rpm-admin-rankings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
    ButtonDirective,
    DialogModule,
    TagModule,
    SelectModule,
    TranslatePipe
  ],
  templateUrl: './admin-rankings.component.html',
  styleUrl: './admin-rankings.component.scss'
})
export class AdminRankingsComponent {
  rankings = input<Ranking[]>([]);
  locations = input<AuxiliaryItem[]>([]);
  levels = input<AuxiliaryItem[]>([]);
  categories = input<AuxiliaryItem[]>([]);

  createRanking = output<CreateRankingPayload>();
  updateRanking = output<UpdateRankingPayload>();
  toggleActive = output<Ranking>();
  selectForMatches = output<Ranking>();
  deleteRanking = output<Ranking>();

  // Create Modal state
  showCreateModal = false;
  newRankingName = '';
  newRankingDesc = '';
  newRankingStart = '2026-11-01';
  newRankingEnd = '2026-12-31';
  newRankingLocationId = '';
  newRankingLevelId = '';
  newRankingCategoryId = '';

  // Edit Modal state
  showEditModal = false;
  editRankingId = '';
  editRankingName = '';
  editRankingDesc = '';
  editRankingStart = '';
  editRankingEnd = '';
  editRankingLocationId = '';
  editRankingLevelId = '';
  editRankingCategoryId = '';

  openCreateModal(): void {
    this.newRankingName = '';
    this.newRankingDesc = '';
    this.newRankingStart = '2026-11-01';
    this.newRankingEnd = '2026-12-31';
    this.newRankingLocationId = '';
    this.newRankingLevelId = '';
    this.newRankingCategoryId = '';
    this.showCreateModal = true;
  }

  submitCreate(): void {
    if (!this.newRankingName.trim()) return;
    this.createRanking.emit({
      name: this.newRankingName,
      description: this.newRankingDesc,
      startDate: this.newRankingStart,
      endDate: this.newRankingEnd,
      locationId: this.newRankingLocationId || undefined,
      levelId: this.newRankingLevelId || undefined,
      categoryId: this.newRankingCategoryId || undefined
    });
    this.showCreateModal = false;
  }

  openEditModal(r: Ranking): void {
    this.editRankingId = r.id;
    this.editRankingName = r.name;
    this.editRankingDesc = r.description || '';
    this.editRankingStart = r.startDate || '';
    this.editRankingEnd = r.endDate || '';
    this.editRankingLocationId = r.locationId || '';
    this.editRankingLevelId = r.levelId || '';
    this.editRankingCategoryId = r.categoryId || '';
    this.showEditModal = true;
  }

  submitEdit(): void {
    if (!this.editRankingId || !this.editRankingName.trim()) return;
    this.updateRanking.emit({
      id: this.editRankingId,
      name: this.editRankingName,
      description: this.editRankingDesc,
      startDate: this.editRankingStart,
      endDate: this.editRankingEnd,
      locationId: this.editRankingLocationId || undefined,
      levelId: this.editRankingLevelId || undefined,
      categoryId: this.editRankingCategoryId || undefined
    });
    this.showEditModal = false;
  }
}
