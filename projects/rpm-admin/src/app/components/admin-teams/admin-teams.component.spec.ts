import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTeamsComponent } from './admin-teams.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Team } from '@core';

describe('AdminTeamsComponent', () => {
  let component: AdminTeamsComponent;
  let fixture: ComponentFixture<AdminTeamsComponent>;

  const mockTeams: Team[] = [
    {
      id: 't-1',
      name: 'Equipo Alpha',
      player1Name: 'Juan',
      player1Surname: 'Perez',
      player2Name: 'Carlos',
      player2Surname: 'Gomez',
      active: true,
      emails: ['juan@padel.com'],
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTeamsComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin teams component', () => {
    expect(component).toBeTruthy();
  });

  it('should render teams table', () => {
    fixture.componentRef.setInput('teams', mockTeams);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Equipo Alpha');
    expect(compiled.textContent).toContain('Juan Perez');
  });

  it('should emit toggleActive when toggled', () => {
    let toggled: Team | undefined;
    component.toggleActive.subscribe((t) => {
      toggled = t;
    });

    component.toggleActive.emit(mockTeams[0]);
    expect(toggled?.id).toBe('t-1');
  });
});
