import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the footer container and brand', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.footer')).toBeTruthy();
    expect(compiled.querySelector('.footer-brand')).toBeTruthy();
    expect(compiled.querySelector('.rule-box')).toBeTruthy();
  });
});
