import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsGraphqlComponent } from './components/character-details-graphql/character-details-graphql.component';
import { CharacterDetailsRestComponent } from './components/character-details-rest/character-details-rest.component';
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
    path: 'characterdetailsrest/:id', 
    component: CharacterDetailsRestComponent
  },
  {
    path: 'characterdetailsgraphql/:id',
    component: CharacterDetailsGraphqlComponent
  }
  ,
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
