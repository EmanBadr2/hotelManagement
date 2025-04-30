import { Component } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  bookingData: any;
  bookingID: string = '';
  loading = false;

  constructor(
    private _BookingService: BookingService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.bookingData = this.config.data?.bookingData;
    console.log('Booking Data:', this.bookingData);
  }

  createBooking() {
    this.loading = true;
  
    this._BookingService.createBooking(this.bookingData).subscribe({
      next: (res) => {
        this.bookingID = res.data.booking._id;
        this.loading = false;
        this.ref.close({ bookingID: this.bookingID });
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      },
    });
  }
}


// {startDate : this.startDate , endDate: this.endDate, totalPrice: this.totalPrice, room: this.roomID }
