import { Component, OnInit } from '@angular/core';
import {RoomDto} from "../../../core/models/room.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../core/services/loader.service";
import {first} from "rxjs";
import {RoomService} from "../../../core/services/room.service";
import {SubgroupBasicDto, SubgroupDto} from "../../../core/models/subgroups.model";

@Component({
  selector: 'app-rooms-show',
  templateUrl: './rooms-show.component.html',
  styleUrls: ['./rooms-show.component.scss']
})
export class RoomsShowComponent implements OnInit {
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

  backLink() {
    return this.router.navigate(['admin', 'rooms']);
  }

  openSubgroup(subgroupId: string) {
    return this.router.navigate(['admin', 'subgroups', subgroupId]);
  }
}
