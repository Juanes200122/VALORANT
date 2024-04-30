import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponsServide {

  constructor(
    private _http:HttpClient
  ) { }

  public getWeapons(): Observable<any>{
    return this._http.get('https://valorant-api.com/v1/weapons?language=es-ES');
  }
}
