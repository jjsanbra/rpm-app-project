import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamPortalComponent } from './team-portal.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

describe('TeamPortalComponent', () => {
  let component: TeamPortalComponent;
  let fixture: ComponentFixture<TeamPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamPortalComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTranslateService(),
        MessageService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamPortalComponent);
    component = fixture.componentInstance;
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
});
