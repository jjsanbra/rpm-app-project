import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthService, extractErrorMessage } from '@core';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonDirective } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ButtonDirective,
    MessageModule,
    TranslatePipe
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private authService = inject(AuthService);
  private translate = inject(TranslateService);
  private messageService = inject(MessageService);

  email = '';
  loading = signal<boolean>(false);
  submitted = signal<boolean>(false);

  onSubmit(): void {
    if (!this.email) return;

    this.loading.set(true);

    this.authService.forgotPassword(this.email).subscribe({
      next: () => {
        this.loading.set(false);
        this.submitted.set(true);
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('COMMON.SUCCESS'),
          detail: this.translate.instant('AUTH.FORGOT_SUCCESS')
        });
      },
      error: (err) => {
        this.loading.set(false);
        this.submitted.set(true);
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('COMMON.INFO'),
          detail: this.translate.instant('AUTH.FORGOT_SUCCESS')
        });
      }
    });
  }
}
