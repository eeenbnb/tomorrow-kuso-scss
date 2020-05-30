import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementY2020M05D23Component } from './element-y2020-m05-d23.component';

describe('ElementY2020M05D23Component', () => {
  let component: ElementY2020M05D23Component;
  let fixture: ComponentFixture<ElementY2020M05D23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementY2020M05D23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementY2020M05D23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
