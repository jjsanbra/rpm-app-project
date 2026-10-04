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

  it('should format status labels correctly', () => {
    expect(component.formatStatus('CONFIRMED')).toBe('Confirmado');
    expect(component.formatStatus('PENDING_CONFIRMATION')).toBe('Pendiente Confirmar');
    expect(component.formatStatus('DISPUTED')).toBe('En Disputa');
    expect(component.formatStatus('PENDING_RESULT')).toBe('Por Jugar');
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
});
