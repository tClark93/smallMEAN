
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
    let dragonite = this._http.get('https://pokeapi.co/api/v2/pokemon/149/');
    dragonite.subscribe(data => console.log("This is "+data['name'], data))

  // } 
  // getAbilities(){
    let ability = this._http.get('https://pokeapi.co/api/v2/ability/39/');
    ability.subscribe(data => console.log("Other pokemon with the ability "+data['name']+":", data['pokemon'][6]['pokemon']['name']))
    
    
      ability.subscribe(data => console.log(data))
    
    // )
      
  }
}
