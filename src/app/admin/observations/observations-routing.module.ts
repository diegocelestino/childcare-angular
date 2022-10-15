import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ObservationFormComponent} from "./observation-form/observation-form.component";

const routes: Routes = [
  {
    path: ':childId',
    component: ObservationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationsRoutingModule { }
