import { HttpService } from '../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  now = new Date()
  then = new Date()
  Restaurant: { id: 0, name: "", cuisine: "", reviews: [0], createdAt: ""}

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.loadItem();
    this.then.setSeconds(this.then.getSeconds()-30)
  }

  loadItem(){
    this._route.params.subscribe(params => {
      console.log(params);
      this._httpService.getOne(params.id).subscribe(restaurant => {
        this.Restaurant = {
          id: restaurant['data'][0]['_id'],
          name: restaurant['data'][0]['name'],
          cuisine: restaurant['data'][0]['cuisine'],
          reviews: restaurant['data'][0]['reviews'],
          createdAt: restaurant['data'][0]['createdAt']
        }
      });
    });
  }
}
