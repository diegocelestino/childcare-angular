import { Component, OnInit } from '@angular/core';
import {SubgroupBasicDto, SubgroupDto} from "../../../core/models/subgroups.model";
import {RoomService} from "../../../core/services/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../core/services/loader.service";
import {first} from "rxjs";
import {SubgroupService} from "../../../core/services/subgroup.service";

@Component({
  selector: 'app-subgroups-list',
  templateUrl: './subgroups-list.component.html',
  styleUrls: ['./subgroups-list.component.scss']
})
export class SubgroupsListComponent implements OnInit {
  subgroupsDto: SubgroupDto[] =[]
  roomId: string;
  displayedColumns: string[] = ['cycle', 'period'];

  constructor(
    private subgroupService: SubgroupService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
  ) {
    this.roomId = this.route.snapshot.paramMap.get('roomId')!;
  }

  ngOnInit(): void {
    this.getSubgroupsByRoomId(this.roomId);
  }

  private getSubgroupsByRoomId(roomId: string) {
    this.subgroupService.getSubgroupsByRoomById(roomId)
      .pipe(first())
      .subscribe({
          next: subgroups => {
            this.subgroupsDto = subgroups;
          }
        }
      )
  }

  openSubgroup(subgroupId: string) {
    return this.router.navigate(['admin', 'subgroups', subgroupId]);
  }
}
