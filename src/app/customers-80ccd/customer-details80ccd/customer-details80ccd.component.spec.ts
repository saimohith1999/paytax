import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetails80CCDComponent } from './customer-details80ccd.component';

describe('CustomerDetails80DComponent', () => {
  let component: CustomerDetails80CCDComponent;
  let fixture: ComponentFixture<CustomerDetails80CCDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetails80CCDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetails80CCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
