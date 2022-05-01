import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SACComplaintsComponent } from './sac-complaints.component';

describe('SACComplaintsComponent', () => {
  let component: SACComplaintsComponent;
  let fixture: ComponentFixture<SACComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SACComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SACComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
