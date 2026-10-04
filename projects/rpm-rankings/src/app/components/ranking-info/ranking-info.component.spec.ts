import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingInfoComponent } from './ranking-info.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Ranking } from '@core';

describe('RankingInfoComponent', () => {
  let component: RankingInfoComponent;
  let fixture: ComponentFixture<RankingInfoComponent>;

  const mockRanking: Ranking = {
    id: 'rank-1',
    name: 'Ranking Primavera 2026',
    startDate: '2026-03-01',
    endDate: '2026-06-30',
    locationName: 'Club Padel Central',
    levelName: 'Intermedio',
    categoryName: 'Masculino B',
    active: true,
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingInfoComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(RankingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ranking info component', () => {
    expect(component).toBeTruthy();
  });

  it('should render ranking info when ranking is provided', () => {
    fixture.componentRef.setInput('ranking', mockRanking);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Club Padel Central');
    expect(compiled.textContent).toContain('Intermedio');
    expect(compiled.textContent).toContain('Masculino B');
  });
});
