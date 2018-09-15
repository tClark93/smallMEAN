import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tulsa',
  templateUrl: './tulsa.component.html',
  styleUrls: ['./tulsa.component.css']
})
export class TulsaComponent implements OnInit {
  currentWeather: any;
  @Input() city: any;
  @Output() callWeather = new EventEmitter();
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }
  getWeather(): void { 
    let observable = this._httpService.getWeather('tulsa')
    observable.subscribe(data => {
      console.log(data)
    this.currentWeather = data;
    })
  } 
  // callParent(){
  //   console.log("calling parent")
  //   this.callWeather.emit("Tulsa");
  // }
  
}
