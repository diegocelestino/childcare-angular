import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildrenFormComponent} from "../children/children-create-form/children-form.component";
import {ObservationsFormComponent} from "./observations-form/observations-form.component";

const routes: Routes = [
  {
    path: ':childId',
    component: ObservationsFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationsRoutingModule { }
