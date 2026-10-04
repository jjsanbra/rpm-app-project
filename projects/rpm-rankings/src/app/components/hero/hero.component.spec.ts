import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Ranking } from '@core';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  const mockRankings: Ranking[] = [
    {
      id: 'rank-1',
      name: 'Ranking Primavera 2026',
      startDate: '2026-03-01',
      endDate: '2026-06-30',
      active: true,
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the hero component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit rankingChange when onRankingChange is called', () => {
    let emittedId = '';
    component.rankingChange.subscribe((id) => {
      emittedId = id;
    });

    component.onRankingChange('rank-1');
    expect(emittedId).toBe('rank-1');
  });
});
