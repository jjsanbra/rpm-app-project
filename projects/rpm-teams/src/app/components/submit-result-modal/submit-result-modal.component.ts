import { Component, input, output, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Match } from '@core';

import { DialogModule } from 'primeng/dialog';
import { ButtonDirective } from 'primeng/button';

export interface SubmitResultData {
  matchId: string;
  matchDate: string;
  set1TeamOne: number;
  set1TeamTwo: number;
  set2TeamOne: number;
  set2TeamTwo: number;
  set3TeamOne?: number | null;
  set3TeamTwo?: number | null;
  setsTeamOne: number;
  setsTeamTwo: number;
}

@Component({
  selector: 'rpm-submit-result-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonDirective, TranslatePipe],
  templateUrl: './submit-result-modal.component.html',
  styleUrl: './submit-result-modal.component.scss'
})
export class SubmitResultModalComponent {
  private translate = inject(TranslateService);

  visible = input<boolean>(false);
  match = input<Match | null>(null);
  submitting = input<boolean>(false);

  visibleChange = output<boolean>();
  submitResult = output<SubmitResultData>();

  formMatchDate = new Date().toISOString().split('T')[0];

  set1TeamOne: number | null = null;
  set1TeamTwo: number | null = null;
  set2TeamOne: number | null = null;
  set2TeamTwo: number | null = null;
  set3TeamOne: number | null = null;
  set3TeamTwo: number | null = null;

  constructor() {
    effect(() => {
      if (this.visible()) {
        this.formMatchDate = new Date().toISOString().split('T')[0];
        this.set1TeamOne = null;
        this.set1TeamTwo = null;
        this.set2TeamOne = null;
        this.set2TeamTwo = null;
        this.set3TeamOne = null;
        this.set3TeamTwo = null;
      }
    });
  }

  validateSet(g1: number | null, g2: number | null, isThird = false): { valid: boolean; winner?: 1 | 2; error?: string } {
    if (g1 === null || g2 === null || g1 === undefined || g2 === undefined) {
      return { valid: false };
    }
    const a = Number(g1);
    const b = Number(g2);
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
      return { valid: false, error: this.translate.instant('TEAM_PORTAL.ERR_INTEGER_GAMES') };
    }
    if (a === b) {
      return { valid: false, error: this.translate.instant('TEAM_PORTAL.ERR_TIE_SET') };
    }
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    const winner: 1 | 2 = a > b ? 1 : 2;

    if (max === 6 && min <= 4) return { valid: true, winner };
    if (max === 7 && (min === 5 || min === 6)) return { valid: true, winner };
    if (isThird && max >= 10 && (max - min >= 2)) return { valid: true, winner };

    return { valid: false, error: this.translate.instant('TEAM_PORTAL.ERR_INVALID_SCORE') };
  }

  set1Result() {
    return this.validateSet(this.set1TeamOne, this.set1TeamTwo, false);
  }

  set2Result() {
    return this.validateSet(this.set2TeamOne, this.set2TeamTwo, false);
  }

  set3Result() {
    return this.validateSet(this.set3TeamOne, this.set3TeamTwo, true);
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
    const g1 = Number(this.set1TeamOne) || 0;
    const g2 = Number(this.set2TeamOne) || 0;
    const g3 = this.isThirdSetNeeded() ? (Number(this.set3TeamOne) || 0) : 0;
    return g1 + g2 + g3;
  }

  calculatedGamesTwo(): number {
    const g1 = Number(this.set1TeamTwo) || 0;
    const g2 = Number(this.set2TeamTwo) || 0;
    const g3 = this.isThirdSetNeeded() ? (Number(this.set3TeamTwo) || 0) : 0;
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

  isFormValid(): boolean {
    const s1 = this.set1Result();
    const s2 = this.set2Result();
    if (!s1.valid || !s2.valid) return false;

    if (s1.winner === s2.winner) {
      // 2-0 o 0-2: no debe haber set 3
      return true;
    }

    // 1-1: set 3 es obligatorio y debe ser válido
    const s3 = this.set3Result();
    return !!s3.valid;
  }

  validationError(): string | null {
    if (this.set1TeamOne !== null && this.set1TeamTwo !== null) {
      const s1 = this.set1Result();
      if (!s1.valid && s1.error) return `${this.translate.instant('TEAM_PORTAL.SET_1')}: ${s1.error}`;
    }
    if (this.set2TeamOne !== null && this.set2TeamTwo !== null) {
      const s2 = this.set2Result();
      if (!s2.valid && s2.error) return `${this.translate.instant('TEAM_PORTAL.SET_2')}: ${s2.error}`;
    }
    if (this.isThirdSetNeeded() && this.set3TeamOne !== null && this.set3TeamTwo !== null) {
      const s3 = this.set3Result();
      if (!s3.valid && s3.error) return `${this.translate.instant('TEAM_PORTAL.SET_3')}: ${s3.error}`;
    }
    return null;
  }

  onClose(): void {
    this.visibleChange.emit(false);
  }

  onSubmit(): void {
    const m = this.match();
    if (!m || !this.isFormValid()) return;

    this.submitResult.emit({
      matchId: m.id,
      matchDate: this.formMatchDate,
      set1TeamOne: Number(this.set1TeamOne),
      set1TeamTwo: Number(this.set1TeamTwo),
      set2TeamOne: Number(this.set2TeamOne),
      set2TeamTwo: Number(this.set2TeamTwo),
      set3TeamOne: this.isThirdSetNeeded() ? Number(this.set3TeamOne) : null,
      set3TeamTwo: this.isThirdSetNeeded() ? Number(this.set3TeamTwo) : null,
      setsTeamOne: this.calculatedSetsOne(),
      setsTeamTwo: this.calculatedSetsTwo()
    });
  }
}
