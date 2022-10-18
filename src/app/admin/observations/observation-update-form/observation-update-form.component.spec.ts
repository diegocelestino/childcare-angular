import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationUpdateFormComponent } from './observation-update-form.component';

describe('ObservationUpdateFormComponent', () => {
  let component: ObservationUpdateFormComponent;
  let fixture: ComponentFixture<ObservationUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservationUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservationUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
