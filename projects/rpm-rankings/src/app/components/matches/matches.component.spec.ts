import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchesComponent } from './matches.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Match } from '@core';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;

  const mockMatches: Match[] = [
    {
      id: 'm-1',
      rankingId: 'r-1',
      teamOneId: 't-1',
      teamTwoId: 't-2',
      teamOneName: 'Equipo 1',
      teamTwoName: 'Equipo 2',
      setsTeamOne: 2,
      setsTeamTwo: 1,
      pointsTeamOne: 4,
      pointsTeamTwo: 2,
      status: 'CONFIRMED',
      matchDate: '2026-03-10',
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01'
    },
    {
      id: 'm-2',
      rankingId: 'r-1',
      teamOneId: 't-3',
      teamTwoId: 't-4',
      teamOneName: 'Equipo 3',
      teamTwoName: 'Equipo 4',
      setsTeamOne: null,
      setsTeamTwo: null,
      pointsTeamOne: null,
      pointsTeamTwo: null,
      status: 'PENDING_CONFIRMATION',
      matchDate: '2026-03-15',
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the matches component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter matches correctly by status', () => {
    fixture.componentRef.setInput('matches', mockMatches);
    fixture.detectChanges();

    expect(component.filteredMatches().length).toBe(2);

    component.setMatchFilter('CONFIRMED');
    expect(component.filteredMatches().length).toBe(1);
    expect(component.filteredMatches()[0].id).toBe('m-1');

    component.setMatchFilter('PENDING_CONFIRMATION');
    expect(component.filteredMatches().length).toBe(1);
    expect(component.filteredMatches()[0].id).toBe('m-2');

    component.setMatchFilter('DISPUTED');
    expect(component.filteredMatches().length).toBe(0);
  });

  it('should return correct severity tag for status', () => {
    expect(component.getTagSeverity('CONFIRMED')).toBe('success');
    expect(component.getTagSeverity('PENDING_CONFIRMATION')).toBe('warn');
    expect(component.getTagSeverity('DISPUTED')).toBe('danger');
    expect(component.getTagSeverity('UNKNOWN')).toBe('secondary');
  });

  it('should return correct formatStatus translation key', () => {
    expect(component.formatStatus('CONFIRMED')).toBe('STATUS.CONFIRMED');
    expect(component.formatStatus('PENDING_CONFIRMATION')).toBe('STATUS.PENDING_CONFIRMATION');
    expect(component.formatStatus('DISPUTED')).toBe('STATUS.DISPUTED');
    expect(component.formatStatus('PENDING_RESULT')).toBe('STATUS.PENDING_RESULT');
    expect(component.formatStatus('OTHER')).toBe('OTHER');
  });
});
