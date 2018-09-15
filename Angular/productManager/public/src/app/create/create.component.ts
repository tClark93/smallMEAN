import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  products = []
  newProduct = {name: "", price: 0, image: ""}
  errorName = false
  errorPrice = false
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  create(): void { 
    console.log("This is the product i'm sending back", this.newProduct)
    let observable = this._httpService.create(this.newProduct)
    observable.subscribe(data => {
      console.log(data)
      if(data['errors']['name']['message'] != null){
        this.errorName = data['errors']['name']['message']
      }
      if(data['errors']['price']['message'] != null){
        this.errorPrice = data['errors']['price']['message']
      }
    this.products = data['data'];
    })
    this.newProduct = {name: "", price: 0, image: ""}
  
    if(this.errorPrice == null && this.errorName == null ){
      this._router.navigate(['/all'])
    }
  }

}
