import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  products = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void { 
    let observable = this._httpService.getAll()
    observable.subscribe(data => {
    this.products = data['data'];
    })
  } 

  delete(id): void { 
    console.log(id)
    let observable = this._httpService.delete(id)
    observable.subscribe(data => {
    console.log(data['data']);
    })
    this.getAll();
  }

}
