import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandingsComponent } from './standings.component';
import { provideTranslateService } from '@ngx-translate/core';
import { ClassificationRow } from '@core';

describe('StandingsComponent', () => {
  let component: StandingsComponent;
  let fixture: ComponentFixture<StandingsComponent>;

  const mockClassification: ClassificationRow[] = [
    {
      position: 1,
      teamId: 't1',
      teamName: 'Equipo Alpha',
      player1: 'Juan Perez',
      player2: 'Carlos Gomez',
      played: 5,
      wins: 4,
      losses: 1,
      setsWon: 8,
      setsLost: 2,
      setsDiff: 6,
      pointsFor: 60,
      pointsAgainst: 40,
      pointsDiff: 20,
      totalPoints: 18
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingsComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(StandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the standings component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit modeChange when setMode is called', () => {
    let emittedMode: 'official' | 'provisional' | undefined;
    component.modeChange.subscribe((mode) => {
      emittedMode = mode;
    });

    component.setMode('provisional');
    expect(emittedMode).toBe('provisional');
  });

  it('should render table rows when classification is provided', () => {
    fixture.componentRef.setInput('classification', mockClassification);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Equipo Alpha');
    expect(compiled.textContent).toContain('Juan Perez • Carlos Gomez');
  });
});
