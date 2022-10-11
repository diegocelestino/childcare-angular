import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from "./admin.component";
import {CoreModule} from "../core/core.module";
import {RoomsModule} from "./rooms/rooms.module";
import { SubgroupsComponent } from './subgroups/subgroups.component';
import { ChildrenComponent } from './children/children.component';



@NgModule({
    declarations: [
        AdminComponent,
        SubgroupsComponent,
        ChildrenComponent,
    ],
    exports: [
        AdminComponent
    ],

  imports: [
    CommonModule,
    CoreModule,
    AdminRoutingModule,
    RoomsModule,
  ]
})
export class AdminModule { }
