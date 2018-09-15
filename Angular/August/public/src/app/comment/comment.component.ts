import { HttpService } from '../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  Restaurant: {}
  newRating = {name: "", rating: 1, review: ""}
  errName = ""
  errRate = ""
  errRev = ""

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.loadItem();
  }

  loadItem(): void{
    this._route.params.subscribe(params => {
      console.log(params);
      this._httpService.getOne(params.id).subscribe(restaurant => {
        this.Restaurant = {
          id: restaurant['data'][0]['_id'],
          name: restaurant['data'][0]['name'],
          cuisine: restaurant['data'][0]['cuisine'],
          reviews: restaurant['data'][0]['reviews']
        }
      });
    });
  }

  rate(Rest): void{
    let observable = this._httpService.review(Rest, this.newRating);
    observable.subscribe(data => {
      console.log("data: ",data)
      if(data['message'] == "Error"){
        this.errName = ""
        this.errRate = ""
        this.errRev = ""
        for (let key in data['error']['errors']) {
          if(key == 'name'){
            this.errName = data['error']['errors']['name']['message']
          }
          if(key == 'rating'){
            this.errRate = data['error']['errors']['rating']['message']
          }
          if(key == 'review'){
            this.errRev = data['error']['errors']['review']['message']
            console.log("this.errRev: ",this.errRev)
          }
        }
      }
      else{
        console.log(data['data']);
        this._router.navigate(['/restaurants', this.Restaurant['id']])
      }
    })
  }
}