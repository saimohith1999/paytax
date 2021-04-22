import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomer80DComponent } from './create-customer80d.component';

describe('CreateCustomerComponent', () => {
  let component: CreateCustomer80DComponent;
  let fixture: ComponentFixture<CreateCustomer80DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomer80DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomer80DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
