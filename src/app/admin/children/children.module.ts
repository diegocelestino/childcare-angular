import {NgModule} from '@angular/core';

import {ChildrenRoutingModule} from './children-routing.module';
import {ChildFormComponent} from './child-create-form/child-form.component';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import {ChildShowComponent} from './child-show/child-show.component';
import {ChildUpdateFormComponent} from './child-update-form/child-update-form.component';
import {ChildrenListComponent} from './children-list/children-list.component';
import {ObservationsModule} from "../observations/observations.module";
import {GuardiansModule} from "../guardians/guardians.module";


@NgModule({
    declarations: [
        ChildFormComponent,
        ChildShowComponent,
        ChildUpdateFormComponent,
        ChildrenListComponent,
    ],
    exports: [
        ChildFormComponent,
        ChildrenListComponent
    ],
    imports: [
        ChildrenRoutingModule,
        CoreModule,
        SharedModule,
        ObservationsModule,
        GuardiansModule,
    ]
})
export class ChildrenModule { }
