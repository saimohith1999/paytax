import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section80CComponent } from './section-80c.component';

describe('SectionCComponent', () => {
  let component: Section80CComponent;
  let fixture: ComponentFixture<Section80CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section80CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section80CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
