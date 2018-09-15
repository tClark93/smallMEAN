import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { invoke } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() editSingleUser: any;
  @Output() myEvent = new EventEmitter

  callParent(){
    this.myEvent.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
