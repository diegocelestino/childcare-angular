import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservationsRoutingModule } from './observations-routing.module';
import { ObservationsListComponent } from './observations-list/observations-list.component';
import { ObservationFormComponent } from './observation-form/observation-form.component';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    ObservationsListComponent,
    ObservationFormComponent
  ],
    exports: [
        ObservationFormComponent,
        ObservationsListComponent
    ],
  imports: [
    CommonModule,
    ObservationsRoutingModule,
    SharedModule,
    CoreModule,
    MatMenuModule,
  ]
})
export class ObservationsModule { }
