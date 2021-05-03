import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CustomerDetailsDeductionComponent  } from './customer-details-deduction.component';

describe('CustomerDetailsDeductionComponent ', () => {
  let component: CustomerDetailsDeductionComponent ;
  let fixture: ComponentFixture<CustomerDetailsDeductionComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsDeductionComponent  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsDeductionComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
