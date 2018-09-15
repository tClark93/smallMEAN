import { HttpService } from '../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editRestaurant: {};
  errName = ""
  errCuis = ""

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
      this.loadItem()
    }

  loadItem(){
    this._route.params.subscribe(params => {
      console.log(params);
      this._httpService.getOne(params.id).subscribe(restaurant => {
        this.editRestaurant = {
          id: restaurant['data'][0]['_id'],
          name: restaurant['data'][0]['name'],
          cuisine: restaurant['data'][0]['cuisine']
        }
      });
    });
  }
    
  edit(){
    console.log("this is the product at edit", this.editRestaurant)
    let observable = this._httpService.editRestaurant(this.editRestaurant);
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
