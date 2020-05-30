import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementY2020M05D26Component } from './element-y2020-m05-d26.component';

describe('ElementY2020M05D26Component', () => {
  let component: ElementY2020M05D26Component;
  let fixture: ComponentFixture<ElementY2020M05D26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementY2020M05D26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementY2020M05D26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
