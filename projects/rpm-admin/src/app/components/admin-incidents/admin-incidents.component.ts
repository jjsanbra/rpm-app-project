import { Component, input, output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Incident } from '@core';

import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';

export interface ResolveIncidentPayload {
  incidentId: string;
  status: string;
  resolution: string;
}

@Component({
  selector: 'rpm-admin-incidents',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
    TableModule,
    ButtonDirective,
    DialogModule,
    TagModule,
    SelectModule,
    TranslatePipe
  ],
  templateUrl: './admin-incidents.component.html',
  styleUrl: './admin-incidents.component.scss'
})
export class AdminIncidentsComponent {
  incidents = input<Incident[]>([]);

  resolveIncident = output<ResolveIncidentPayload>();

  resolutionStatusOptions = [
    { labelKey: 'INCIDENT.RESOLVED', value: 'RESOLVED' },
    { labelKey: 'INCIDENT.REJECTED', value: 'REJECTED' },
    { labelKey: 'INCIDENT.IN_REVIEW', value: 'IN_REVIEW' }
  ];

  // Modal state
  showResolveModal = false;
  activeIncident: Incident | null = null;
  incResolveStatus = 'RESOLVED';
  incResolution = '';

  openResolveModal(inc: Incident): void {
    this.activeIncident = inc;
    this.incResolveStatus = 'RESOLVED';
    this.incResolution = '';
    this.showResolveModal = true;
  }

  submitResolve(): void {
    if (!this.activeIncident) return;
    this.resolveIncident.emit({
      incidentId: this.activeIncident.id,
      status: this.incResolveStatus,
      resolution: this.incResolution
    });
    this.showResolveModal = false;
    this.activeIncident = null;
  }

  getTagSeverity(status: string): 'success' | 'warn' | 'danger' | 'info' | 'secondary' {
    switch (status) {
      case 'OPEN': return 'danger';
      case 'IN_REVIEW': return 'warn';
      case 'RESOLVED': return 'success';
      case 'REJECTED': return 'secondary';
      default: return 'info';
    }
  }

  formatStatus(status: string): string {
    switch (status) {
      case 'OPEN': return 'INCIDENT.OPEN';
      case 'IN_REVIEW': return 'INCIDENT.IN_REVIEW';
      case 'RESOLVED': return 'INCIDENT.RESOLVED';
      case 'REJECTED': return 'INCIDENT.REJECTED';
      default: return status;
    }
  }
}
