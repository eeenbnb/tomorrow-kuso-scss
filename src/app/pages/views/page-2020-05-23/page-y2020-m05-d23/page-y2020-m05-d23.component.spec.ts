import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageY2020M05D23Component } from './page-y2020-m05-d23.component';

describe('PageY2020M05D23Component', () => {
  let component: PageY2020M05D23Component;
  let fixture: ComponentFixture<PageY2020M05D23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageY2020M05D23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageY2020M05D23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
