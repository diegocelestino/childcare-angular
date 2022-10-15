import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservationsRoutingModule } from './observations-routing.module';
import { ObservationsListComponent } from './observations-list/observations-list.component';


@NgModule({
  declarations: [
    ObservationsListComponent
  ],
  imports: [
    CommonModule,
    ObservationsRoutingModule
  ]
})
export class ObservationsModule { }
