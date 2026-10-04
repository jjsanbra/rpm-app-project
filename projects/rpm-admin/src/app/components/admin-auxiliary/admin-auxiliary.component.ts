import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { AuxiliaryItem } from '@core';

import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

export type AuxCatalogType = 'levels' | 'categories' | 'locations' | 'sponsors';

@Component({
  selector: 'rpm-admin-auxiliary',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonDirective,
    DialogModule,
    TranslatePipe
  ],
  templateUrl: './admin-auxiliary.component.html',
  styleUrl: './admin-auxiliary.component.scss'
})
export class AdminAuxiliaryComponent {
  auxType = input<AuxCatalogType>('levels');
  items = input<AuxiliaryItem[]>([]);

  auxTypeChange = output<AuxCatalogType>();
  createItem = output<{ name: string; description: string }>();
  deleteItem = output<string>();

  // Modal state
  showCreateModal = false;
  newName = '';
  newDesc = '';

  openCreateModal(): void {
    this.newName = '';
    this.newDesc = '';
    this.showCreateModal = true;
  }

  submitCreate(): void {
    if (!this.newName.trim()) return;
    this.createItem.emit({
      name: this.newName.trim(),
      description: this.newDesc.trim()
    });
    this.showCreateModal = false;
  }
}
