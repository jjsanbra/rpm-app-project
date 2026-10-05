import { Component, input, output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { User } from '@core';

import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

export interface CreateOrganizerPayload {
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface UpdateOrganizerPayload {
  id: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  active: boolean;
}

@Component({
  selector: 'rpm-admin-organizers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
    TableModule,
    ButtonDirective,
    DialogModule,
    TagModule,
    TooltipModule,
    TranslatePipe
  ],
  templateUrl: './admin-organizers.component.html',
  styleUrl: './admin-organizers.component.scss'
})
export class AdminOrganizersComponent {
  organizers = input<User[]>([]);

  createOrganizer = output<CreateOrganizerPayload>();
  updateOrganizer = output<UpdateOrganizerPayload>();
  deleteOrganizer = output<User>();
  toggleActive = output<User>();

  // Modal Crear
  showCreateModal = false;
  newFirstName = '';
  newLastName = '';
  newPhone = '';
  newEmail = '';
  newPassword = '';

  // Modal Editar
  showEditModal = false;
  editId = '';
  editFirstName = '';
  editLastName = '';
  editPhone = '';
  editEmail = '';
  editPassword = '';
  editActive = true;

  openCreateModal(): void {
    this.newFirstName = '';
    this.newLastName = '';
    this.newPhone = '';
    this.newEmail = '';
    this.newPassword = '';
    this.showCreateModal = true;
  }

  submitCreate(): void {
    if (!this.newEmail.trim()) return;
    this.createOrganizer.emit({
      email: this.newEmail.trim(),
      password: this.newPassword.trim() || undefined,
      firstName: this.newFirstName.trim() || undefined,
      lastName: this.newLastName.trim() || undefined,
      phone: this.newPhone.trim() || undefined,
    });
    this.showCreateModal = false;
  }

  openEditModal(org: User): void {
    this.editId = org.id;
    this.editFirstName = org.firstName || '';
    this.editLastName = org.lastName || '';
    this.editPhone = org.phone || '';
    this.editEmail = org.email;
    this.editPassword = '';
    this.editActive = org.active !== false;
    this.showEditModal = true;
  }

  submitEdit(): void {
    if (!this.editEmail.trim()) return;
    this.updateOrganizer.emit({
      id: this.editId,
      email: this.editEmail.trim(),
      password: this.editPassword.trim() || undefined,
      firstName: this.editFirstName.trim() || undefined,
      lastName: this.editLastName.trim() || undefined,
      phone: this.editPhone.trim() || undefined,
      active: this.editActive
    });
    this.showEditModal = false;
  }
}
