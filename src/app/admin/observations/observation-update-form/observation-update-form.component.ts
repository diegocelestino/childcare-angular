import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ObservationDto, ObservationType} from "../../../core/models/observation.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ObservationService} from "../../../core/services/observation.service";
import {NotificationService} from "../../../core/services/notification.service";
import {first} from "rxjs";

@Component({
  selector: 'app-observation-update-form',
  templateUrl: './observation-update-form.component.html',
  styleUrls: ['./observation-update-form.component.scss']
})
export class ObservationUpdateFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  observationId: string;
  observationDto: ObservationDto | undefined;
  observationTypeClass = ObservationType;
  observationTypeKeys: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private observationService: ObservationService,
    private notificationService: NotificationService,
  ) {
    this.observationId = this.route.snapshot.paramMap.get('observationId')!;
    this.form = this.buildForm();
    this.fetchObservation();
    this.observationTypeKeys = Object.keys(this.observationTypeClass);

  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.updateObservation();
  }

  fetchObservation() {
    this.observationService.getObservation(this.observationId)
      .pipe(first())
      .subscribe(
        observationDto => {
          this.observationDto = observationDto;
          this.form.patchValue(this.observationDto);
        }
      )
  }

  private updateObservation() {
    this.observationService.putObservation(this.form.value)
      .pipe(first())
      .subscribe({
        next: observationDto => {
          this.notificationService.success("Observação atualizada com sucesso");
          return this.router.navigate(['admin', 'children', observationDto.child.id]);
        },
        error: error => console.log(error)
      });
  }

  private buildForm() {
    return this.formBuilder.group({
      id:[''],
      observationType: [''],
      description: [''],
    });
  }

  backLink() {
    return this.router.navigate(['admin','children', this.observationDto?.child.id]);
  }
}
