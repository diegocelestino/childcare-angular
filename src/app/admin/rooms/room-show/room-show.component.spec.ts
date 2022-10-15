import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomShowComponent } from './room-show.component';

describe('RoomsShowComponent', () => {
  let component: RoomShowComponent;
  let fixture: ComponentFixture<RoomShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
