import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisputeModalComponent } from './dispute-modal.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Match } from '@core';

describe('DisputeModalComponent', () => {
  let component: DisputeModalComponent;
  let fixture: ComponentFixture<DisputeModalComponent>;

  const mockMatch: Match = {
    id: 'm-1',
    rankingId: 'r-1',
    teamOneId: 'team-1',
    teamTwoId: 'team-2',
    teamOneName: 'Equipo 1',
    teamTwoName: 'Equipo 2',
    setsTeamOne: 2,
    setsTeamTwo: 1,
    pointsTeamOne: 4,
    pointsTeamTwo: 2,
    status: 'PENDING_CONFIRMATION',
    matchDate: '2026-03-15',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisputeModalComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisputeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the dispute modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submitDispute when submitted with description', () => {
    fixture.componentRef.setInput('match', mockMatch);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();

    component.disputeDescription = 'Resultado incorrecto en el set 2';

    let emittedData: any;
    component.submitDispute.subscribe((data) => {
      emittedData = data;
    });

    component.onSubmit();
    expect(emittedData).toBeDefined();
    expect(emittedData.matchId).toBe('m-1');
    expect(emittedData.description).toBe('Resultado incorrecto en el set 2');
  });
});
