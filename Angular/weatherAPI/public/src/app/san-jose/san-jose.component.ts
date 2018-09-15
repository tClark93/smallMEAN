import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  currentWeather: any;
  @Input() city: any;
  @Output() callWeather = new EventEmitter();
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(): void { 
    let observable = this._httpService.getWeather('sanjose')
    observable.subscribe(data => {
      console.log(data)
    this.currentWeather = data;
    })
  } 
  
}
