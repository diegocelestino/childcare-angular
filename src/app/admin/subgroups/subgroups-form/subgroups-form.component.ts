import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {SubgroupService} from "../../../core/services/subgroup.service";
import {SubgroupCreateDto} from "../../../core/models/subgroups.model";

@Component({
  selector: 'app-subgroups-form',
  templateUrl: './subgroups-form.component.html',
  styleUrls: ['./subgroups-form.component.scss']
})
export class SubgroupsFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private subgroupService: SubgroupService,
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
    this.createSubgroup();
  }

  private createSubgroup() {

    const subgroupCreateDto = new SubgroupCreateDto(
      this.form.value['cycle'],
      this.form.value['period'],
      this.form.value['capacity'],
      "c1eb4e88-e24a-49a3-bf6a-4b12b7575ebe"
    );

    this.subgroupService.postSubgroup(subgroupCreateDto).pipe()
      .subscribe({
        next: roomDto => {
          this.notificationServise.success("Sala cadastrada com sucesso");
          return this.router.navigate(['admin','rooms']);
        },
        error: error =>
          console.log(error)
      });

  }

  private buildForm() {
    return this.formBuilder.group({
      cycle: [''],
      period: [''],
      capacity: [''],
    });
  }

  field(path: string) {
    return this.form.get(path)!;
  }

  fieldErrors(path: string) {
    return this.field(path)?.errors;
  }

}
