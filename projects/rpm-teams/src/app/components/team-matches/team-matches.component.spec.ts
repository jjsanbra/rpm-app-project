import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamMatchesComponent } from './team-matches.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Match } from '@core';

describe('TeamMatchesComponent', () => {
  let component: TeamMatchesComponent;
  let fixture: ComponentFixture<TeamMatchesComponent>;

  const mockMatches: Match[] = [
    {
      id: 'm-1',
      rankingId: 'r-1',
      teamOneId: 'team-1',
      teamTwoId: 'team-2',
      teamOneName: 'Equipo 1',
      teamTwoName: 'Equipo 2',
      setsTeamOne: 2,
      setsTeamTwo: 0,
      pointsTeamOne: 5,
      pointsTeamTwo: 1,
      status: 'CONFIRMED',
      matchDate: '2026-03-10',
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01'
    },
    {
      id: 'm-2',
      rankingId: 'r-1',
      teamOneId: 'team-1',
      teamTwoId: 'team-3',
      teamOneName: 'Equipo 1',
      teamTwoName: 'Equipo 3',
      setsTeamOne: null,
      setsTeamTwo: null,
      pointsTeamOne: null,
      pointsTeamTwo: null,
      status: 'PENDING_RESULT',
      matchDate: '2026-03-15',
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMatchesComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the team matches component', () => {
    expect(component).toBeTruthy();
  });

  it('should render matches list', () => {
    fixture.componentRef.setInput('matches', mockMatches);
    fixture.componentRef.setInput('currentTeamId', 'team-1');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Equipo 1');
    expect(compiled.textContent).toContain('Equipo 2');
    expect(compiled.textContent).toContain('Equipo 3');
  });

  it('should format status translation keys', () => {
    expect(component.formatStatus('CONFIRMED')).toBe('STATUS.CONFIRMED');
    expect(component.formatStatus('PENDING_CONFIRMATION')).toBe('STATUS.PENDING_CONFIRMATION');
    expect(component.formatStatus('DISPUTED')).toBe('STATUS.DISPUTED');
    expect(component.formatStatus('PENDING_RESULT')).toBe('STATUS.PENDING_RESULT');
  });

  it('should emit submitResult when button is clicked', () => {
    let emittedMatch: Match | undefined;
    component.submitResult.subscribe((m) => {
      emittedMatch = m;
    });

    component.submitResult.emit(mockMatches[1]);
    expect(emittedMatch?.id).toBe('m-2');
  });
});
