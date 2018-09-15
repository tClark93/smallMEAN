import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Rate My Cakes';
  cakes: object []
  newCake: any;
  singleCake: any;
  newRating: any;
  edit = false;

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.showAll()
    this.newCake = {baker: "", cake: "", description: "", image: "", stars: []}
    this.newRating = {content: "", rating: 1}
  }

  showAll(): void { 
    let observable = this._httpService.getCakes()
    observable.subscribe(data => {
    this.cakes = data['data'];
    })
  } 

  create(): void { 
    console.log(this.newCake)
    let observable = this._httpService.create(this.newCake)
    observable.subscribe(data => {
    this.cakes = data['data'];
    })
    this.newCake = {baker: "", cake: "", description: "", image: "", stars: []}
    this.showAll();
  }

  rate(cake){
    this.singleCake = cake;
    console.log(`This is the cake: ${this.singleCake}`)
    console.log(`This is the rating: ${this.newRating}`)
    let observable = this._httpService.rate(this.singleCake, this.newRating);
    observable.subscribe(data => {
      this.singleCake['stars'].push({
        content: this.newRating['content'],
        rating: this.newRating['rating'],
      })
      console.log("Updated successfully!", data);
      this.newRating = {content: "", rating: 1}
    })
    this.showAll()
  }

  fullView(cake){
    console.log(cake)
    this.singleCake = cake;
    var count = 0
    var sum = 0
    for(var i = 0; i < this.singleCake['stars'].length; i++){
      count++;
      sum += this.singleCake['stars'][i]['rating']
    }
    this.singleCake['avg'] = (sum/count)
    this.edit = true;
  }
   // openEdit(user){
  //   this.singleUser = {_id: user._id, name: user.name, age: user.age}
  //   console.log(user._id)
  //   this.edit = true;
  // }

  // invoke(){
  //   console.log("invoked")
  //   this.editUser();
  // }

 

  // showOptions(): void { 
  //   this.showAll();
  //   this.all = true;
  //   this.a = false;
  // }

 

  // editUser(){
  //   let observable = this._httpService.editUser(this.singleUser);
  //   observable.subscribe(data => {
  //     this.singleUser = {
  //       name: this.singleUser['name'],
  //       age: this.singleUser['age'],
  //     }
  //     console.log("Updated successfully!", data);
  //   })
  //   this.showAll()
  //   this.edit = false;
  // }

  // delete(id): void { 
  //   console.log(id)
  //   let observable = this._httpService.delete(id)
  //   observable.subscribe(data => {
  //   console.log(data['data']);
  //   })
  //   this.showAll();
  // }
}
