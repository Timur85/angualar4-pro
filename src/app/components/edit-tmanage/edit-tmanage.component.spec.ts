import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTmanageComponent } from './edit-tmanage.component';

describe('EditTmanageComponent', () => {
  let component: EditTmanageComponent;
  let fixture: ComponentFixture<EditTmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
