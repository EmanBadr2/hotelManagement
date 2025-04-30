import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-main-payment',
  templateUrl: './main-payment.component.html',
  styleUrls: ['./main-payment.component.scss']
})
export class MainPaymentComponent {
  bookingID : any
  token!:string
  constructor(private _Router: Router , private _BookingService:BookingService){
    const nav = this._Router.getCurrentNavigation();
    this.bookingID = nav?.extras?.state;
    this.bookingID=this.bookingID.bookingID
    console.log(this.bookingID);

  }


  payBooking(){
    this.receiveToken()
    console.log(this.token);
    console.log(this.bookingID);

    let data = {"token": this.token}
    this._BookingService.payBooking( this.bookingID ,data).subscribe({
      next:(res)=> {
        console.log(res);
      },
      error:(err)=> {
        console.log(err);
      },
    })
  }


  receiveToken() {
    this._BookingService.stripToken.subscribe(data => {
      this.token = data;
    });
  }


}
