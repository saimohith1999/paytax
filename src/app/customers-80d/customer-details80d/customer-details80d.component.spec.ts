import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetails80DComponent } from './customer-details80d.component';

describe('CustomerDetails80DComponent', () => {
  let component: CustomerDetails80DComponent;
  let fixture: ComponentFixture<CustomerDetails80DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetails80DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetails80DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
