
import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import {
  injectStripe,
  StripeElementsDirective,
  StripeCardComponent ,
} from 'ngx-stripe';
import {
  StripeElementsOptions,
  StripeCardElementOptions
} from '@stripe/stripe-js';


import { BookingService } from '../../services/booking.service';



@Component({
  selector: 'app-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.scss']
})
export class PaymentComponent {
 stripToken:string = ''
 bookingID : any
 token!:string
 @Output() nextStep = new EventEmitter<void>();
  @ViewChild(StripeCardComponent) cardElement!: StripeCardComponent;

  constructor(private _BookingService:BookingService){}
  private readonly fb = inject(UntypedFormBuilder);

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  checkoutForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  stripPublicKey: string ='pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'
  // Replace with your own public key
  stripe = injectStripe( this.stripPublicKey);

  
  createToken() {
    const name = 'test';
    // this.nextStep.emit();
    this.stripe.createToken(this.cardElement.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          this.stripToken = result.token.id;
          if (this.stripToken) {
            this.sendToken();
            console.log(this.stripToken);
            this.nextStep.emit();
          }
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
  

  payBooking(){
    this.receiveToken()
    console.log(this.token);
    console.log(this.bookingID);

    let data = {"token": this.token}
    this._BookingService.payBooking( this.bookingID ,data).subscribe({
      next:(res)=> {
        console.log(res);
        this.nextStep.emit();
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

  sendToken(){
    if(this.stripToken){ this._BookingService.tokenFromStripe(this.stripToken); }
  }

}
