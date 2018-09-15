import { HttpService } from '../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editProduct: {};
  errorName = false
  errorPrice = false

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
      this._route.params.subscribe(params => {
        console.log(params);
        this._httpService.getOne(params.id).subscribe(product => {
          this.editProduct = {
            id: product['data'][0]['_id'],
            name: product['data'][0]['name'],
            price: product['data'][0]['price'],
            image: product['data'][0]['image']
          }
        });
      });
    }
    
    edit(){
      console.log("this is the product at edit", this.editProduct)
      let observable = this._httpService.editProduct(this.editProduct);
      observable.subscribe(data => {
        console.log(data)
        if(data['errors']['name']['message'] != null){
          this.errorName = data['errors']['name']['message']
        }
        if(data['errors']['price']['message'] != null){
          this.errorPrice = data['errors']['price']['message']
        }
        this.editProduct = {
          name: this.editProduct['name'],
          price: this.editProduct['price'],
          image: this.editProduct['image'],
        }
        console.log("Updated successfully!", data);
      })
      if(this.errorPrice == null && this.errorName == null ){
        this._router.navigate(['/all'])
      }
    }
}
