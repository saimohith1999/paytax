import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section80CCDComponent } from './section80-ccd.component';

describe('Section80CCDComponent', () => {
  let component: Section80CCDComponent;
  let fixture: ComponentFixture<Section80CCDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section80CCDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section80CCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
