import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminHeaderComponent } from './admin-header.component';
import { provideTranslateService } from '@ngx-translate/core';

describe('AdminHeaderComponent', () => {
  let component: AdminHeaderComponent;
  let fixture: ComponentFixture<AdminHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHeaderComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin header component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit tabChange when tab button is clicked', () => {
    let emittedTab = '';
    component.tabChange.subscribe((tab) => {
      emittedTab = tab;
    });

    component.tabChange.emit('teams');
    expect(emittedTab).toBe('teams');
  });
});
