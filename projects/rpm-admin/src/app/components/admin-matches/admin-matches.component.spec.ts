import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminMatchesComponent } from './admin-matches.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Match, Ranking } from '@core';

describe('AdminMatchesComponent', () => {
  let component: AdminMatchesComponent;
  let fixture: ComponentFixture<AdminMatchesComponent>;

  const mockRankings: Ranking[] = [
    {
      id: 'r-1',
      name: 'Ranking Verano 2026',
      startDate: '2026-06-01',
      endDate: '2026-08-31',
      active: true,
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01'
    }
  ];

  const mockMatches: Match[] = [
    {
      id: 'm-1',
      rankingId: 'r-1',
      teamOneId: 't-1',
      teamTwoId: 't-2',
      teamOneName: 'Equipo 1',
      teamTwoName: 'Equipo 2',
      setsTeamOne: 2,
      setsTeamTwo: 0,
      pointsTeamOne: 5,
      pointsTeamTwo: 1,
      status: 'CONFIRMED',
      matchDate: '2026-06-15',
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMatchesComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin matches component', () => {
    expect(component).toBeTruthy();
  });

  it('should render matches list', () => {
    fixture.componentRef.setInput('rankings', mockRankings);
    fixture.componentRef.setInput('selectedRankingId', 'r-1');
    fixture.componentRef.setInput('matches', mockMatches);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Equipo 1');
    expect(compiled.textContent).toContain('Equipo 2');
  });

  it('should calculate sets and games automatically from game scores', () => {
    component.overrideSet1TeamOne = 6;
    component.overrideSet1TeamTwo = 4;
    component.overrideSet2TeamOne = 6;
    component.overrideSet2TeamTwo = 2;

    expect(component.isThirdSetNeeded()).toBe(false);
    expect(component.calculatedSetsOne()).toBe(2);
    expect(component.calculatedSetsTwo()).toBe(0);
    expect(component.calculatedGamesOne()).toBe(12);
    expect(component.calculatedGamesTwo()).toBe(6);
    expect(component.previewPointsOne()).toBe(5);
    expect(component.previewPointsTwo()).toBe(1);
  });
});
