import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerDeductionComponent } from './create-customer-deduction.component';

describe('CreateCustomerDeductionComponent', () => {
  let component: CreateCustomerDeductionComponent;
  let fixture: ComponentFixture<CreateCustomerDeductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerDeductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
