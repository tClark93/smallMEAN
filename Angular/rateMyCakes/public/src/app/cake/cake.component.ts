import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { invoke } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() viewSingleCake: any;
  constructor() { }

  ngOnInit() {
  }

}
