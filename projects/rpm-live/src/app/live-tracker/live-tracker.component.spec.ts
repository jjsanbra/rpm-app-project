import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiveTrackerComponent } from './live-tracker.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { MatchesService, AuthService } from '@core';
import { of } from 'rxjs';

describe('LiveTrackerComponent', () => {
  let component: LiveTrackerComponent;
  let fixture: ComponentFixture<LiveTrackerComponent>;
  let confirmationService: ConfirmationService;
  let matchesService: MatchesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveTrackerComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        provideTranslateService(),
        MessageService,
        ConfirmationService,
        AuthService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveTrackerComponent);
    component = fixture.componentInstance;
    confirmationService = TestBed.inject(ConfirmationService);
    matchesService = TestBed.inject(MatchesService);
    fixture.detectChanges();
  });

  it('should create the live tracker component', () => {
    expect(component).toBeTruthy();
  });

  it('should prompt confirmation modal before signing acta', () => {
    const confirmSpy = spyOn(confirmationService, 'confirm').and.callFake((config: any) => {
      config.accept?.();
      return confirmationService;
    });
    const signSpy = spyOn(matchesService, 'postApiMatchesIdLiveSign').and.returnValue(of({ data: { status: 'CONFIRMED' } } as any));

    // Force canSign to be true by overriding session and user
    spyOn(component, 'canSign').and.returnValue(true);
    component.matchId.set('match-live-1');

    component.onSign();

    expect(confirmSpy).toHaveBeenCalled();
    expect(signSpy).toHaveBeenCalledWith('match-live-1');
  });
});
