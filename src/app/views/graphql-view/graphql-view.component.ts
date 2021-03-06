import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICharacter } from 'src/app/interfaces/ICharacter';

@Component({
    selector: 'app-graphql-view',
    templateUrl: './graphql-view.component.html',
    styleUrls: ['./graphql-view.component.scss']
})
export class GraphqlViewComponent implements OnInit {

    characters$!: Observable<ICharacter[]>;

    private _pageIndex: number = 1;

    constructor(private _apollo: Apollo) { }

    ngOnInit(): void {
        this._getAllCharacters();
    }

    pageChanged(event: any): void {
        this._pageIndex = event.pageIndex;
        this._getAllCharacters();
    }

    private _getAllCharacters(): void {
        this.characters$ = this._apollo.watchQuery({
            query: gql`
                {
                    characters(page: ${this._pageIndex}) {
                        results {
                            id, 
                            name,
                            type, 
                            image
                        }
                      }
                }
        `
        })
            .valueChanges
            .pipe(
                map((result: any) =>
                    result.data?.characters?.results
                )
            );
    }

}
