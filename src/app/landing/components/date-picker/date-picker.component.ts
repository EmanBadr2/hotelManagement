import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  date: Date | undefined;
  capacity :number =0
  constructor( private _Router:Router){}

  addCapacity(){
    this.capacity++
  }
  removeCapacity(){
    this.capacity--
  }
  explore(){
    console.log(this.date);
    console.log(this.capacity);
    // navigate to explore M with this ( date & capacity)
    this._Router.navigate(['landing/explore'])
  }




}
