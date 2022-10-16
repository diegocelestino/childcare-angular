import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {first} from "rxjs";
import {TeacherDto} from "../../../core/models/teacher.model";
import {TeacherService} from "../../../core/services/teacher.service";

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {
  teachersDto: TeacherDto[] =[]
  displayedColumns: string[] = ['name', 'subgroups'];

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers() {
    this.teacherService.getTeachers()
      .pipe(first())
      .subscribe({
          next: teachers => {
            this.teachersDto = teachers;
          }
        }
      )
  }

  newTeacher() {
    this.router.navigate(['admin', 'teachers']);
  }

  deleteTeacher(teacherId: string) {
    this.teacherService.deleteTeacher(teacherId)
      .pipe(first())
      .subscribe({
          next: ()=> {
            this.notificationService.success("Professor(a) excluído(a) com sucesso");
            this.getTeachers();
          },
        }
      )
  }
}
