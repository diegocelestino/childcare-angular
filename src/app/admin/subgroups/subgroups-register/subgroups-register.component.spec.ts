import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupsRegisterComponent } from './subgroups-register.component';

describe('SubgroupsRegisterComponent', () => {
  let component: SubgroupsRegisterComponent;
  let fixture: ComponentFixture<SubgroupsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgroupsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgroupsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
