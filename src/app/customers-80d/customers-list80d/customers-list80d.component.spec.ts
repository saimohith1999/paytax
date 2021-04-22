import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersList80DComponent } from './customers-list80d.component';

describe('CustomersList80DComponent', () => {
  let component: CustomersList80DComponent;
  let fixture: ComponentFixture<CustomersList80DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersList80DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersList80DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
