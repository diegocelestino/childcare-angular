import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenUpdateFormComponent } from './children-update-form.component';

describe('ChildrenUpdateFormComponent', () => {
  let component: ChildrenUpdateFormComponent;
  let fixture: ComponentFixture<ChildrenUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
