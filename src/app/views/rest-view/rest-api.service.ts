import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../../interfaces/ICharacter';

import { IRestData } from '../../interfaces/IRestData';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  base = 'https://rickandmortyapi.com/api';

  constructor(private _http: HttpClient) { }

  getAllCharacters(pageIndex: number): Observable<IRestData> {
    const url = this.base + '/character/?page=' + pageIndex;
    return this._http.get<IRestData>(url);
  }

  getCharacterDetails(id: number): Observable<ICharacter> {
    const url = this.base + '/character/' + id;
    return this._http.get<ICharacter>(url); 
  }
}
