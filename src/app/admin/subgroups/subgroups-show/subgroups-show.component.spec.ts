import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupsShowComponent } from './subgroups-show.component';

describe('SubgroupsShowComponent', () => {
  let component: SubgroupsShowComponent;
  let fixture: ComponentFixture<SubgroupsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgroupsShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgroupsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
