import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubgroupsRoutingModule } from './subgroups-routing.module';
import { SubgroupsFormComponent } from './subgroups-form/subgroups-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [

    SubgroupsFormComponent
  ],
  imports: [
    CommonModule,
    SubgroupsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class SubgroupsModule { }
