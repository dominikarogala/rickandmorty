import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphqlViewComponent } from './views/graphql-view/graphql-view.component';
import { RestViewComponent } from './views/rest-view/rest-view.component';

const routes: Routes = [
  {
    path: 'rest',
    component: RestViewComponent
  },
  {
    path: 'graphql',
    component: GraphqlViewComponent
  },
  {
    path: '**',
    redirectTo: 'rest'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
