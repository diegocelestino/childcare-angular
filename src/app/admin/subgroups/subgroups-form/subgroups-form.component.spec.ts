import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupsFormComponent } from './subgroups-form.component';

describe('SubgroupsFormComponent', () => {
  let component: SubgroupsFormComponent;
  let fixture: ComponentFixture<SubgroupsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgroupsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgroupsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
