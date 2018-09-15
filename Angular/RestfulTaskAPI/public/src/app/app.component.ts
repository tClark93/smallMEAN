import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Users API';
  one = false;
  two = false; 
  three = false;
  four = false;
  users: string []

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    // this.getUsersFromService()
  }

  showAll(): void { 
    let observable = this._httpService.getUsers()
    observable.subscribe(data => {
    this.users = data['data'];
    this.one = true;
    this.two = false;
    this.three = false;
    this.four = false;
    console.log("got data", data['data'])
      
    })
  }

  showOne(): void { 
    let observable = this._httpService.getUsers()
    observable.subscribe(data => {
    this.users = data['data'];
    this.one = false;
    this.two = true;
    this.three = false;
    this.four = false;
    console.log("got data", data['data'])
    })
  }

  select(num): void { 
    console.log(num)
    let observable = this._httpService.select(num)
    observable.subscribe(data => {
    this.users = data['data'];
    this.one = false;
    this.two = false;
    this.three = false;
    this.four = true;
    console.log("got data", data['data'])
    })
  }

  create(): void { 
    let observable = this._httpService.getUsers()
    observable.subscribe(data => {
    this.users = data['data'];
    this.one = false;
    this.two = false;
    this.three = true;
    console.log("got data", data['data'])
    })
  }

  // getUsersFromService(){
  //   let observable = this._httpService.getUsers()
  //   observable.subscribe(data => {
  //     this.users = data['data'];
  //     console.log("got data", data['data'])
      
  //   })
  // }
}
