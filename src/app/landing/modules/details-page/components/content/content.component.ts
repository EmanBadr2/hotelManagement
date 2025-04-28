import { Component, Input, Output, EventEmitter  , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomDetailsService } from '../../services/room-details.service';
import { Room } from 'src/app/landing/interface/pageDetals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
   // date: Date | undefined;
    date: Date = new Date();
    roomNumber !: String | number
    price !: number
    capacity :number =0
    discount!: number
    images  :string[]=[]
    roomDetails:any | Room
    minDate: Date = new Date();  // Today's date
   @Input() roomID !: string

 constructor ( private _Router:Router , private _RoomDetailsService:RoomDetailsService){}
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
    console.log(this.date);
    console.log(this.capacity);

    this._Router.navigate(['landing/booking'],
   { state: { date: this.date, capacity: this.capacity, roomNumber: this.roomNumber } });
  }

}
