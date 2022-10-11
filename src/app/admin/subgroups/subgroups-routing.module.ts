import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomsComponent} from "../rooms/rooms.component";
import {RoomsListComponent} from "../rooms/rooms-list/rooms-list.component";
import {RoomsFormComponent} from "../rooms/rooms-form/rooms-form.component";
import {SubgroupsComponent} from "./subgroups.component";
import {SubgroupsFormComponent} from "./subgroups-form/subgroups-form.component";

const routes: Routes = [
  {
    path: '',
    component: SubgroupsComponent,
    children: [
      {
        path: 'new',
        component: SubgroupsFormComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubgroupsRoutingModule { }
