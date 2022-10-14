import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule } from './children-routing.module';
import { ChildrenFormComponent } from './children-create-form/children-form.component';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import { ChildrenShowComponent } from './children-show/children-show.component';
import {MatMenuModule} from "@angular/material/menu";
import { ChildrenUpdateFormComponent } from './children-update-form/children-update-form.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInput, MatInputModule} from "@angular/material/input";
import { ChildrenListComponent } from './children-list/children-list.component';


@NgModule({
    declarations: [
        ChildrenFormComponent,
        ChildrenShowComponent,
        ChildrenUpdateFormComponent,
        ChildrenListComponent
    ],
    exports: [
        ChildrenFormComponent,
        ChildrenListComponent
    ],
    imports: [
        CommonModule,
        ChildrenRoutingModule,
        SharedModule,
        CoreModule,
        MatMenuModule,

    ]
})
export class ChildrenModule { }
