import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetupPasswordComponent } from './setup-password.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

describe('SetupPasswordComponent', () => {
  let component: SetupPasswordComponent;
  let fixture: ComponentFixture<SetupPasswordComponent>;
  let messageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupPasswordComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        provideTranslateService(),
        MessageService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SetupPasswordComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it('should create the setup password component', () => {
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
