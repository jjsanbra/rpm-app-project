import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminIncidentsComponent } from './admin-incidents.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Incident } from '@core';

describe('AdminIncidentsComponent', () => {
  let component: AdminIncidentsComponent;
  let fixture: ComponentFixture<AdminIncidentsComponent>;

  const mockIncidents: Incident[] = [
    {
      id: 'inc-1',
      matchId: 'm-1',
      reportedBy: 'user-1',
      reportedByEmail: 'user1@padel.com',
      reportedAt: '2026-06-15',
      description: 'Error en marcador del tercer set',
      status: 'OPEN',
      createdAt: '2026-06-15',
      updatedAt: '2026-06-15'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminIncidentsComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin incidents component', () => {
    expect(component).toBeTruthy();
  });

  it('should render incidents table', () => {
    fixture.componentRef.setInput('incidents', mockIncidents);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('user1@padel.com');
    expect(compiled.textContent).toContain('Error en marcador del tercer set');
  });

  it('should open resolve modal', () => {
    component.openResolveModal(mockIncidents[0]);
    expect(component.showResolveModal).toBeTrue();
    expect(component.activeIncident?.id).toBe('inc-1');
  });
});
