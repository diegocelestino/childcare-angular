import { Component, OnInit } from '@angular/core';
import {SubgroupService} from "../../../core/services/subgroup.service";
import {first} from "rxjs";
import {SubgroupDto} from "../../../core/models/subgroups.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../core/services/loader.service";
import {RegisterTeacherCreateDto, TeacherDto} from "../../../core/models/teacher.model";

@Component({
  selector: 'app-subgroup-show',
  templateUrl: './subgroup-show.component.html',
  styleUrls: ['./subgroup-show.component.scss']
})
export class SubgroupShowComponent implements OnInit {
  subgroupDto: SubgroupDto | undefined;
  teachersDto: TeacherDto[] = []
  subgroupId: string;
  displayedTeachersColumns = ['name', 'unregister'];

  constructor(
    private subgroupService: SubgroupService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
  ) {
    this.subgroupId = this.route.snapshot.paramMap.get('subgroupId')!;
  }

  ngOnInit(): void {
    this.loaderService.show()
    this.getSubgroup(this.subgroupId);
  }

  private getSubgroup(subgroupId: string) {
    this.subgroupService.getSubgroupById(subgroupId)
      .pipe(first())
      .subscribe({
          next: subgroupDto => {
            this.subgroupDto = subgroupDto;
            this.teachersDto = subgroupDto.teachers;
            this.loaderService.hide();
          }
        }
      )
  }

  unregisterTeacher(teacherId: string) {
    const unregisterTeacherDto = new RegisterTeacherCreateDto(
      this.subgroupId,
      teacherId,
    )

    this.subgroupService.postUnregisterTeacherOnSubgroup(unregisterTeacherDto)
      .pipe(first())
      .subscribe({
          next: subgroupDto => {
            this.subgroupDto = subgroupDto;
            this.getSubgroup(this.subgroupId);
          }
        }
      )
  }

  appendTeacher() {
    this.router.navigate(['admin', 'subgroups', 'register', this.subgroupId])
  }

  addNewChild() {
    this.router.navigate(['admin', 'children', 'new', this.subgroupId])
  }


  backLink() {
    this.router.navigate(['admin', 'rooms', this.subgroupDto?.room.id]);

  }

}
