import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoomDto} from "../../../core/models/room.model";
import {RoomService} from "../../../core/services/room.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

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
  ) {
    this.roomService.getRooms()
      .subscribe(rooms => {
        this.setOnLocalStorage(rooms);
        this.roomsDto = rooms.sort((a, b) =>
          a.number.toString().localeCompare(b.number.toLocaleString()));
      });

  }

  ngOnInit(): void {}

  setOnLocalStorage(rooms: RoomDto[]): void{
    rooms.forEach(room => {
      localStorage.setItem("room" + room.number, room.id + "ROOM" + room.number);
      }
    )
  }

  openRoom(roomId: string){
    this.router.navigate(['admin', 'rooms', roomId]);
  }
}
