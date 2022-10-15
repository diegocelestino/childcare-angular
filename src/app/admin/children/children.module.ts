import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule } from './children-routing.module';
import { ChildFormComponent } from './child-create-form/child-form.component';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import { ChildShowComponent } from './child-show/child-show.component';
import {MatMenuModule} from "@angular/material/menu";
import { ChildUpdateFormComponent } from './child-update-form/child-update-form.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInput, MatInputModule} from "@angular/material/input";
import { ChildrenListComponent } from './children-list/children-list.component';
import {ObservationsModule} from "../observations/observations.module";


@NgModule({
    declarations: [
        ChildFormComponent,
        ChildShowComponent,
        ChildUpdateFormComponent,
        ChildrenListComponent,
    ],
    exports: [
        ChildFormComponent,
        ChildrenListComponent
    ],
  imports: [
    CommonModule,
    ChildrenRoutingModule,
    SharedModule,
    CoreModule,
    MatMenuModule,
    ObservationsModule,

  ]
})
export class ChildrenModule { }
