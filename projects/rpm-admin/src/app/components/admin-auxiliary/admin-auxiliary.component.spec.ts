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

  it('should populate fields and emit updateItem on submitEdit', () => {
    let updatedPayload: any = null;
    component.updateItem.subscribe((payload) => {
      updatedPayload = payload;
    });

    component.openEditModal({
      id: 'loc-1',
      name: 'Club Padel',
      description: 'Pistas cristal',
      street: 'Gran Via 1',
      city: 'Madrid',
      postalCode: '28013'
    });

    expect(component.showEditModal).toBeTrue();
    expect(component.editName).toBe('Club Padel');
    expect(component.editStreet).toBe('Gran Via 1');

    fixture.componentRef.setInput('auxType', 'locations');
    component.editName = 'Club Padel Actualizado';
    component.submitEdit();

    expect(component.showEditModal).toBeFalse();
    expect(updatedPayload).toEqual({
      id: 'loc-1',
      data: {
        name: 'Club Padel Actualizado',
        description: 'Pistas cristal',
        street: 'Gran Via 1',
        city: 'Madrid',
        postalCode: '28013'
      }
    });
  });
});
