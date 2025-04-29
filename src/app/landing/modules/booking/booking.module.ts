import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgxStripeModule } from 'ngx-stripe';



@NgModule({
  declarations: [
    BookingComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule ,
    SharedModule ,

    NgxStripeModule.forRoot('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'),

  ]
})
export class BookingModule { }
