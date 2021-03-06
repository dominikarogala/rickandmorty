import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlViewComponent } from './graphql-view.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [GraphqlViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    ComponentsModule
  ]
})
export class GraphqlViewModule { }
