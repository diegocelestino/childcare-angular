import {Component, OnInit} from '@angular/core';
import {RoomDto} from "../../../core/models/room.model";
import {RoomService} from "../../../core/services/room.service";
import {Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  roomsDto: RoomDto[] = [];

  constructor(
    private roomService: RoomService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getRooms();
  }

  private getRooms() {
    this.roomService.getRooms()
      .pipe(first())
      .subscribe({
          next: rooms => {
            this.roomsDto = rooms.sort((a, b) =>
              a.number.toString().localeCompare(b.number.toLocaleString()));
          }
        }
      )
  }

  openRoom(roomId: string){
    this.router.navigate(['admin', 'rooms', roomId]);
  }
}
