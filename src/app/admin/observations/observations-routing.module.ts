import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ObservationFormComponent} from "./observation-form/observation-form.component";
import {ObservationUpdateFormComponent} from "./observation-update-form/observation-update-form.component";

const routes: Routes = [
  {
    path: ':childId',
    component: ObservationFormComponent,
  },
  {
    path: 'update/:observationId',
    component: ObservationUpdateFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationsRoutingModule { }
