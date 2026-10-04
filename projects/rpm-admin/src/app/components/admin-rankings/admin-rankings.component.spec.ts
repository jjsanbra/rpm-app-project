import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminRankingsComponent } from './admin-rankings.component';
import { provideTranslateService } from '@ngx-translate/core';
import { Ranking } from '@core';

describe('AdminRankingsComponent', () => {
  let component: AdminRankingsComponent;
  let fixture: ComponentFixture<AdminRankingsComponent>;

  const mockRankings: Ranking[] = [
    {
      id: 'r-1',
      name: 'Ranking Verano 2026',
      startDate: '2026-06-01',
      endDate: '2026-08-31',
      locationName: 'Padel Club',
      levelName: 'Avanzado',
      categoryName: 'Masculino A',
      active: true,
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRankingsComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin rankings component', () => {
    expect(component).toBeTruthy();
  });

  it('should render rankings list', () => {
    fixture.componentRef.setInput('rankings', mockRankings);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Ranking Verano 2026');
    expect(compiled.textContent).toContain('Padel Club');
  });

  it('should emit toggleActive when clicked', () => {
    let toggled: Ranking | undefined;
    component.toggleActive.subscribe((r) => {
      toggled = r;
    });

    component.toggleActive.emit(mockRankings[0]);
    expect(toggled?.id).toBe('r-1');
  });
});
