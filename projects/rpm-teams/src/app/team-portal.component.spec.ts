import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamPortalComponent } from './team-portal.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { MatchesService, Match } from '@core';
import { of } from 'rxjs';

describe('TeamPortalComponent', () => {
  let component: TeamPortalComponent;
  let fixture: ComponentFixture<TeamPortalComponent>;
  let confirmationService: ConfirmationService;
  let matchesService: MatchesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamPortalComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTranslateService(),
        MessageService,
        ConfirmationService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamPortalComponent);
    component = fixture.componentInstance;
    confirmationService = TestBed.inject(ConfirmationService);
    matchesService = TestBed.inject(MatchesService);
    fixture.detectChanges();
  });

  it('should create the team portal component', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close submit modal', () => {
    const dummyMatch: any = { id: 'm-1', teamOneName: 'T1', teamTwoName: 'T2' };
    component.openSubmitModal(dummyMatch);
    expect(component.showSubmitModal()).toBeTrue();
    expect(component.activeSubmitMatch()?.id).toBe('m-1');

    component.closeSubmitModal();
    expect(component.showSubmitModal()).toBeFalse();
    expect(component.activeSubmitMatch()).toBeNull();
  });

  it('should open and close dispute modal', () => {
    const dummyMatch: any = { id: 'm-1', teamOneName: 'T1', teamTwoName: 'T2' };
    component.openDisputeModal(dummyMatch);
    expect(component.showDisputeModal()).toBeTrue();
    expect(component.activeDisputeMatch()?.id).toBe('m-1');

    component.closeDisputeModal();
    expect(component.showDisputeModal()).toBeFalse();
    expect(component.activeDisputeMatch()).toBeNull();
  });

  it('should prompt confirmation modal before confirming match result', () => {
    const confirmSpy = spyOn(confirmationService, 'confirm').and.callFake((config: any) => {
      config.accept?.();
      return confirmationService;
    });
    const postConfirmSpy = spyOn(matchesService, 'postApiMatchesIdConfirm').and.returnValue(of({ data: {} } as any));

    const dummyMatch: Match = {
      id: 'm-123',
      rankingId: 'r-1',
      teamOneId: 't-1',
      teamTwoId: 't-2',
      set1TeamOne: 6,
      set1TeamTwo: 4,
      set2TeamOne: 6,
      set2TeamTwo: 3,
      status: 'PENDING_CONFIRMATION'
    };

    component.confirmMatch(dummyMatch);

    expect(confirmSpy).toHaveBeenCalled();
    expect(postConfirmSpy).toHaveBeenCalledWith('m-123');
  });
});

