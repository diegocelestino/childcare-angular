import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from "./rooms.component";
import {RoomFormComponent} from "./room-form/room-form.component";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";
import {RoomShowComponent} from "./room-show/room-show.component";


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
        component: RoomFormComponent,
      },
      {
        path: ':roomId',
        component: RoomShowComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
