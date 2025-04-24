import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Booking, BookingApiResponse, BookingResponseData } from '../../interfaces/booking';
import { BookingService } from '../../services/booking.service';
import { DialogAddComponent } from 'src/app/admin/components/shared/dialog-add-edit/dialog-add.component';
import { ViewBookingComponent } from '../view-booking/view-booking.component';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.scss']
})
export class ListBookingComponent {
  bookingList: Booking[]  = [];
  rows: number = 5;
  currentPage: number = 0;
  totalCount: number = 0;
  loading: boolean = true;
  error: string = '';
  ref!: DynamicDialogRef;
    constructor(
      private bookingService: BookingService,
      private dialogService: DialogService
    ) {}
    ngOnInit(): void {
      this.getAllBookings(this.currentPage, this.rows);
    }
    onPageChange(event: any): void {
      this.currentPage = event.page;
      this.rows = event.rows;
      console.log('Page Change Event:', event);
      this.getAllBookings(this.currentPage, this.rows);
    }
    viewBooking(id: any): void {
      this.ref = this.dialogService.open(ViewBookingComponent, {
        header: 'View Booking',
        width: '60vw',
        data: {
          id
        },
      });
    }
    getAllBookings(page: number, size: number): void {
      this.bookingService.getBookings(page + 1, size).subscribe({
        next: (response: BookingApiResponse) => {
                console.log('API Response:', response);
            this.bookingList = response.data.booking;
            this.totalCount = response.data.totalCount;
            this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.bookingList = [];
          this.loading = false;
        }
      });
    }

}
