import { NgModule } from '@angular/core';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from "./rooms.component";
import { CoreModule } from "../../core/core.module";
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsFormComponent } from './rooms-form/rooms-form.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        RoomsComponent,
        RoomsListComponent,
        RoomsFormComponent,
    ],
    exports: [
        RoomsListComponent
    ],
    imports: [
        RoomsRoutingModule,
        SharedModule,
        CoreModule,
    ]
})
export class RoomsModule { }
