import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { PaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { MainPaymentComponent } from './components/main-payment/main-payment.component';


const routes: Routes = [
  { path: '', redirectTo: 'booking' , pathMatch:'full' },
  { path: 'booking', component: BookingComponent },
  {path :'stripe' , component:PaymentComponent } ,
  {path :'payment' , component:MainPaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
