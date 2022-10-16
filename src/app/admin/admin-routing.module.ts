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
      {
        path: 'children',
        loadChildren: () => import('./children/children.module').then(m => m.ChildrenModule),
        title: 'Criança'
      },
      {
        path: 'observations',
        loadChildren: () => import('./observations/observations.module').then(m => m.ObservationsModule),
        title: 'Observações'
      },
      {
        path: 'guardians',
        loadChildren: () => import('./guardians/guardians.module').then(m => m.GuardiansModule),
        title: 'Guardiões'
      },
      {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
        title: 'Contatos'
      },
      {
        path: 'teachers',
        loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule),
        title: 'Professoras e Professores'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
