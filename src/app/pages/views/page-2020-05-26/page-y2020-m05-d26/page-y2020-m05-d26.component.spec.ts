import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageY2020M05D26Component } from './page-y2020-m05-d26.component';

describe('PageY2020M05D26Component', () => {
  let component: PageY2020M05D26Component;
  let fixture: ComponentFixture<PageY2020M05D26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageY2020M05D26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageY2020M05D26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
