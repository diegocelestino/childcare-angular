import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {ObservationService} from "../../../core/services/observation.service";

import {ObservationCreateDto, ObservationType} from "../../../core/models/observation.model";
import {first} from "rxjs";

@Component({
  selector: 'app-observations-form',
  templateUrl: './observations-form.component.html',
  styleUrls: ['./observations-form.component.scss']
})
export class ObservationsFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  childId: string;
  observationTypeClass = ObservationType;
  observationTypeKeys: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private observationService: ObservationService,
    private notificationServise: NotificationService,
  ) {
    this.form = this.buildForm();
    this.observationTypeKeys = Object.keys(this.observationTypeClass);
    this.childId = this.route.snapshot.paramMap.get('childId')!;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.createObservation();
  }

  private createObservation(){
    const observationCreateDto = new ObservationCreateDto(
      this.childId,
      this.form.value['observationType'],
      this.form.value['description']
    )

    this.observationService.postObservation(observationCreateDto).pipe
    (first()).subscribe({
      next: observationDto => {
        this.notificationServise.success("Observação cadastrada com sucesso");
        return this.router.navigate(['admin','children', this.childId]);
      },
      error: error =>
        console.log(error)
    });
  }

  private buildForm() {
    return this.formBuilder.group({
      observationType: [''],
      description: [''],
    });
  }

  backLink() {
    return this.router.navigate(['admin','children', this.childId]);
  }
}
