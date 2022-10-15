import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {first} from "rxjs";
import {ContactDto} from "../../../core/models/contact.model";
import {ContactService} from "../../../core/services/contact.service";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contactsDto: ContactDto[] =[]
  childId: string;
  displayedColumns: string[] = ['ownerName', 'ownerType', 'cellphone', 'actions'];

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
  ) {
    this.childId = this.route.snapshot.paramMap.get('childId')!;
  }

  ngOnInit(): void {
    this.getContactsByChildId(this.childId);
  }

  private getContactsByChildId(childId: string) {
    this.contactService.getContactsByChildId(childId)
      .pipe(first())
      .subscribe({
          next: contacts => {
            this.contactsDto = contacts;
          }
        }
      )
  }

  newContact(childId: string) {
    this.router.navigate(['admin', 'guardians', childId]);
  }

  deleteContact(contactId: string) {
    this.contactService.deleteContact(contactId)
      .pipe(first())
      .subscribe({
          next: ()=> {
            this.notificationService.success("Contato excluído com sucesso");
            this.getContactsByChildId(this.childId);
          },
        }
      )
  }
}
