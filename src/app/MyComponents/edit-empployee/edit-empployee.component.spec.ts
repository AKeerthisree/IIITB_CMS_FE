import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpployeeComponent } from './edit-empployee.component';

describe('EditEmpployeeComponent', () => {
  let component: EditEmpployeeComponent;
  let fixture: ComponentFixture<EditEmpployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
