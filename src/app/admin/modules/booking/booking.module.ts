import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { ListBookingComponent } from './components/list-booking/list-booking.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';


@NgModule({
  declarations: [
    BookingComponent,
    ListBookingComponent,
    ViewBookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule
  ]
})
export class BookingModule { }
