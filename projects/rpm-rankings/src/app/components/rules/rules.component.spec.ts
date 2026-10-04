import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RulesComponent } from './rules.component';
import { provideTranslateService } from '@ngx-translate/core';

describe('RulesComponent', () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the rules component', () => {
    expect(component).toBeTruthy();
  });
});
