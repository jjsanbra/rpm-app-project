import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthService } from '@core';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonDirective } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-setup-password',
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
  templateUrl: './setup-password.component.html',
  styleUrl: './setup-password.component.scss'
})
export class SetupPasswordComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private translate = inject(TranslateService);

  token = '';
  password = '';
  confirmPassword = '';
  loading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'] || '';
    if (!this.token) {
      this.errorMessage.set(this.translate.instant('AUTH.MISSING_SETUP_TOKEN'));
    }
  }

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage.set(this.translate.instant('AUTH.PASSWORDS_DONT_MATCH'));
      return;
    }
    if (this.password.length < 8) {
      this.errorMessage.set(this.translate.instant('AUTH.PASSWORD_MIN_LENGTH'));
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);

    this.authService.setupPassword({ token: this.token, password: this.password }).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMessage.set(this.translate.instant('AUTH.SETUP_SUCCESS'));
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(err.error?.error || this.translate.instant('AUTH.INVALID_TOKEN'));
      }
    });
  }
}
