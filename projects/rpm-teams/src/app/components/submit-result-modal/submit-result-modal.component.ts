import { Component, input, output, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Match } from '@core';

import { DialogModule } from 'primeng/dialog';
import { ButtonDirective } from 'primeng/button';

export interface SubmitResultData {
  matchId: string;
  matchDate: string;
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
  visible = input<boolean>(false);
  match = input<Match | null>(null);
  submitting = input<boolean>(false);

  visibleChange = output<boolean>();
  submitResult = output<SubmitResultData>();

  formMatchDate = new Date().toISOString().split('T')[0];
  formSetsOne: number | null = null;
  formSetsTwo: number | null = null;

  constructor() {
    effect(() => {
      if (this.visible()) {
        this.formMatchDate = new Date().toISOString().split('T')[0];
        this.formSetsOne = null;
        this.formSetsTwo = null;
      }
    });
  }

  setScore(s1: number, s2: number): void {
    this.formSetsOne = s1;
    this.formSetsTwo = s2;
  }

  previewPointsOne(): number {
    if (this.formSetsOne === null || this.formSetsTwo === null) return 0;
    if (this.formSetsOne === 2 && this.formSetsTwo === 0) return 5;
    if (this.formSetsOne === 2 && this.formSetsTwo === 1) return 4;
    if (this.formSetsOne === 1 && this.formSetsTwo === 2) return 2;
    if (this.formSetsOne === 0 && this.formSetsTwo === 2) return 1;
    return 0;
  }

  previewPointsTwo(): number {
    if (this.formSetsOne === null || this.formSetsTwo === null) return 0;
    if (this.formSetsTwo === 2 && this.formSetsOne === 0) return 5;
    if (this.formSetsTwo === 2 && this.formSetsOne === 1) return 4;
    if (this.formSetsTwo === 1 && this.formSetsOne === 2) return 2;
    if (this.formSetsTwo === 0 && this.formSetsOne === 2) return 1;
    return 0;
  }

  onClose(): void {
    this.visibleChange.emit(false);
  }

  onSubmit(): void {
    const m = this.match();
    if (!m || this.formSetsOne === null || this.formSetsTwo === null) return;

    this.submitResult.emit({
      matchId: m.id,
      matchDate: this.formMatchDate,
      setsTeamOne: this.formSetsOne,
      setsTeamTwo: this.formSetsTwo
    });
  }
}
