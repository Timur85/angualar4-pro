import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimemanagesComponent } from './timemanages.component';

describe('TimemanagesComponent', () => {
  let component: TimemanagesComponent;
  let fixture: ComponentFixture<TimemanagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimemanagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimemanagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
