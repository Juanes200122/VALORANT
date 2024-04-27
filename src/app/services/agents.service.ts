import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor(
    private _http:HttpClient
  ) { }

  public getItems(): Observable<any>{
    return this._http.get('https://valorant-api.com/v1/weapons');
  }
}
