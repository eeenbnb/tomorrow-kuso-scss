import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsFooterComponent } from './parts-footer.component';

describe('PartsFooterComponent', () => {
  let component: PartsFooterComponent;
  let fixture: ComponentFixture<PartsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
