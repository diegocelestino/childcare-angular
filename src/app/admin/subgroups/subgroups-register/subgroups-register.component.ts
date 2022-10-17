import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SubgroupService} from "../../../core/services/subgroup.service";
import {NotificationService} from "../../../core/services/notification.service";
import {RegisterTeacherCreateDto, TeacherDto} from "../../../core/models/teacher.model";
import {first} from "rxjs";
import {TeacherService} from "../../../core/services/teacher.service";

@Component({
  selector: 'app-subgroups-register',
  templateUrl: './subgroups-register.component.html',
  styleUrls: ['./subgroups-register.component.scss']
})
export class SubgroupsRegisterComponent implements OnInit {
  form: FormGroup;
  teachersDto: TeacherDto[] =[];
  submitted: boolean = false;
  subgroupId: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private subgroupService: SubgroupService,
    private teacherService: TeacherService,
    private notificationServise: NotificationService,
  ) {
    this.form = this.buildForm();
    this.subgroupId = this.route.snapshot.paramMap.get('subgroupId')!;
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.registerTeacherOnSubgroup();
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

  private registerTeacherOnSubgroup() {
    const registerTeacherCreateDto = new RegisterTeacherCreateDto(
      this.subgroupId,
      this.form.value['teacher'],
    );

    console.log(registerTeacherCreateDto);

    this.subgroupService.postRegisterTeacherOnSubgroup(registerTeacherCreateDto).pipe()
      .subscribe({
        next: registerTeacherDto => {
          this.notificationServise.success("Professor(a) cadastrado(a) com sucesso");
          return this.router.navigate(['admin','subgroups', this.subgroupId]);
        },
        error: error =>
          console.log(error)
      });

  }

  private buildForm() {
    return this.formBuilder.group({
      teacher: ['']
    });
  }

  field(path: string) {
    return this.form.get(path)!;
  }

  fieldErrors(path: string) {
    return this.field(path)?.errors;
  }

  backLink() {
    this.router.navigate(['admin', 'subgroups', this.subgroupId]);
  }

}

