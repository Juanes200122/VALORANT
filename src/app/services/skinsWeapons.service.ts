import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponsServideSkins {

  constructor(
    private _http:HttpClient
  ) { }

  public getSkins(): Observable<any>{
    return this._http.get('https://valorant-api.com/v1/weapons/skins');
  }
}
