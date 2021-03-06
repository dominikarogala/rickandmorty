import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IRestData } from 'src/app/interfaces/IRestData';
import { RestApiService } from './rest-api.service';

@Component({
    selector: 'app-rest-view',
    templateUrl: './rest-view.component.html',
    styleUrls: ['./rest-view.component.scss']
})
export class RestViewComponent implements OnInit {

    results$!: Observable<IRestData>;
    
    private _pageIndex: number = 1;

    constructor(private _rest: RestApiService) { }

    ngOnInit(): void {
        this._getAllCharacters();
    }

    pageChanged(event: any): void {
        this._pageIndex = event.pageIndex;
        this._getAllCharacters();
    }

    private _getAllCharacters(): void {
        this.results$ = this._rest.getAllCharacters(this._pageIndex);
    }
}
