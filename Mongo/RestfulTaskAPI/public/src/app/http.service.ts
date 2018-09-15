
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    // this.getTasks();
  }
  getUsers(){
    return this._http.get('/users')
  }

  select(num){
    return this._http.get('/users/'+num)
  }
}
