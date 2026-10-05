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
  createItem = output<Partial<AuxiliaryItem>>();
  updateItem = output<{ id: string; data: Partial<AuxiliaryItem> }>();
  deleteItem = output<string>();

  // Modal Create state
  showCreateModal = false;
  newName = '';
  newDesc = '';
  newStreet = '';
  newCity = '';
  newPostalCode = '';

  // Modal Edit state
  showEditModal = false;
  editId = '';
  editName = '';
  editDesc = '';
  editStreet = '';
  editCity = '';
  editPostalCode = '';

  openCreateModal(): void {
    this.newName = '';
    this.newDesc = '';
    this.newStreet = '';
    this.newCity = '';
    this.newPostalCode = '';
    this.showCreateModal = true;
  }

  submitCreate(): void {
    if (!this.newName.trim()) return;
    const payload: Partial<AuxiliaryItem> = {
      name: this.newName.trim(),
      description: this.newDesc.trim() || undefined
    };

    if (this.auxType() === 'locations') {
      payload.street = this.newStreet.trim() || undefined;
      payload.city = this.newCity.trim() || undefined;
      payload.postalCode = this.newPostalCode.trim() || undefined;
    }

    this.createItem.emit(payload);
    this.showCreateModal = false;
  }

  openEditModal(item: AuxiliaryItem): void {
    this.editId = item.id;
    this.editName = item.name || '';
    this.editDesc = item.description || '';
    this.editStreet = item.street || '';
    this.editCity = item.city || '';
    this.editPostalCode = item.postalCode || '';
    this.showEditModal = true;
  }

  submitEdit(): void {
    if (!this.editName.trim() || !this.editId) return;
    const payload: Partial<AuxiliaryItem> = {
      name: this.editName.trim(),
      description: this.editDesc.trim() || undefined
    };

    if (this.auxType() === 'locations') {
      payload.street = this.editStreet.trim() || undefined;
      payload.city = this.editCity.trim() || undefined;
      payload.postalCode = this.editPostalCode.trim() || undefined;
    }

    this.updateItem.emit({ id: this.editId, data: payload });
    this.showEditModal = false;
  }
}
