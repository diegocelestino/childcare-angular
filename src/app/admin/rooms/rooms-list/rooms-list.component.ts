import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoomDto} from "../../../core/models/room.model";
import {RoomService} from "../../../core/services/room.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'sedName'];
  roomsDto: RoomDto[] = [];

  constructor(
    private roomService: RoomService,
  ) {
    this.roomService.getRooms()
      .subscribe(rooms => {
        this.roomsDto = rooms.sort((a, b) =>
          a.number.toString().localeCompare(b.number.toLocaleString()));
        console.log(rooms);
      });

  }

  ngOnInit(): void {}

  logId(id: string){
    console.log(id);
  }
}
