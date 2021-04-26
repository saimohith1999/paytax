import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomer80CCDComponent } from './create-customer80ccd.component';

describe('CreateCustomerComponent', () => {
  let component: CreateCustomer80CCDComponent;
  let fixture: ComponentFixture<CreateCustomer80CCDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomer80CCDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomer80CCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
