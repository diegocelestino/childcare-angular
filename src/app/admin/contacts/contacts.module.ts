import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [

    ContactsListComponent,
     ContactFormComponent
  ],
  exports: [
    ContactsListComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    CoreModule,
    SharedModule,
  ]
})
export class ContactsModule { }
