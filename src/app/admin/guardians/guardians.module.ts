import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardiansRoutingModule } from './guardians-routing.module';
import { GuardianFormComponent } from './guardian-form/guardian-form.component';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import { GuardiansListComponent } from './guardians-list/guardians-list.component';


@NgModule({
    declarations: [
        GuardianFormComponent,
        GuardiansListComponent
    ],
    exports: [
        GuardiansListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        GuardiansRoutingModule,
        CoreModule
    ]
})
export class GuardiansModule { }
