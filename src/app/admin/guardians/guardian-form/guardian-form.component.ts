import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {GuardianService} from "../../../core/services/guardian.service";
import {first} from "rxjs";
import {GuardianCreateDto} from "../../../core/models/guardian.model";

@Component({
  selector: 'app-guardian-form',
  templateUrl: './guardian-form.component.html',
  styleUrls: ['./guardian-form.component.scss']
})
export class GuardianFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  childId: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private guardianService: GuardianService,
    private notificationServise: NotificationService,
  ) {
    this.form = this.buildForm();
    this.childId = this.route.snapshot.paramMap.get('childId')!;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.createGuardian();
  }

  private createGuardian(){
    const guardianCreateDto = new GuardianCreateDto(
      this.form.value['name'],
      this.form.value['cpf'],
      this.childId
    )

    this.guardianService.postGuardian(guardianCreateDto).pipe
    (first()).subscribe({
      next: guardianDto => {
        this.notificationServise.success("Guardião cadastrada com sucesso");
        return this.router.navigate(['admin','children', this.childId]);
      },
      error: error =>
        console.log(error)
    });
  }

  private buildForm() {
    return this.formBuilder.group({
      name: [''],
      cpf: [''],
    });
  }

  backLink() {
    return this.router.navigate(['admin','children', this.childId]);
  }
}
