import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {first} from "rxjs";
import {ObservationDto, ObservationType} from "../../../core/models/observation.model";
import {ObservationService} from "../../../core/services/observation.service";
import {GuardianDto} from "../../../core/models/guardian.model";
import {GuardianService} from "../../../core/services/guardian.service";

@Component({
  selector: 'app-guardian-update-form',
  templateUrl: './guardian-update-form.component.html',
  styleUrls: ['./guardian-update-form.component.scss']
})
export class GuardianUpdateFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  guardianId: string;
  guardianDto: GuardianDto | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private guardianService: GuardianService,
    private notificationService: NotificationService,
  ) {
    this.guardianId = this.route.snapshot.paramMap.get('guardianId')!;
    this.form = this.buildForm();
    this.fetchGuardian();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.updateGuardian();
  }

  fetchGuardian() {
    this.guardianService.getGuardian(this.guardianId)
      .pipe(first())
      .subscribe(
        guardianDto => {
          this.guardianDto = guardianDto;
          this.form.patchValue(this.guardianDto);
        }
      )
  }

  private updateGuardian() {
    this.guardianService.putObservation(this.form.value)
      .pipe(first())
      .subscribe({
        next: guardianDto => {
          this.notificationService.success("Responsável atualizada com sucesso");
          return this.router.navigate(['admin', 'children', guardianDto.child.id]);
        },
        error: error => console.log(error)
      });
  }

  private buildForm() {
    return this.formBuilder.group({
      id:[''],
      name: [''],
      cpf: [''],
    });
  }

  backLink() {
    return this.router.navigate(['admin','children', this.guardianDto?.child.id]);
  }
}
