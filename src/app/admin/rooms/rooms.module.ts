import { NgModule } from '@angular/core';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from "./rooms.component";
import { CoreModule } from "../../core/core.module";
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsFormComponent } from './rooms-form/rooms-form.component';
import {SharedModule} from "../../shared/shared.module";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDialogModule} from "@angular/material/dialog";
import { RoomsShowComponent } from './rooms-show/rooms-show.component';
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
    declarations: [
        RoomsComponent,
        RoomsListComponent,
        RoomsFormComponent,
        RoomsShowComponent,
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
    ]
})
export class RoomsModule { }
