import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import {SharedModule} from "../shared/shared.module";
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import { PeriodPipe } from './pipes/period.pipe';
import { CyclePipe } from './pipes/cycle.pipe';
import {MatMenuModule} from "@angular/material/menu";
import { MovimentMapPipe } from './pipes/moviment-map.pipe';

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminPageComponent,
    PeriodPipe,
    CyclePipe,
    MovimentMapPipe
  ],

  exports: [
    AdminHeaderComponent,
    AdminPageComponent,
    PeriodPipe,
    CyclePipe,
    MovimentMapPipe
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
  ]
})
export class CoreModule { }
