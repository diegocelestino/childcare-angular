import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildrenFormComponent} from "./children-form/children-form.component";

const routes: Routes = [
  {
    path: 'new',
    component: ChildrenFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
