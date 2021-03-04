import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'

import { RestViewComponent } from './rest-view.component';



@NgModule({
  declarations: [RestViewComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class RestViewModule { }
