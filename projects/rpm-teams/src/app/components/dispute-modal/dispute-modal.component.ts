import { Component, input, output, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Match } from '@core';

import { DialogModule } from 'primeng/dialog';
import { ButtonDirective } from 'primeng/button';

export interface DisputeData {
  matchId: string;
  description: string;
}

@Component({
  selector: 'rpm-dispute-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonDirective, TranslatePipe],
  templateUrl: './dispute-modal.component.html',
  styleUrl: './dispute-modal.component.scss'
})
export class DisputeModalComponent {
  visible = input<boolean>(false);
  match = input<Match | null>(null);
  submitting = input<boolean>(false);

  visibleChange = output<boolean>();
  submitDispute = output<DisputeData>();

  disputeDescription = '';

  constructor() {
    effect(() => {
      if (this.visible()) {
        this.disputeDescription = '';
      }
    });
  }

  onClose(): void {
    this.visibleChange.emit(false);
  }

  onSubmit(): void {
    const m = this.match();
    if (!m || !this.disputeDescription.trim()) return;

    this.submitDispute.emit({
      matchId: m.id,
      description: this.disputeDescription.trim()
    });
  }
}
