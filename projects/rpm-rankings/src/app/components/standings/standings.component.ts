import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { ClassificationRow } from '@core';

@Component({
  selector: 'rpm-standings',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonDirective, TranslatePipe],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.scss'
})
export class StandingsComponent {
  classification = input<ClassificationRow[]>([]);
  loading = input<boolean>(false);
  viewMode = input<'official' | 'provisional'>('official');
  modeChange = output<'official' | 'provisional'>();

  setMode(mode: 'official' | 'provisional'): void {
    this.modeChange.emit(mode);
  }
}
