import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTmanageComponent } from './add-tmanage.component';

describe('AddTmanageComponent', () => {
  let component: AddTmanageComponent;
  let fixture: ComponentFixture<AddTmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
