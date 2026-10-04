import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@core';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
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
    ButtonModule,
    MessageModule
  ],
  template: `
    <div class="auth-wrapper">
      <p-card class="auth-card-prime glass-panel">
        <ng-template #header>
          <div class="auth-header">
            <span class="auth-icon">📧</span>
            <h1 class="auth-title">Recuperar Contraseña</h1>
            <p class="auth-subtitle">Ingresa tu email para recibir el enlace de restablecimiento</p>
          </div>
        </ng-template>

        @if (submitted()) {
          <div class="success-box">
            <p-message severity="success" styleClass="w-full mb-3">Si el email está registrado, se han enviado las instrucciones de recuperación.</p-message>
            <p-button
              label="Volver al inicio de sesión"
              icon="pi pi-arrow-left"
              severity="secondary"
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
              <label class="form-label" for="email">Email Registrado</label>
              <input
                id="email"
                type="email"
                pInputText
                class="w-full"
                placeholder="tu-email@ejemplo.com"
                [(ngModel)]="email"
                name="email"
                required
              />
            </div>

            <p-button
              type="submit"
              label="Enviar Instrucciones"
              icon="pi pi-send"
              severity="success"
              styleClass="w-full mt-2"
              [loading]="loading()"
              [disabled]="loading() || !email">
            </p-button>

            <div class="text-center mt-3">
              <a routerLink="/auth/login" class="back-link">
                <i class="pi pi-arrow-left"></i> Volver al login
              </a>
            </div>
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
    .mt-3 { margin-top: 1rem; }
    .text-center { text-align: center; }
    .back-link { font-size: 0.85rem; color: var(--text-dim); text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem; }
    .back-link:hover { color: var(--primary); }
    .success-box { text-align: center; }
  `]
})
export class ForgotPasswordComponent {
  private authService = inject(AuthService);

  email = '';
  loading = signal<boolean>(false);
  submitted = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  onSubmit(): void {
    if (!this.email) return;

    this.loading.set(true);
    this.errorMessage.set(null);

    this.authService.forgotPassword(this.email).subscribe({
      next: () => {
        this.loading.set(false);
        this.submitted.set(true);
      },
      error: () => {
        this.loading.set(false);
        this.submitted.set(true);
      }
    });
  }
}
