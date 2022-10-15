import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUpdateFormComponent } from './child-update-form.component';

describe('ChildrenUpdateFormComponent', () => {
  let component: ChildUpdateFormComponent;
  let fixture: ComponentFixture<ChildUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
