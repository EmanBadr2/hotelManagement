import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent {
  // date: Date | undefined;
  date: Date = new Date();
  minDate: Date = new Date();  // Today's date
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
