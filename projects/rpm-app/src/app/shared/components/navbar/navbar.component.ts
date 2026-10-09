import { Component, HostListener, inject, signal, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';

// PrimeNG
import { ButtonDirective } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonDirective, TagModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  authService = inject(AuthService);
  private router = inject(Router);

  mobileMenuOpen = signal<boolean>(false);
  activeSection = signal<string>('inicio');

  // Solo activo para entorno local / desarrollo
  isLocal = isDevMode() || (typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.endsWith('.local')
  ));

  quickSwitch(email: string, pass: string): void {
    this.authService.login({ email, password: pass }).subscribe({
      next: (res) => {
        if (res.data.user.role === 'ADMIN' || res.data.user.role === 'ORGANIZER') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/team']);
        }
      }
    });
  }

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.mobileMenuOpen.set(false);
      if (this.isHomeRoute()) {
        const tree = this.router.parseUrl(event.urlAfterRedirects || this.router.url);
        if (tree.fragment) {
          this.activeSection.set(tree.fragment);
          setTimeout(() => {
            this.scrollToTarget(tree.fragment);
          }, 200);
        } else {
          this.onWindowScroll();
        }
      }
    });
  }

  isHomeRoute(): boolean {
    const url = this.router.url;
    return url === '/' || url.startsWith('/#') || url.startsWith('/?');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.isHomeRoute()) {
      return;
    }
    const scrollPosition = window.scrollY + 190;
    const sections = ['reglamento', 'partidos', 'clasificacion', 'inicio'];
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= top) {
          if (this.activeSection() !== sectionId) {
            this.activeSection.set(sectionId);
          }
          return;
        }
      }
    }
    this.activeSection.set('inicio');
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  private scrollToTarget(fragment?: string | null): void {
    if (!fragment || fragment === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(fragment);
    if (el) {
      const navbarOffset = 160;
      const targetY = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    }
  }

  navigateToSection(fragment?: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.closeMobileMenu();

    const targetSection = fragment || 'inicio';
    this.activeSection.set(targetSection);

    if (this.isHomeRoute()) {
      this.scrollToTarget(fragment);
      this.router.navigate(['/'], { fragment: fragment || undefined });
    } else {
      this.router.navigate(['/'], { fragment: fragment || undefined }).then(() => {
        setTimeout(() => {
          this.scrollToTarget(fragment);
        }, 180);
      });
    }
  }
}
