import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICharacter } from 'src/app/interfaces/ICharacter';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-rest-view',
  templateUrl: './rest-view.component.html',
  styleUrls: ['./rest-view.component.scss']
})
export class RestViewComponent implements OnInit, OnDestroy {

  characters: ICharacter[] = [];

  charactersSub: Subscription | undefined;

  constructor(private _rest: RestApiService) { }

  ngOnInit(): void {
    this.charactersSub = this._rest.getAllCharacters().subscribe((data) => {
      this.characters = data.results;
    });
  }

  ngOnDestroy(): void {
    this.charactersSub?.unsubscribe();
  }
}
