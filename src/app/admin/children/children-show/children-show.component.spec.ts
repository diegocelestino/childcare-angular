import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenShowComponent } from './children-show.component';

describe('ChildrenShowComponent', () => {
  let component: ChildrenShowComponent;
  let fixture: ComponentFixture<ChildrenShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
