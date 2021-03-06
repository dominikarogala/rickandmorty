import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { CharacterComponent } from './character/character.component';
import { CharacterDetailsRestComponent } from './character-details-rest/character-details-rest.component';
import { CharacterDetailsGraphqlComponent } from './character-details-graphql/character-details-graphql.component';


@NgModule({
  declarations: [CharacterComponent, CharacterDetailsRestComponent, CharacterDetailsGraphqlComponent],
  imports: [
    CommonModule, 
    MatCardModule
  ],
  exports: [CharacterComponent, CharacterDetailsRestComponent]
})
export class ComponentsModule { }
