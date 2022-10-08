import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import {SharedModule} from "../shared/shared.module";
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminPageComponent
  ],

  exports: [
    AdminHeaderComponent,
    AdminPageComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatCardModule,
  ]
})
export class CoreModule { }
