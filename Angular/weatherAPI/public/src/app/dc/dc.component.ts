import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  currentWeather: any;
  @Input() city: any;
  @Output() callWeather = new EventEmitter();
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(): void { 
    let observable = this._httpService.getWeather('washington_dc')
    observable.subscribe(data => {
      console.log(data)
    this.currentWeather = data;
    })
  } 
  
}
