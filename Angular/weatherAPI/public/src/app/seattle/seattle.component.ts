import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  currentWeather: any;
  @Input() city: any;
  @Output() callWeather = new EventEmitter();
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(): void { 
    let observable = this._httpService.getWeather('seattle')
    observable.subscribe(data => {
      console.log(data)
    this.currentWeather = data;
    })
  } 
  
}
