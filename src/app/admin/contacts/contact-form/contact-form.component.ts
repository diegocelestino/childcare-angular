import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {first} from "rxjs";
import {ContactCreateDto, OwnerType} from "../../../core/models/contact.model";
import {ContactService} from "../../../core/services/contact.service";
import {ObservationType} from "../../../core/models/observation.model";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  childId: string;
  ownerTypeClass = OwnerType;
  ownerTypeKeys: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private notificationServise: NotificationService,
  ) {
    this.form = this.buildForm();
    this.ownerTypeKeys = Object.keys(this.ownerTypeClass);
    this.childId = this.route.snapshot.paramMap.get('childId')!;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.createContact();
  }

  private createContact(){
    const contactCreateDto = new ContactCreateDto(
      this.form.value['ownerName'],
      this.form.value['ownerType'],
      this.form.value['cellphone'],
      this.childId
    )

    this.contactService.postContact(contactCreateDto).pipe
    (first()).subscribe({
      next: contactDto => {
        this.notificationServise.success("Contato cadastrada com sucesso");
        return this.router.navigate(['admin','children', this.childId]);
      },
      error: error =>
        console.log(error)
    });
  }

  private buildForm() {
    return this.formBuilder.group({
      ownerName: [''],
      ownerType: [''],
      cellphone: [''],
    });
  }

  backLink() {
    return this.router.navigate(['admin','children', this.childId]);
  }
}
