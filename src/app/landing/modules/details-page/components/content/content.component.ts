import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomDetailsService } from '../../services/room-details.service';
import { Room } from 'src/app/landing/interface/pageDetals';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
   // date: Date | undefined;
    date: Date = new Date();
    roomId :string ='6808fd4a662a988e021fb99a'
    roomNumber !: String | number
    price !: number
    capacity :number =0
    discount!: number
    images !: string[]
    roomDetails:any | Room
    minDate: Date = new Date();  // Today's date

  constructor ( private _Router:Router  , private _RoomDetailsService:RoomDetailsService){}

  ngOnInit(): void {
      // this._RoomDetailsService.roomDetails(this.roomId).subscribe({
      //   next: (res: any) => {
      //     console.log(res.data.room);
      //     this.roomDetails = res.data.room
      //     this.price = this.roomDetails.price
      //    this.capacity = this.roomDetails.capacity
      //    this.images = this.roomDetails.images
      //   this.discount = this.roomDetails.discount
      //   this.roomNumber = this.roomDetails.roomNumber
      //   },
      //   error: err => console.error(err),
      // });

      this.allRoomDetails()
  }

  allRoomDetails(){
    this._RoomDetailsService.roomDetails(this.roomId).subscribe({
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
    booking(){
      console.log(this.date);
      console.log(this.capacity);
      // navigate to explore M with this ( date & capacity)
      this._Router.navigate(['landing/booking'])
    }

}
