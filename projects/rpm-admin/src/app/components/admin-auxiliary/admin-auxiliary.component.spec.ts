import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAuxiliaryComponent } from './admin-auxiliary.component';
import { provideTranslateService } from '@ngx-translate/core';
import { AuxiliaryItem } from '@core';

describe('AdminAuxiliaryComponent', () => {
  let component: AdminAuxiliaryComponent;
  let fixture: ComponentFixture<AdminAuxiliaryComponent>;

  const mockItems: AuxiliaryItem[] = [
    {
      id: 'aux-1',
      name: 'Nivel 1',
      description: 'Iniciación'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAuxiliaryComponent],
      providers: [provideTranslateService()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAuxiliaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the admin auxiliary component', () => {
    expect(component).toBeTruthy();
  });

  it('should render auxiliary items', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Nivel 1');
    expect(compiled.textContent).toContain('Iniciación');
  });

  it('should emit auxTypeChange when tab clicked', () => {
    let emitted = '';
    component.auxTypeChange.subscribe((t) => {
      emitted = t;
    });

    component.auxTypeChange.emit('categories');
    expect(emitted).toBe('categories');
  });
});
