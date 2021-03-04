import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../interfaces/ICharacter';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  base = 'https://rickandmortyapi.com/api';

  constructor(private _http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    const url = this.base + '/character';
    return this._http.get<any>(url);
  }
}
