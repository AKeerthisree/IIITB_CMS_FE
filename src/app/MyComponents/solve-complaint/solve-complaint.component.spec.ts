import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveComplaintComponent } from './solve-complaint.component';

describe('SolveComplaintComponent', () => {
  let component: SolveComplaintComponent;
  let fixture: ComponentFixture<SolveComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
