import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import {CoreModule} from "../core/core.module";
import {SubgroupsComponent} from './subgroups/subgroups.component';
import {ChildrenComponent} from './children/children.component';
import {ObservationsComponent} from './observations/observations.component';


@NgModule({
    declarations: [
        AdminComponent,
        SubgroupsComponent,
        ChildrenComponent,
        ObservationsComponent,
    ],
    exports: [
        AdminComponent
    ],

    imports: [
        AdminRoutingModule,
        CommonModule,
        CoreModule,

    ]
})
export class AdminModule { }
