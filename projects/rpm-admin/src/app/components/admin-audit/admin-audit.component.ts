import { Component, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { AuditLog } from '@core';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'rpm-admin-audit',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    TableModule,
    TranslatePipe
  ],
  templateUrl: './admin-audit.component.html',
  styleUrl: './admin-audit.component.scss'
})
export class AdminAuditComponent {
  logs = input<AuditLog[]>([]);

  formatLogData(data: any): string {
    if (!data) return '-';
    if (typeof data === 'string') return data;
    return JSON.stringify(data);
  }
}
