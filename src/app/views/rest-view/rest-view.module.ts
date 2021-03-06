import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator'

import { RestViewComponent } from './rest-view.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [RestViewComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule,
        MatPaginatorModule
    ]
})
export class RestViewModule { }
