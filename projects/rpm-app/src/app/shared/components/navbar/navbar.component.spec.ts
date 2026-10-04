import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './navbar.component';
import { AuthService } from '../../../core/services/auth.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        AuthService,
        provideTranslateService(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create the navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should display brand and navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand')).toBeTruthy();
    expect(compiled.querySelector('.nav-links')).toBeTruthy();
  });

  it('should show login button when user is not authenticated', () => {
    authService.token.set(null);
    authService.currentUser.set(null);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const loginBtn = compiled.querySelector('button[routerLink="/auth/login"]');
    expect(loginBtn).toBeTruthy();
  });

  it('should show user badge and logout button when user is authenticated', () => {
    authService.token.set('fake-jwt-token');
    authService.currentUser.set({
      id: '1',
      email: 'user@test.com',
      role: 'ADMIN',
      active: true
    });
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.user-badge')).toBeTruthy();
    expect(compiled.querySelector('.user-email')?.textContent).toContain('user@test.com');
  });
});
