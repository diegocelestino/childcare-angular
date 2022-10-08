import { Component, OnInit } from '@angular/core';
import {RoomDto} from "../../../core/models/room.model";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {RoomService} from "../../../core/services/room.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'sedName'];
  dataSource: Observable<RoomDto[]>;

  constructor(
    private roomService: RoomService,
  ) {
    this.dataSource = this.roomService.getRooms()
      .pipe(
      map(results => results.sort((a, b) =>
        a.number.toLocaleString().localeCompare(b.number.toLocaleString())))
    );
  }

  ngOnInit(): void {}

}
