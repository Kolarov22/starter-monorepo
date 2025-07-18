import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPickerComponent } from './formation-picker.component';

describe('FormationPickerComponent', () => {
  let component: FormationPickerComponent;
  let fixture: ComponentFixture<FormationPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
