import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from "./rooms.component";
import { CoreModule } from "../../core/core.module";
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsFormComponent } from './rooms-form/rooms-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsFormComponent,
  ],
    imports: [
        CommonModule,
        RoomsRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        SharedModule,
        MatInputModule,
        CoreModule,
        MatTableModule,
        MatTabsModule,

    ]
})
export class RoomsModule { }
