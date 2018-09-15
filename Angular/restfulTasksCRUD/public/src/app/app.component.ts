import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  a = true;
  all = false;
  edit = false;
  newUser = {name: "", age: 0};
  singleUser: any;
  users: object []
  name: string;

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    // this.getUsersFromService()
  }

  invoke(){
    console.log("invoked")
    this.editUser();
  }

  showAll(): void { 
    let observable = this._httpService.getUsers()
    observable.subscribe(data => {
    this.users = data['data'];
    })
  } 

  showOptions(): void { 
    this.showAll();
    this.all = true;
    this.a = false;
  }

  openEdit(user){
    this.singleUser = {_id: user._id, name: user.name, age: user.age}
    console.log(user._id)
    this.edit = true;
  }

  editUser(){
    let observable = this._httpService.editUser(this.singleUser);
    observable.subscribe(data => {
      this.singleUser = {
        name: this.singleUser['name'],
        age: this.singleUser['age'],
      }
      console.log("Updated successfully!", data);
    })
    this.showAll()
    this.edit = false;
  }

  create(): void { 
    console.log(this.newUser)
    let observable = this._httpService.create(this.newUser)
    observable.subscribe(data => {
    this.users = data['data'];
    })
    this.newUser = { name: "", age: 0 };
    this.showAll();
  }

  delete(id): void { 
    console.log(id)
    let observable = this._httpService.delete(id)
    observable.subscribe(data => {
    console.log(data['data']);
    })
    this.showAll();
  }
}
