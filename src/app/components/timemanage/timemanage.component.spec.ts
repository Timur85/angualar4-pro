import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimemanageComponent } from './timemanage.component';

describe('TimemanageComponent', () => {
  let component: TimemanageComponent;
  let fixture: ComponentFixture<TimemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
