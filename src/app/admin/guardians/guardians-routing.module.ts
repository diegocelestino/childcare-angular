import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuardianFormComponent} from "./guardian-form/guardian-form.component";

const routes: Routes = [
  {
    path: ':childId',
    component: GuardianFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardiansRoutingModule { }
