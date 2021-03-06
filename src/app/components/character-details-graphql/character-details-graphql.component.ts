
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ICharacter } from 'src/app/interfaces/ICharacter';

@Component({
  selector: 'app-character-details-graphql',
  templateUrl: './character-details-graphql.component.html',
  styleUrls: ['./character-details-graphql.component.scss']
})
export class CharacterDetailsGraphqlComponent implements OnInit {

  character$!: Observable<ICharacter>;

  constructor(private _route: ActivatedRoute, private _apollo: Apollo) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {

      this.character$ = this._apollo.watchQuery({
        query: gql`
        {
          character(id: ${params['id']}){
            name, 
            type, 
            gender, 
            status, 
            species,
            image, 
            origin {
              name
            }
          }
        }
        `
      })
        .valueChanges
        .pipe(
          map((result: any) => result?.data?.character)
        );
    })
  };

}
