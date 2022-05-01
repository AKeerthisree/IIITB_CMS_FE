import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComComplaintsComponent } from './place-com-complaints.component';

describe('PlaceComComplaintsComponent', () => {
  let component: PlaceComComplaintsComponent;
  let fixture: ComponentFixture<PlaceComComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceComComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceComComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
