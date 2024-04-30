import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(
    private _http:HttpClient
  ) { }

  public getMaps(): Observable<any>{
    return this._http.get('https://valorant-api.com/v1/maps');
  }
}
