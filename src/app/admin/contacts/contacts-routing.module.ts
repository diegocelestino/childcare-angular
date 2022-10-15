import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactFormComponent} from "./contact-form/contact-form.component";

const routes: Routes = [
  {
    path: ':childId',
    component: ContactFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
