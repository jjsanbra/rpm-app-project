import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAuditComponent } from './admin-audit.component';
import { provideTranslateService } from '@ngx-translate/core';
import { AuditLog } from '@core';

describe('AdminAuditComponent', () => {
  let component: AdminAuditComponent;
  let fixture: ComponentFixture<AdminAuditComponent>;

  const mockLogs: AuditLog[] = [
    {
      id: 'log-1',
      userId: 'u-1',
      userEmail: 'admin@padel.com',
      action: 'UPDATE_SCORE',
      entity: 'MATCH',
      entityId: 'm-1',
      data: { score: '2-0' },
      createdAt: '2026-06-15T12:00:00Z'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAuditComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin audit component', () => {
    expect(component).toBeTruthy();
  });

  it('should render audit logs table', () => {
    fixture.componentRef.setInput('logs', mockLogs);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('admin@padel.com');
    expect(compiled.textContent).toContain('UPDATE_SCORE');
  });

  it('should format log data correctly', () => {
    expect(component.formatLogData({ a: 1 })).toBe('{"a":1}');
    expect(component.formatLogData('raw')).toBe('raw');
    expect(component.formatLogData(null)).toBe('-');
  });
});
