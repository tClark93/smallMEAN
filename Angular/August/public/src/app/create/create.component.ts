import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  newRestaurant = {name: "", cuisine: "", reviews: []}
  errName = ""
  errCuis = ""

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  create(): void { 
    let observable = this._httpService.create(this.newRestaurant)
    observable.subscribe(data => {
      if(data['message'] == "Error"){
        this.errName = ""
        this.errCuis = ""
        for (let key in data['data']['errors']) {
          if(key == 'name'){
            this.errName = data['data']['errors']['name']['message']
          }
          if(key == 'cuisine'){
            this.errCuis = data['data']['errors']['cuisine']['message']
          }
        }
      }
      else{
        console.log(data['data']);
        this._router.navigate(['/restaurants'])
      }
    });
  }
  
}
