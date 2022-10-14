import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsShowComponent } from './rooms-show.component';

describe('RoomsShowComponent', () => {
  let component: RoomsShowComponent;
  let fixture: ComponentFixture<RoomsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
