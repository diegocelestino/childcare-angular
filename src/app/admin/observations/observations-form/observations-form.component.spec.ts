import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationsFormComponent } from './observations-form.component';

describe('ObservationsFormComponent', () => {
  let component: ObservationsFormComponent;
  let fixture: ComponentFixture<ObservationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservationsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
