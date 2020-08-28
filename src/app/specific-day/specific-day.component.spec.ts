import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificDayComponent } from './specific-day.component';

describe('SpecificDayComponent', () => {
  let component: SpecificDayComponent;
  let fixture: ComponentFixture<SpecificDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
