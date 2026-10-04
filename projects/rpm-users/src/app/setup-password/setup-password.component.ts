import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@core';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
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
    ButtonModule,
    MessageModule
  ],
  template: `
    <div class="auth-wrapper">
      <p-card class="auth-card-prime glass-panel-glow">
        <ng-template #header>
          <div class="auth-header">
            <span class="auth-icon">🔐</span>
            <h1 class="auth-title">Activar Acceso de Equipo</h1>
            <p class="auth-subtitle">Configura tu contraseña inicial para gestionar tus partidos</p>
          </div>
        </ng-template>

        @if (successMessage()) {
          <div class="success-box">
            <p-message severity="success" styleClass="w-full mb-3">{{ successMessage() }}</p-message>
            <p-button
              label="Ir a Iniciar Sesión"
              icon="pi pi-sign-in"
              severity="success"
              routerLink="/auth/login"
              styleClass="w-full mt-2">
            </p-button>
          </div>
        } @else {
          @if (errorMessage()) {
            <p-message severity="error" styleClass="w-full mb-3">{{ errorMessage() }}</p-message>
          }

          <form (ngSubmit)="onSubmit()" class="auth-form">
            <div class="form-field">
              <label class="form-label" for="password">Nueva Contraseña (mínimo 8 caracteres)</label>
              <p-password
                id="password"
                [(ngModel)]="password"
                name="password"
                [feedback]="true"
                [toggleMask]="true"
                styleClass="w-full"
                inputStyleClass="w-full"
                placeholder="••••••••"
                required
                [minlength]="8">
              </p-password>
            </div>

            <div class="form-field">
              <label class="form-label" for="confirmPassword">Confirmar Contraseña</label>
              <p-password
                id="confirmPassword"
                [(ngModel)]="confirmPassword"
                name="confirmPassword"
                [feedback]="false"
                [toggleMask]="true"
                styleClass="w-full"
                inputStyleClass="w-full"
                placeholder="••••••••"
                required>
              </p-password>
            </div>

            <p-button
              type="submit"
              label="Activar Cuenta"
              icon="pi pi-check"
              severity="success"
              styleClass="w-full mt-2"
              [loading]="loading()"
              [disabled]="loading() || !token">
            </p-button>
          </form>
        }
      </p-card>
    </div>
  `,
  styles: [`
    .auth-wrapper {
      min-height: calc(80vh - 100px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1.25rem;
    }
    :host ::ng-deep .auth-card-prime .p-card {
      width: 100%;
      max-width: 440px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      backdrop-filter: blur(16px);
      box-shadow: var(--shadow-card);
    }
    .auth-header { text-align: center; padding-top: 1.5rem; }
    .auth-icon { font-size: 2.5rem; display: inline-block; margin-bottom: 0.5rem; }
    .auth-title { font-size: 1.5rem; margin-bottom: 0.3rem; font-family: var(--font-heading); color: var(--text-main); }
    .auth-subtitle { font-size: 0.85rem; color: var(--text-muted); }
    .auth-form { display: flex; flex-direction: column; gap: 1.2rem; }
    .form-field { display: flex; flex-direction: column; gap: 0.4rem; }
    .form-label { font-size: 0.82rem; font-weight: 600; color: var(--text-muted); }
    .w-full { width: 100%; }
    .mb-3 { margin-bottom: 1rem; }
    .mt-2 { margin-top: 0.75rem; }
    .success-box { text-align: center; }
  `]
})
export class SetupPasswordComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);

  token = '';
  password = '';
  confirmPassword = '';
  loading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'] || '';
    if (!this.token) {
      this.errorMessage.set('Token de activación no proporcionado.');
    }
  }

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage.set('Las contraseñas no coinciden.');
      return;
    }
    if (this.password.length < 8) {
      this.errorMessage.set('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);

    this.authService.setupPassword({ token: this.token, password: this.password }).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMessage.set('Contraseña configurada con éxito. Ya puedes acceder con tu cuenta.');
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(err.error?.error || 'Token inválido o expirado.');
      }
    });
  }
}
