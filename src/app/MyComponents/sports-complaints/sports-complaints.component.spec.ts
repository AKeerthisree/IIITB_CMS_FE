import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsComplaintsComponent } from './sports-complaints.component';

describe('SportsComplaintsComponent', () => {
  let component: SportsComplaintsComponent;
  let fixture: ComponentFixture<SportsComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
