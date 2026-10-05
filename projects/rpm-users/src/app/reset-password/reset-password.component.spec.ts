import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswordComponent } from './reset-password.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  let messageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        provideTranslateService(),
        MessageService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it('should create the reset password component', () => {
    expect(component).toBeTruthy();
  });

  it('should validate matching passwords', () => {
    spyOn(messageService, 'add');
    component.password = 'Password123!';
    component.confirmPassword = 'DifferentPassword!';
    component.onSubmit();
    expect(messageService.add).toHaveBeenCalled();
  });
});
