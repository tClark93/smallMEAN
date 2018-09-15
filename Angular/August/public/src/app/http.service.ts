import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/establishments')
  }

  getOne(id){
    return this._http.get(`/establishments/${id}`)
  }

  create(restaurant){
    console.log("inside post http service")
    console.log("inside http service product is", restaurant)
    return this._http.post('/establishments', restaurant)
  }

  editRestaurant(restaurant){
    console.log("inside service.ts")
    return this._http.put(`/establishments/${restaurant.id}`, restaurant)
  }

  review(restaurant, review){
    console.log("made it to rate in service file")
    console.log("made it to rate in service file, restaurant id: ", restaurant.id)
    return this._http.post(`/establishments/${restaurant.id}`, review)
  }

  delete(id){
    return this._http.delete('/establishments/'+id)
  }

}
