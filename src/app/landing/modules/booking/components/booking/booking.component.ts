import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  bookingData: any;
  bookingID : string =''
  constructor(private _Router: Router , private _BookingService:BookingService){
    const nav = this._Router.getCurrentNavigation();
    this.bookingData = nav?.extras?.state;
    console.log(this.bookingData);
  }

  createBooking(){
    this._BookingService.createBooking(this.bookingData).subscribe({
      next:(res)=> {
        console.log(res);
        this.bookingID =res.data.booking._id
        this._Router.navigate(['landing/booking/payment'],{ state: {bookingID : this.bookingID } });
      },
      error:(err)=> {
        console.log(err);
      },
    })
  }

}


// {startDate : this.startDate , endDate: this.endDate, totalPrice: this.totalPrice, room: this.roomID }
