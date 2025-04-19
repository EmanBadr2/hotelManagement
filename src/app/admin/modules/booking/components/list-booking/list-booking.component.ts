import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Booking, BookingApiResponse, BookingResponseData } from '../../interfaces/booking';
import { BookingService } from '../../services/booking.service';
import { DialogAddComponent } from 'src/app/admin/components/shared/dialog-add-edit/dialog-add.component';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.scss']
})
export class ListBookingComponent {
  bookingList: Booking[]  = [];
  // roomsList: IRooms[] | undefined = [];
  totalCount: number = 0;
  isLoading: boolean = false;
  error: string = '';
  ref!: DynamicDialogRef;
    constructor(
      private bookingService: BookingService,
      private dialogService: DialogService
    ) {}
    ngOnInit(): void {
      this.getAllBookings();
    }
    getActions(booking: Booking) {
      return [
      
        {
          label: 'View',
          icon: 'pi pi-eye',
          command: () => this.viewBooking(booking._id),
        }
      ];
    }
    viewBooking(id: any): void {
      this.ref = this.dialogService.open(DialogAddComponent, {
        header: 'View Booking',
        width: '30vw',
        data: {
          id,
          isView: true,
          fields: [{ name: 'name', placeholder: 'Booking name', type: 'text' }],
        },
      });
    }
  
    getAllBookings(): void {
      this.isLoading = true;
      this.bookingService.getBookings().subscribe({
        next: (response: BookingApiResponse) => {
                console.log('API Response:', response);
            this.bookingList = response.data.booking;
            this.totalCount = response.data.totalCount;
            this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.bookingList = [];
        }
      });
    }
    
}
