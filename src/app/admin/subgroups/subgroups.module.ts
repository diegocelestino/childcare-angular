import {NgModule} from '@angular/core';

import {SubgroupsRoutingModule} from './subgroups-routing.module';
import {SubgroupFormComponent} from './subgroup-form/subgroup-form.component';
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {SubgroupShowComponent} from './subgroup-show/subgroup-show.component';
import {ChildrenModule} from "../children/children.module";
import {SubgroupsListComponent} from './subgroups-list/subgroups-list.component';


@NgModule({
  declarations: [

    SubgroupFormComponent,
    SubgroupShowComponent,
    SubgroupsListComponent
  ],
  exports: [
    SubgroupsListComponent
  ],
  imports: [
    SubgroupsRoutingModule,
    CoreModule,
    SharedModule,
    ChildrenModule,
  ]
})
export class SubgroupsModule { }
