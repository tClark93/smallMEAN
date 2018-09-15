import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city){
    // return this._http.get(`https://samples.openweathermap.org/data/2.5/weather?q=${city},usa&appid=b6907d289e10d714a6e88b30761fae22`)
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=176071ac5211acbbe287543e2cdb9296`)

  }

}
