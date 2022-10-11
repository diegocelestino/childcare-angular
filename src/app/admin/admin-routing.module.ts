import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'rooms',
        loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule),
        title: 'Salas'
      },
      {
        path: 'subgroups',
        loadChildren: () => import('./subgroups/subgroups.module').then(m => m.SubgroupsModule),
        title: 'Subgrupos'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
