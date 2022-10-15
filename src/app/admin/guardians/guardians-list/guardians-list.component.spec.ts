import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansListComponent } from './guardians-list.component';

describe('GuardiansListComponent', () => {
  let component: GuardiansListComponent;
  let fixture: ComponentFixture<GuardiansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardiansListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardiansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
