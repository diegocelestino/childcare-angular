import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupShowComponent } from './subgroup-show.component';

describe('SubgroupsShowComponent', () => {
  let component: SubgroupShowComponent;
  let fixture: ComponentFixture<SubgroupShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgroupShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgroupShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
