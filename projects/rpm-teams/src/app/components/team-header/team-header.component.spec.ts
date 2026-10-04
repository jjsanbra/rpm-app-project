import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamHeaderComponent } from './team-header.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Team } from '@core';

describe('TeamHeaderComponent', () => {
  let component: TeamHeaderComponent;
  let fixture: ComponentFixture<TeamHeaderComponent>;

  const mockTeam: Team = {
    id: 'team-1',
    name: 'Los Gladiadores',
    player1Name: 'Carlos',
    player1Surname: 'Sainz',
    player2Name: 'Fernando',
    player2Surname: 'Alonso',
    reserveName: 'Pedro',
    reserveSurname: 'De la Rosa',
    active: true,
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamHeaderComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the team header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render team name and players', () => {
    fixture.componentRef.setInput('team', mockTeam);
    fixture.componentRef.setInput('matchesCount', 10);
    fixture.componentRef.setInput('confirmedCount', 8);
    fixture.componentRef.setInput('pendingCount', 2);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Los Gladiadores');
    expect(compiled.textContent).toContain('Carlos Sainz');
    expect(compiled.textContent).toContain('Fernando Alonso');
    expect(compiled.textContent).toContain('Pedro De la Rosa');
  });
});
