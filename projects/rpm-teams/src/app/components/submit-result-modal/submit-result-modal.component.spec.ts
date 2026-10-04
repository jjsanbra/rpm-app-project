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

  it('should compute preview points correctly for 2-0 score', () => {
    component.setScore(2, 0);
    expect(component.previewPointsOne()).toBe(5);
    expect(component.previewPointsTwo()).toBe(1);
  });

  it('should compute preview points correctly for 1-2 score', () => {
    component.setScore(1, 2);
    expect(component.previewPointsOne()).toBe(2);
    expect(component.previewPointsTwo()).toBe(4);
  });

  it('should emit submitResult when submitted', () => {
    fixture.componentRef.setInput('match', mockMatch);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();

    component.setScore(2, 1);

    let emittedData: any;
    component.submitResult.subscribe((data) => {
      emittedData = data;
    });

    component.onSubmit();
    expect(emittedData).toBeDefined();
    expect(emittedData.matchId).toBe('m-1');
    expect(emittedData.setsTeamOne).toBe(2);
    expect(emittedData.setsTeamTwo).toBe(1);
  });
});
