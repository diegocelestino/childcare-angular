import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubgroupsRoutingModule } from './subgroups-routing.module';
import { SubgroupFormComponent } from './subgroup-form/subgroup-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import { SubgroupShowComponent } from './subgroup-show/subgroup-show.component';
import {MatMenuModule} from "@angular/material/menu";
import {ChildrenModule} from "../children/children.module";
import { SubgroupsListComponent } from './subgroups-list/subgroups-list.component';
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations: [

    SubgroupFormComponent,
    SubgroupShowComponent,
    SubgroupsListComponent
  ],
  exports: [
    SubgroupsListComponent
  ],
  imports: [
    CommonModule,
    SubgroupsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    MatMenuModule,
    ChildrenModule,
    MatGridListModule,

  ]
})
export class SubgroupsModule { }
