import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth.service';

// PrimeNG
import { ButtonDirective } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonDirective, TagModule, TranslatePipe],
  template: `
    <nav class="navbar glass-panel">
      <div class="nav-container">
        <!-- Brand Logo -->
        <a routerLink="/" class="brand">
          <span class="logo-icon">🎾</span>
          <div class="brand-text">
            <span class="brand-title">{{ 'APP.TITLE_MAIN' | translate }} <span class="highlight">{{ 'APP.TITLE_HIGHLIGHT' | translate }}</span></span>
            <span class="brand-sub">{{ 'APP.SUBTITLE' | translate }}</span>
          </div>
        </a>

        <!-- Desktop Links -->
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">
            <i class="pi pi-home"></i> {{ 'NAV.HOME' | translate }}
          </a>
          <a routerLink="/" fragment="clasificacion" class="nav-link">
            <i class="pi pi-chart-bar"></i> {{ 'NAV.STANDINGS' | translate }}
          </a>
          <a routerLink="/" fragment="partidos" class="nav-link">
            <i class="pi pi-calendar"></i> {{ 'NAV.MATCHES' | translate }}
          </a>
          <a routerLink="/" fragment="reglamento" class="nav-link">
            <i class="pi pi-book"></i> {{ 'NAV.RULES' | translate }}
          </a>

          @if (authService.isAuthenticated()) {
            @if (authService.isTeamUser()) {
              <a routerLink="/team" routerLinkActive="active" class="nav-link team-link">
                <i class="pi pi-users"></i> {{ 'NAV.MY_TEAM' | translate }}
              </a>
            }
            @if (authService.isAdmin()) {
              <a routerLink="/admin" routerLinkActive="active" class="nav-link admin-link">
                <i class="pi pi-cog"></i> {{ 'NAV.ADMIN_PANEL' | translate }}
              </a>
            }
          }
        </div>

        <!-- User / Auth Actions -->
        <div class="nav-actions">
          @if (authService.isAuthenticated()) {
            <div class="user-badge">
              <span class="user-email">{{ authService.currentUser()?.email }}</span>
              <p-tag
                [value]="authService.isAdmin() ? ('NAV.ROLE_ADMIN' | translate) : (authService.currentUser()?.teamName || ('NAV.ROLE_TEAM' | translate))"
                [severity]="authService.isAdmin() ? 'warn' : 'success'">
              </p-tag>
            </div>
            <button
              type="button"
              pButton
              severity="secondary"
              [outlined]="true"
              size="small"
              (click)="authService.logout()">
              <i class="pi pi-sign-out"></i>
              <span>{{ 'NAV.LOGOUT' | translate }}</span>
            </button>
          } @else {
            <button
              type="button"
              pButton
              severity="success"
              size="small"
              routerLink="/auth/login">
              <i class="pi pi-user"></i>
              <span>{{ 'NAV.LOGIN' | translate }}</span>
            </button>
          }
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 1rem;
      z-index: 1000;
      margin: 1rem auto;
      max-width: 1240px;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-md);
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
    }

    .logo-icon {
      font-size: 1.8rem;
      filter: drop-shadow(0 0 10px rgba(0, 230, 118, 0.4));
    }

    .brand-text {
      display: flex;
      flex-direction: column;
    }

    .brand-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.25rem;
      color: var(--text-main);
      letter-spacing: -0.02em;
      line-height: 1.1;

      .highlight {
        color: var(--primary);
      }
    }

    .brand-sub {
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-dim);
      font-weight: 600;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .nav-link {
      color: var(--text-muted);
      font-size: 0.9rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.4rem 0.6rem;
      border-radius: var(--radius-sm);
      transition: all 0.2s ease;

      &:hover, &.active {
        color: var(--primary);
        background: rgba(16, 185, 129, 0.08);
      }

      &.team-link {
        color: var(--accent-cyan);
        background: rgba(6, 182, 212, 0.1);
        &:hover { background: rgba(6, 182, 212, 0.2); }
      }

      &.admin-link {
        color: #f59e0b;
        background: rgba(245, 158, 11, 0.1);
        &:hover { background: rgba(245, 158, 11, 0.2); }
      }
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 0.85rem;
    }

    .user-badge {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      line-height: 1.2;

      .user-email {
        font-size: 0.8rem;
        color: var(--text-main);
        font-weight: 600;
      }

      .role-tag {
        font-size: 0.65rem;
        color: var(--primary);
        font-weight: 700;
        text-transform: uppercase;

        &.admin {
          color: #f59e0b;
        }
      }
    }
  `]
})
export class NavbarComponent {
  authService = inject(AuthService);
}
