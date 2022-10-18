import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {ContactUpdateFormComponent} from "./contact-update-form/contact-update-form.component";

const routes: Routes = [
  {
    path: ':childId',
    component: ContactFormComponent,
  },
  {
    path: 'update/:contactId',
    component: ContactUpdateFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
