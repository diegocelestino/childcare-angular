import { NgModule } from '@angular/core';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from "./rooms.component";
import { CoreModule } from "../../core/core.module";
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomFormComponent } from './room-form/room-form.component';
import {SharedModule} from "../../shared/shared.module";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDialogModule} from "@angular/material/dialog";
import { RoomShowComponent } from './room-show/room-show.component';
import {MatMenuModule} from "@angular/material/menu";
import {SubgroupsModule} from "../subgroups/subgroups.module";


@NgModule({
    declarations: [
        RoomsComponent,
        RoomsListComponent,
        RoomFormComponent,
        RoomShowComponent,
    ],
    exports: [
        RoomsListComponent
    ],
    imports: [
        RoomsRoutingModule,
        SharedModule,
        CoreModule,
        MatListModule,
        MatGridListModule,
        MatExpansionModule,
        MatDialogModule,
        MatMenuModule,
        SubgroupsModule,
    ]
})
export class RoomsModule { }
