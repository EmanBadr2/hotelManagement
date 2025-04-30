import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-main-payment',
  templateUrl: './main-payment.component.html',
  styleUrls: ['./main-payment.component.scss']
})
export class MainPaymentComponent implements OnInit {
  bookingID : any
  token!:string
  steps: MenuItem[] = [];
  activeIndex: number = 0;
  constructor(private _Router: Router , private _BookingService:BookingService){
    const nav = this._Router.getCurrentNavigation();
    this.bookingID = nav?.extras?.state;
    this.bookingID=this.bookingID.bookingID
    console.log(this.bookingID);

  }
  ngOnInit(): void {
    this.steps = [
      { label: 'Information', icon: 'pi pi-user' },
      { label: 'Payment', icon: 'pi pi-credit-card' },
      { label: 'Confirmation', icon: 'pi pi-check-circle' }
    ];
  }
  goNext() {
    if (this.activeIndex < this.steps.length - 1) {
      this.activeIndex++;
    }
  }

  goBack() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
  
  payBooking(){
    this.receiveToken()
    console.log(this.token);
    console.log(this.bookingID);
    this.goNext();
    let data = {"token": this.token}
    this._BookingService.payBooking( this.bookingID ,data).subscribe({
      next:(res)=> {
        this.goNext();
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
