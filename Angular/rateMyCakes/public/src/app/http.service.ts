import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes(){
    return this._http.get('/cakes')
  }

  create(newCake){
    return this._http.post('/cakes', newCake)
  }

  rate(cake, review){
    console.log("made it to rate in service file")
    return this._http.post(`/cakes/${cake._id}`, review)
  }

  // editUser(user){
  //   return this._http.put(`/users/${user._id}`, user)
  // }


  // delete(id){
  //   return this._http.delete('/users/'+id)
  // }
}

// app.get("/cakes", cakes.getAll)
// app.get("/cakes/:id",cakes.getOne)
// app.post("/cakes",cakes.create)
// app.post("/cakes/:id",cakes.rate)
// app.put("/cakes/:id",cakes.update)
// app.delete("/cakes/:id",cakes.delete)
