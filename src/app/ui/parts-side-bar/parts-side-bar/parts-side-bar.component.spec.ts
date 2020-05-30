import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsSideBarComponent } from './parts-side-bar.component';

describe('PartsSideBarComponent', () => {
  let component: PartsSideBarComponent;
  let fixture: ComponentFixture<PartsSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
