import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListDeductionComponent } from './customers-list-deduction.component';

describe('CustomersListDeductionComponent', () => {
  let component: CustomersListDeductionComponent;
  let fixture: ComponentFixture<CustomersListDeductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersListDeductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
