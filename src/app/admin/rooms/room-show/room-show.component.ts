import { Component, OnInit } from '@angular/core';
import {RoomDto} from "../../../core/models/room.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../core/services/loader.service";
import {first} from "rxjs";
import {RoomService} from "../../../core/services/room.service";
import {SubgroupBasicDto, SubgroupDto} from "../../../core/models/subgroups.model";

@Component({
  selector: 'app-room-show',
  templateUrl: './room-show.component.html',
  styleUrls: ['./room-show.component.scss']
})
export class RoomShowComponent implements OnInit {
  roomDto: RoomDto | undefined;
  subgroups: SubgroupBasicDto[] = [];
  roomId: string;
  displayedColumns: string[] = ['cycle', 'period'];

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
  ) {
    this.roomId = this.route.snapshot.paramMap.get('roomId')!;
  }

  ngOnInit(): void {
    this.getRoom(this.roomId);
  }

  private getRoom(roomId: string) {
    this.roomService.getRoomById(roomId)
      .pipe(first())
      .subscribe({
          next: roomDto => {
            this.roomDto = roomDto;
            this.subgroups = roomDto.subgroups;
            this.loaderService.hide();
          }
        }
      )
  }

  openSubgroupsForm() {
    return this.router.navigate(['admin', 'subgroups', 'new', this.roomId]);
  }

  backLink() {
    return this.router.navigate(['admin', 'rooms']);
  }

}
