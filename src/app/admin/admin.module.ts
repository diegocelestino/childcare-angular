import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from "./admin.component";
import {CoreModule} from "../core/core.module";


@NgModule({
    declarations: [
        AdminComponent
    ],
    exports: [
        AdminComponent
    ],

    imports: [
        CommonModule,
        CoreModule,
        AdminRoutingModule,
    ]
})
export class AdminModule { }