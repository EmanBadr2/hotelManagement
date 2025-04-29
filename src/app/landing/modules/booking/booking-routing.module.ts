import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [{ path: '', component: BookingComponent },
  {path :'payment' , component:PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
