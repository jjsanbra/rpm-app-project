import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetupPasswordComponent } from './setup-password.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';

describe('SetupPasswordComponent', () => {
  let component: SetupPasswordComponent;
  let fixture: ComponentFixture<SetupPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupPasswordComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        provideTranslateService()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SetupPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the setup password component', () => {
    expect(component).toBeTruthy();
  });

  it('should validate matching passwords', () => {
    component.password = 'Password123!';
    component.confirmPassword = 'DifferentPassword!';
    component.onSubmit();
    expect(component.errorMessage()).toBe('Las contraseñas no coinciden.');
  });
});
