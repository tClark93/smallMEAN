import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  currentWeather: any;
  @Input() city: any;
  @Output() callWeather = new EventEmitter();
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(): void { 
    let observable = this._httpService.getWeather('chicago')
    observable.subscribe(data => {
      console.log(data)
    this.currentWeather = data;
    })
  } 
  
}
