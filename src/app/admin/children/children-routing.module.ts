import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildFormComponent} from "./child-create-form/child-form.component";
import {ChildShowComponent} from "./child-show/child-show.component";
import {ChildUpdateFormComponent} from "./child-update-form/child-update-form.component";

const routes: Routes = [
  {
    path: 'new/:subgroupId',
    component: ChildFormComponent,
  },
  {
    path: ':childId',
    component: ChildShowComponent,
  },
  {
    path: 'edit/:childId',
    component: ChildUpdateFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
