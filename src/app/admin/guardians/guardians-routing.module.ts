import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuardianFormComponent} from "./guardian-form/guardian-form.component";
import {GuardianUpdateFormComponent} from "./guardian-update-form/guardian-update-form.component";

const routes: Routes = [
  {
    path: ':childId',
    component: GuardianFormComponent,
  },
  {
    path: 'update/:guardianId',
    component: GuardianUpdateFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardiansRoutingModule { }
