import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }

  getUsers(){
    return this._http.get('/users')
  }

  editUser(user){
    return this._http.put(`/users/${user._id}`, user)
  }

  create(newUser){
    return this._http.post('/users', newUser)
  }

  delete(id){
    return this._http.delete('/users/'+id)
  }
  
}
