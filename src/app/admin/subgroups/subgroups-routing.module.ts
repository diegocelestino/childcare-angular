import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubgroupsComponent} from "./subgroups.component";
import {SubgroupFormComponent} from "./subgroup-form/subgroup-form.component";
import {SubgroupShowComponent} from "./subgroup-show/subgroup-show.component";
import {SubgroupsRegisterComponent} from "./subgroups-register/subgroups-register.component";

const routes: Routes = [
  {
    path: '',
    component: SubgroupsComponent,
    children: [
      {
        path: 'new/:roomId',
        component: SubgroupFormComponent,
      },
      {
        path: ':subgroupId',
        component: SubgroupShowComponent,
      },
      {
        path: 'register/:subgroupId',
        component: SubgroupsRegisterComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubgroupsRoutingModule { }
