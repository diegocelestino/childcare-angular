import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildrenFormComponent} from "./children-create-form/children-form.component";
import {ChildrenShowComponent} from "./children-show/children-show.component";
import {ChildrenUpdateFormComponent} from "./children-update-form/children-update-form.component";

const routes: Routes = [
  {
    path: 'new/:subgroupId',
    component: ChildrenFormComponent,
  },
  {
    path: ':childId',
    component: ChildrenShowComponent,
  },
  {
    path: 'edit/:childId',
    component: ChildrenUpdateFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
