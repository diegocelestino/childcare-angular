import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ChildDto, MovimentMap} from "../../../core/models/child.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ChildService} from "../../../core/services/child.service";
import {NotificationService} from "../../../core/services/notification.service";
import {first} from "rxjs";

@Component({
  selector: 'app-child-update-form',
  templateUrl: './child-update-form.component.html',
  styleUrls: ['./child-update-form.component.scss']
})
export class ChildUpdateFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  childId: string;
  childDto: ChildDto | undefined;
  movimentMapClass = MovimentMap;
  movimentMapKeys: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private childService: ChildService,
    private notificationService: NotificationService,
  ) {
    this.form = this.buildForm();
    this.movimentMapKeys = Object.keys(this.movimentMapClass);
    this.childId = this.route.snapshot.paramMap.get('childId')!;
    this.fetchChild();
  }

  ngOnInit() {

  }

  fetchChild() {
    this.childService.getChildById(this.childId)
      .pipe(first())
      .subscribe(
        childDto => {
          this.childDto = childDto;
          this.form.patchValue(this.childDto);
        }
      )
  }

  private buildForm() {
    return this.formBuilder.group({
      id: [''],
      name: [''],
      birthDate: [''],
      registrationNumber: [''],
      registrationDate: [''],
      movimentMap: [''],
      uniformDispatch: [''],
      uniformDelivered: [''],
      census: [''],

    });
  }
  field(path: string) {
    return this.form.get(path)!;
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.updateChild();
  }

  private updateChild() {
    this.childService.putAccount(this.form.value)
      .pipe(first())
      .subscribe({
        next: childDto => {
          this.notificationService.success("Criança atualizada com sucesso");
          return this.router.navigate(['admin', 'children', childDto.id]);
        },
        error: error => console.log(error)
      });
  }

  deleteChild() {
    this.childService.deleteChild(this.childId)
      .pipe(first())
      .subscribe({
          next: ()=> {
            this.notificationService.success("Criança excluída com sucesso");
            this.router.navigate(['admin', 'subgroups', this.childDto!.subgroup.id])
          },
        }
      )
  }

  backLink() {
    this.router.navigate(['admin', 'children', this.childId]);
  }
}
