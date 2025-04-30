import { Component, Input, Output, EventEmitter  , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomDetailsService } from '../../services/room-details.service';
import { Room } from 'src/app/landing/interface/pageDetals';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { BookingComponent } from './../../../booking/components/booking/booking.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

   minDate: Date = new Date();  // Today's date
   rangeDates: Date[] | undefined;
    startDate :string = '';
    endDate :string = '';
    numberOfDays :number = 0
    totalPrice :number =0
    roomNumber !: String | number
    price : number=0
    capacity :number =0
    discount: number=0
    images  :string[]=[]
    roomDetails:any | Room
   @Input() roomID !: string

 constructor ( private _Router:Router , private _RoomDetailsService:RoomDetailsService, private _DialogService:DialogService){}
  ngOnInit(): void {
    if(this.roomID){
      this.getRoomDetails()
    }
  }

  getRoomDetails(){
    this._RoomDetailsService.roomDetails(this.roomID).subscribe({
      next: (res: any) => {
        console.log(res.data.room);
        this.roomDetails = res.data.room
        this.price = this.roomDetails.price
       this.capacity = this.roomDetails.capacity
       this.images = this.roomDetails.images
      this.discount = this.roomDetails.discount
      this.roomNumber = this.roomDetails.roomNumber
      },
      error: err => console.error(err),
    });
  }


  booking() {
    this.handleDate();
    const ref = this._DialogService.open(BookingComponent, {
      width: '50%',
      data: {
        bookingData: {
          startDate: this.startDate,
          endDate: this.endDate,
          totalPrice: this.totalPrice,
          room: this.roomID
        }
      }
    });
  
    ref.onClose.subscribe((result) => {
      if (result?.bookingID) {
        this._Router.navigate(['landing/booking/payment'], {
          state: { bookingID: result.bookingID }
        });
      }
    });
  }
 handleDate(){       // calc number of days && total price
  // handle formate Date to start & end
  if (this.rangeDates && this.rangeDates.length === 2) {
    this.startDate = this.formatDate(this.rangeDates[0])
    this.endDate = this.formatDate(this.rangeDates[1])
  }
  // num of days
  if (this.rangeDates) {
    const timeDiff = this.rangeDates[1].getTime() - this.rangeDates[0].getTime(); // difference in milliseconds
    this.numberOfDays = timeDiff / (1000 * 60 * 60 * 24) + 1; // convert to days ( + 1 if  include both the start and end dates)
  }
  // total price
  if(this.capacity>0 && this.price >0 && this.numberOfDays>0 &&this.discount>0){
    Number(this.totalPrice =
       Number(this.capacity)  * Number(this.discount )
      * Number(this.price ) *Number(this.numberOfDays) )
 }
 console.log(this.numberOfDays , this.totalPrice);
 }

 formatDate(date: Date): string {  // Format Date function: yyyy-mm-dd
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};



}
