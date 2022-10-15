import {NgModule} from '@angular/core';

import {RoomsRoutingModule} from './rooms-routing.module';
import {RoomsComponent} from "./rooms.component";
import {CoreModule} from "../../core/core.module";
import {RoomsListComponent} from './rooms-list/rooms-list.component';
import {RoomFormComponent} from './room-form/room-form.component';
import {SharedModule} from "../../shared/shared.module";
import {RoomShowComponent} from './room-show/room-show.component';
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
        CoreModule,
        SharedModule,
        SubgroupsModule,
    ]
})
export class RoomsModule { }
