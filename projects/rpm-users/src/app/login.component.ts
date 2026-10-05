import { Component, signal, inject, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthService, extractErrorMessage } from '@core';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonDirective } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private translate = inject(TranslateService);

  email = '';
  password = '';
  loading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  // Solo activo para entorno local / desarrollo
  isLocal = isDevMode() || (typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.endsWith('.local')
  ));

  onSubmit(): void {
    if (!this.email || !this.password) return;

    this.loading.set(true);
    this.errorMessage.set(null);

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.data.user.role === 'ADMIN' || res.data.user.role === 'ORGANIZER') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/team']);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(extractErrorMessage(err, this.translate.instant('AUTH.INVALID_CREDENTIALS')));
      }
    });
  }

  quickLogin(email: string, pass: string): void {
    if (!this.isLocal) return;
    this.email = email;
    this.password = pass;
    this.onSubmit();
  }
}
