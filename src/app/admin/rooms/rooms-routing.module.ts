import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from "./rooms.component";
import {RoomsFormComponent} from "./rooms-form/rooms-form.component";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";


const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      {
        path: '',
        component: RoomsListComponent,
      },
      {
        path: 'new',
        component: RoomsFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
