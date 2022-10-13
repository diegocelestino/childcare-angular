import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubgroupsRoutingModule } from './subgroups-routing.module';
import { SubgroupsFormComponent } from './subgroups-form/subgroups-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {MatSelectModule} from "@angular/material/select";
import { SubgroupsShowComponent } from './subgroups-show/subgroups-show.component';
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [

    SubgroupsFormComponent,
     SubgroupsShowComponent
  ],
  imports: [
    CommonModule,
    SubgroupsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    MatMenuModule,

  ]
})
export class SubgroupsModule { }
