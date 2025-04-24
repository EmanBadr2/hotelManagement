import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent implements OnInit {
  bookingData: any;


  constructor(
    public config: DynamicDialogConfig,
    private _BookingService: BookingService 
  ) {}

  ngOnInit(): void {
    const bookingId = this.config.data.id;

    this._BookingService.getBookingById(bookingId).subscribe({
      next: (res) => {
        this.bookingData = res.data.booking;

      },
      error: (err) => {
        console.error('Error fetching booking:', err);

      },
    });
  }
}
