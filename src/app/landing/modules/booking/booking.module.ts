import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './components/booking/booking.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgxStripeModule } from 'ngx-stripe';
import { PaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { MainPaymentComponent } from './components/main-payment/main-payment.component';
import { CompletedComponent } from './components/completed/completed.component';



const publicKey = 'pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'


@NgModule({
  declarations: [
    BookingComponent,
    PaymentComponent,
    MainPaymentComponent,
    CompletedComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule ,
    SharedModule ,

    NgxStripeModule.forRoot(publicKey),

  ]
})
export class BookingModule { }
