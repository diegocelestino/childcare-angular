import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildShowComponent } from './child-show.component';

describe('ChildrenShowComponent', () => {
  let component: ChildShowComponent;
  let fixture: ComponentFixture<ChildShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
