import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {ChildService} from "../../../core/services/child.service";
import {ChildCreateDto, MovimentMap} from "../../../core/models/child.model";
import {first} from "rxjs";

@Component({
  selector: 'app-child-create-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  subgroupId: string;
  movimentMapClass = MovimentMap;
  movimentMapKeys: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private childService: ChildService,
    private notificationServise: NotificationService,
  ) {
    this.form = this.buildForm();
    this.movimentMapKeys = Object.keys(this.movimentMapClass);
    this.subgroupId = this.route.snapshot.paramMap.get('subgroupId')!;
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.createChild();
  }

  private createChild() {

    const childCreateDto = new ChildCreateDto(
      this.form.value['name'],
      this.form.value['birthDate'],
      this.form.value['registrationNumber'],
      this.form.value['registrationDate'],
      this.form.value['movimentMap'],
      this.subgroupId,
    );

    this.childService.postChild(childCreateDto).pipe
    (first()).subscribe({
        next: childDto => {
          this.notificationServise.success("Criança cadastrada com sucesso");
          return this.router.navigate(['admin','subgroups', this.subgroupId]);
        },
        error: error =>
          console.log(error)
      });
  }

  private buildForm() {
    return this.formBuilder.group({
      name: [''],
      birthDate: [''],
      registrationNumber: [''],
      registrationDate: [''],
      movimentMap: [''],

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
