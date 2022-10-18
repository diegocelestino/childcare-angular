import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianUpdateFormComponent } from './guardian-update-form.component';

describe('GuardianUpdateFormComponent', () => {
  let component: GuardianUpdateFormComponent;
  let fixture: ComponentFixture<GuardianUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardianUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
