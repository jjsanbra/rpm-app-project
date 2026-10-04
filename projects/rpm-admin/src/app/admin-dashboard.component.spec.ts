import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTranslateService(),
        MessageService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial activeTab as rankings', () => {
    expect(component.activeTab()).toBe('rankings');
  });

  it('should switch tabs correctly', () => {
    component.setTab('teams');
    expect(component.activeTab()).toBe('teams');
    component.setTab('matches');
    expect(component.activeTab()).toBe('matches');
  });
});
