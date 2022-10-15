import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservationsRoutingModule } from './observations-routing.module';
import { ObservationsListComponent } from './observations-list/observations-list.component';
import { ObservationsFormComponent } from './observations-form/observations-form.component';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    ObservationsListComponent,
    ObservationsFormComponent
  ],
    exports: [
        ObservationsFormComponent,
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
