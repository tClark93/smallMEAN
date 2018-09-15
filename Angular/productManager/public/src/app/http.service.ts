import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/products')
  }

  getOne(id){
    return this._http.get(`/products/${id}`)
  }

  create(product){
    console.log("inside post http service")
    console.log("inside http service product is", product)
    return this._http.post('/products', product)
  }

  editProduct(product){
    console.log("inside service.ts")
    return this._http.put(`/products/${product.id}`, product)
  }

  delete(id){
    return this._http.delete('/products/'+id)
  }

}