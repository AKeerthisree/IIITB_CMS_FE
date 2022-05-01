import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodComComplaintsComponent } from './food-com-complaints.component';

describe('FoodComComplaintsComponent', () => {
  let component: FoodComComplaintsComponent;
  let fixture: ComponentFixture<FoodComComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodComComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodComComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
