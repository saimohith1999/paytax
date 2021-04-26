import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersList80CCDComponent } from './customers-list80ccd.component';

describe('CustomersList80CCDComponent', () => {
  let component: CustomersList80CCDComponent;
  let fixture: ComponentFixture<CustomersList80CCDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersList80CCDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersList80CCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
