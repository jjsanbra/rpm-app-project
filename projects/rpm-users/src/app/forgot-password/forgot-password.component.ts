import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '@core';

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
