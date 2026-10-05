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
  deleteOrganizer = output<User>();

  showCreateModal = false;
  newEmail = '';
  newPassword = '';

  openCreateModal(): void {
    this.newEmail = '';
    this.newPassword = '';
    this.showCreateModal = true;
  }

  submitCreate(): void {
    if (!this.newEmail.trim()) return;
    this.createOrganizer.emit({
      email: this.newEmail.trim(),
      password: this.newPassword.trim() || undefined
    });
    this.showCreateModal = false;
  }
}
