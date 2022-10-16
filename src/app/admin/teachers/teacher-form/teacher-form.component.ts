import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {first} from "rxjs";
import {TeacherCreateDto} from "../../../core/models/teacher.model";
import {TeacherService} from "../../../core/services/teacher.service";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private notificationServise: NotificationService,
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.createTeacher();
  }

  private createTeacher(){
    const teacherCreateDto = new TeacherCreateDto(
      this.form.value['name'],
    )

    this.teacherService.postTeacher(teacherCreateDto).pipe
    (first()).subscribe({
      next: teacherDto => {
        this.notificationServise.success("Professor(a) cadastrad(o)a com sucesso");
        return this.router.navigate(['admin','teachers']);
      },
      error: error =>
        console.log(error)
    });
  }

  private buildForm() {
    return this.formBuilder.group({
      name: ['']
    });
  }

  backLink() {
    return this.router.navigate(['admin','rooms']);
  }
}
