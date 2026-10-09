import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Team } from '@core';

import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

export interface CreateTeamPayload {
  name: string;
  player1Name: string;
  player1Surname: string;
  player2Name: string;
  player2Surname: string;
  reserveName?: string | null;
  reserveSurname?: string | null;
  phone?: string | null;
  phone2?: string | null;
  emails: string[];
}

export interface UpdateTeamPayload {
  id: string;
  name: string;
  player1Name: string;
  player1Surname: string;
  player2Name: string;
  player2Surname: string;
  reserveName?: string | null;
  reserveSurname?: string | null;
  phone?: string | null;
  phone2?: string | null;
  emails: string[];
}

@Component({
  selector: 'rpm-admin-teams',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonDirective,
    DialogModule,
    TagModule,
    TooltipModule,
    TranslatePipe
  ],
  templateUrl: './admin-teams.component.html',
  styleUrl: './admin-teams.component.scss'
})
export class AdminTeamsComponent {
  teams = input<Team[]>([]);

  createTeam = output<CreateTeamPayload>();
  updateTeam = output<UpdateTeamPayload>();
  deleteTeam = output<Team>();
  toggleActive = output<Team>();
  resendWelcome = output<Team>();

  // Create Modal state
  showCreateModal = false;
  newTeamName = '';
  newTeamP1N = '';
  newTeamP1S = '';
  newTeamP2N = '';
  newTeamP2S = '';
  newTeamRN = '';
  newTeamRS = '';
  newTeamPhone = '';
  newTeamPhone2 = '';
  newTeamEmail1 = '';
  newTeamEmail2 = '';

  // Edit Modal state
  showEditModal = false;
  currentEditingTeam: Team | null = null;
  editTeamId = '';
  editTeamName = '';
  editTeamP1N = '';
  editTeamP1S = '';
  editTeamP2N = '';
  editTeamP2S = '';
  editTeamRN = '';
  editTeamRS = '';
  editTeamPhone = '';
  editTeamPhone2 = '';
  editTeamEmail1 = '';
  editTeamEmail2 = '';

  getTeamEmailsList(team: Team): string[] {
    if (!team.emails) return [];
    if (typeof team.emails[0] === 'string') return team.emails as string[];
    return (team.emails as any[]).map(e => e.email);
  }

  openCreateModal(): void {
    this.newTeamName = '';
    this.newTeamP1N = '';
    this.newTeamP1S = '';
    this.newTeamP2N = '';
    this.newTeamP2S = '';
    this.newTeamRN = '';
    this.newTeamRS = '';
    this.newTeamPhone = '';
    this.newTeamPhone2 = '';
    this.newTeamEmail1 = '';
    this.newTeamEmail2 = '';
    this.showCreateModal = true;
  }

  submitCreate(): void {
    if (!this.newTeamName.trim() || !this.newTeamEmail1.trim()) return;
    const emails = [this.newTeamEmail1];
    if (this.newTeamEmail2.trim()) emails.push(this.newTeamEmail2.trim());

    this.createTeam.emit({
      name: this.newTeamName,
      player1Name: this.newTeamP1N,
      player1Surname: this.newTeamP1S,
      player2Name: this.newTeamP2N,
      player2Surname: this.newTeamP2S,
      reserveName: this.newTeamRN.trim() || null,
      reserveSurname: this.newTeamRS.trim() || null,
      phone: this.newTeamPhone.trim() || null,
      phone2: this.newTeamPhone2.trim() || null,
      emails
    });
    this.showCreateModal = false;
  }

  openEditModal(t: Team): void {
    this.currentEditingTeam = t;
    this.editTeamId = t.id;
    this.editTeamName = t.name;
    this.editTeamP1N = t.player1Name;
    this.editTeamP1S = t.player1Surname;
    this.editTeamP2N = t.player2Name;
    this.editTeamP2S = t.player2Surname;
    this.editTeamRN = t.reserveName || '';
    this.editTeamRS = t.reserveSurname || '';
    this.editTeamPhone = t.phone || '';
    this.editTeamPhone2 = t.phone2 || '';
    const emails = this.getTeamEmailsList(t);
    this.editTeamEmail1 = emails[0] || '';
    this.editTeamEmail2 = emails[1] || '';
    this.showEditModal = true;
  }

  submitEdit(): void {
    if (!this.editTeamId || !this.editTeamName.trim()) return;
    const emails = [this.editTeamEmail1];
    if (this.editTeamEmail2.trim()) emails.push(this.editTeamEmail2.trim());

    this.updateTeam.emit({
      id: this.editTeamId,
      name: this.editTeamName,
      player1Name: this.editTeamP1N,
      player1Surname: this.editTeamP1S,
      player2Name: this.editTeamP2N,
      player2Surname: this.editTeamP2S,
      reserveName: this.editTeamRN.trim() || null,
      reserveSurname: this.editTeamRS.trim() || null,
      phone: this.editTeamPhone.trim() || null,
      phone2: this.editTeamPhone2.trim() || null,
      emails
    });
    this.showEditModal = false;
  }

  confirmDeleteTeam(t: Team): void {
    this.deleteTeam.emit(t);
  }

  confirmDeleteFromModal(): void {
    if (this.currentEditingTeam) {
      this.deleteTeam.emit(this.currentEditingTeam);
      this.showEditModal = false;
    }
  }
}
