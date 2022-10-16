import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeachersListComponent} from "./teachers-list/teachers-list.component";
import {TeacherFormComponent} from "./teacher-form/teacher-form.component";

const routes: Routes = [
  {
    path: '',
    component: TeachersListComponent,
  },
  {
    path: 'new',
    component: TeacherFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
