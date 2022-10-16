import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import { TeacherFormComponent } from './teacher-form/teacher-form.component';


@NgModule({
  declarations: [
    TeachersListComponent,
    TeacherFormComponent
  ],
    imports: [
        CommonModule,
        TeachersRoutingModule,
        CoreModule,
        SharedModule,
    ]
})
export class TeachersModule { }
