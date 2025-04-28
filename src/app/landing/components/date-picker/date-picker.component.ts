import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  // date: Date | undefined;
  rangeDates: Date[] |any;
  minDate: Date = new Date();  // Today's date
  capacity :number =0
  startDate :string = '';
  endDate :string = '';
  constructor( private _Router:Router){}

  addCapacity(){
    this.capacity++
  }
  removeCapacity(){
    this.capacity--
  }
  explore(){
    console.log(this.capacity);
    console.log(this.rangeDates);
    if (this.rangeDates && this.rangeDates.length === 2) {
      this.startDate = this.formatDate(this.rangeDates[0])
      this.endDate = this.formatDate(this.rangeDates[1])
      console.log( this.startDate , this.endDate);
    }
    // navigate to explore M with this ( date & capacity)
    this._Router.navigate(['landing/explore'],
      { state: { startDate : this.startDate , endDate: this.endDate, capacity: this.capacity  } });
  }


// Format Date function: yyyy-mm-dd
 formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};



}
