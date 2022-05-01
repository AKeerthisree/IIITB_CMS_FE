import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelComplaintsComponent } from './hostel-complaints.component';

describe('HostelComplaintsComponent', () => {
  let component: HostelComplaintsComponent;
  let fixture: ComponentFixture<HostelComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
