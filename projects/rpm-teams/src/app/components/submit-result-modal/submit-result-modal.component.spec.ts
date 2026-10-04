import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitResultModalComponent } from './submit-result-modal.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Match } from '@core';

describe('SubmitResultModalComponent', () => {
  let component: SubmitResultModalComponent;
  let fixture: ComponentFixture<SubmitResultModalComponent>;

  const mockMatch: Match = {
    id: 'm-1',
    rankingId: 'r-1',
    teamOneId: 'team-1',
    teamTwoId: 'team-2',
    teamOneName: 'Equipo 1',
    teamTwoName: 'Equipo 2',
    setsTeamOne: null,
    setsTeamTwo: null,
    pointsTeamOne: null,
    pointsTeamTwo: null,
    status: 'PENDING_RESULT',
    matchDate: '2026-03-15',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitResultModalComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitResultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the submit result modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should validate 2-0 match by games (6-3, 6-4) and calculate sets, games and points', () => {
    component.set1TeamOne = 6;
    component.set1TeamTwo = 3;
    component.set2TeamOne = 6;
    component.set2TeamTwo = 4;

    expect(component.isThirdSetNeeded()).toBe(false);
    expect(component.isFormValid()).toBe(true);
    expect(component.calculatedSetsOne()).toBe(2);
    expect(component.calculatedSetsTwo()).toBe(0);
    expect(component.calculatedGamesOne()).toBe(12);
    expect(component.calculatedGamesTwo()).toBe(7);
    expect(component.previewPointsOne()).toBe(5);
    expect(component.previewPointsTwo()).toBe(1);
  });

  it('should require 3rd set when score is 1-1 in sets (6-4, 3-6) and calculate 2-1 properly', () => {
    component.set1TeamOne = 6;
    component.set1TeamTwo = 4;
    component.set2TeamOne = 3;
    component.set2TeamTwo = 6;

    expect(component.isThirdSetNeeded()).toBe(true);
    expect(component.isFormValid()).toBe(false);

    component.set3TeamOne = 7;
    component.set3TeamTwo = 5;

    expect(component.isFormValid()).toBe(true);
    expect(component.calculatedSetsOne()).toBe(2);
    expect(component.calculatedSetsTwo()).toBe(1);
    expect(component.calculatedGamesOne()).toBe(16);
    expect(component.calculatedGamesTwo()).toBe(15);
    expect(component.previewPointsOne()).toBe(4);
    expect(component.previewPointsTwo()).toBe(2);
  });

  it('should emit submitResult when submitted', () => {
    fixture.componentRef.setInput('match', mockMatch);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();

    component.set1TeamOne = 6;
    component.set1TeamTwo = 2;
    component.set2TeamOne = 6;
    component.set2TeamTwo = 3;

    spyOn(component.submitResult, 'emit');
    component.onSubmit();

    expect(component.submitResult.emit).toHaveBeenCalledWith(jasmine.objectContaining({
      matchId: 'm-1',
      set1TeamOne: 6,
      set1TeamTwo: 2,
      set2TeamOne: 6,
      set2TeamTwo: 3,
      setsTeamOne: 2,
      setsTeamTwo: 0
    }));
  });
});
