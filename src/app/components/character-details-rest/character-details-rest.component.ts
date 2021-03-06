import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ICharacter } from 'src/app/interfaces/ICharacter';
import { RestApiService } from 'src/app/views/rest-view/rest-api.service';

@Component({
    selector: 'app-character-details0rest',
    templateUrl: './character-details-rest.component.html',
    styleUrls: ['./character-details-rest.component.scss']
})
export class CharacterDetailsRestComponent implements OnInit {

    character$!: Observable<ICharacter>;

    constructor(private _route: ActivatedRoute, private _rest: RestApiService) { }

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            this.character$ = this._rest.getCharacterDetails(params['id']);
        })
    };

}
