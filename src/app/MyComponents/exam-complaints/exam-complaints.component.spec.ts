import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamComplaintsComponent } from './exam-complaints.component';

describe('ExamComplaintsComponent', () => {
  let component: ExamComplaintsComponent;
  let fixture: ComponentFixture<ExamComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
