import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationFormComponent } from './observation-form.component';

describe('ObservationsFormComponent', () => {
  let component: ObservationFormComponent;
  let fixture: ComponentFixture<ObservationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
