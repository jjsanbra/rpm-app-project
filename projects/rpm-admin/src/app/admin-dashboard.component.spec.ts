import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TeamsService, Team } from '@core';
import { of } from 'rxjs';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;
  let confirmationService: ConfirmationService;
  let teamsService: TeamsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTranslateService(),
        MessageService,
        ConfirmationService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    confirmationService = TestBed.inject(ConfirmationService);
    teamsService = TestBed.inject(TeamsService);
    fixture.detectChanges();
  });

  it('should create the admin dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should switch tabs', () => {
    component.setTab('teams');
    expect(component.activeTab()).toBe('teams');

    component.setTab('incidents');
    expect(component.activeTab()).toBe('incidents');
  });

  it('should set auxType and load aux items', () => {
    component.setAuxType('locations');
    expect(component.auxType()).toBe('locations');
  });

  it('should prompt confirmation modal before deleting team', () => {
    const confirmSpy = spyOn(confirmationService, 'confirm').and.callFake((config: any) => {
      config.accept?.();
      return confirmationService;
    });
    const deleteTeamSpy = spyOn(teamsService, 'deleteApiTeamsId').and.returnValue(of({ data: { message: 'Deleted' } } as any));

    const dummyTeam: Team = {
      id: 'team-99',
      name: 'Padel Stars'
    };

    component.handleDeleteTeam(dummyTeam);

    expect(confirmSpy).toHaveBeenCalled();
    expect(deleteTeamSpy).toHaveBeenCalledWith('team-99');
  });
});

