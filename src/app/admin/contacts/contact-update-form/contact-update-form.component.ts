import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ObservationDto, ObservationType} from "../../../core/models/observation.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ObservationService} from "../../../core/services/observation.service";
import {NotificationService} from "../../../core/services/notification.service";
import {first} from "rxjs";
import {ContactDto, OwnerType} from "../../../core/models/contact.model";
import {ContactService} from "../../../core/services/contact.service";

@Component({
  selector: 'app-contact-update-form',
  templateUrl: './contact-update-form.component.html',
  styleUrls: ['./contact-update-form.component.scss']
})
export class ContactUpdateFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  contactId: string;
  contactDto: ContactDto | undefined;
  ownerTypeClass = OwnerType;
  ownerTypeKeys: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private notificationService: NotificationService,
  ) {
    this.contactId = this.route.snapshot.paramMap.get('contactId')!;
    this.form = this.buildForm();
    this.fetchContact();
    this.ownerTypeKeys = Object.keys(this.ownerTypeClass);

  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.updateContact();
  }

  fetchContact() {
    this.contactService.getContact(this.contactId)
      .pipe(first())
      .subscribe(
        contactDto => {
          this.contactDto = contactDto;
          this.form.patchValue(this.contactDto);
        }
      )
  }

  private updateContact() {
    this.contactService.putContact(this.form.value)
      .pipe(first())
      .subscribe({
        next: contactDto => {
          this.notificationService.success("Contato atualizado com sucesso");
          return this.router.navigate(['admin', 'children', contactDto.child.id]);
        },
        error: error => console.log(error)
      });
  }

  private buildForm() {
    return this.formBuilder.group({
      id: [''],
      ownerName: [''],
      ownerType: [''],
      cellphone: [''],
    });
  }

  backLink() {
    return this.router.navigate(['admin','children', this.contactDto?.child.id]);
  }
}
