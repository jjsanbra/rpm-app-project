import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthService, extractErrorMessage } from '@core';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonDirective } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonDirective,
    MessageModule,
    TranslatePipe
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private translate = inject(TranslateService);
  private messageService = inject(MessageService);

  token = '';
  password = '';
  confirmPassword = '';
  loading = signal<boolean>(false);
  successMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'] || '';
    if (!this.token) {
      this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: this.translate.instant('AUTH.MISSING_RESET_TOKEN')
      });
    }
  }

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: this.translate.instant('AUTH.PASSWORDS_DONT_MATCH')
      });
      return;
    }
    if (this.password.length < 8) {
      this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('COMMON.ERROR'),
        detail: this.translate.instant('AUTH.PASSWORD_MIN_LENGTH')
      });
      return;
    }

    this.loading.set(true);

    this.authService.resetPassword({ token: this.token, password: this.password }).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMessage.set(this.translate.instant('AUTH.RESET_SUCCESS'));
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('COMMON.SUCCESS'),
          detail: this.translate.instant('AUTH.RESET_SUCCESS')
        });
      },
      error: (err) => {
        this.loading.set(false);
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, this.translate.instant('AUTH.INVALID_TOKEN'))
        });
      }
    });
  }
}
