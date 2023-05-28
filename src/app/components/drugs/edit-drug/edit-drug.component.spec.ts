import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrugComponent } from './edit-drug.component';

describe('EditDrugComponent', () => {
  let component: EditDrugComponent;
  let fixture: ComponentFixture<EditDrugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDrugComponent]
    });
    fixture = TestBed.createComponent(EditDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
