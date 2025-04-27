import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomDetailsService } from './services/room-details.service';
import { Room } from 'src/app/landing/interface/pageDetals';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  // date: Date | undefined;
    date: Date = new Date();
    room: any = {}; 
    roomNumber !: String | number
    price !: number
    capacity :number =0
    discount!: number
    images: string[] = [];
    roomDetails:any | Room
    minDate: Date = new Date();
  

  constructor( private _Router:Router ,
    private _RoomDetailsService:RoomDetailsService,
    private _ActivatedRoute: ActivatedRoute
  ){}
  ngOnInit(): void {
    const id = this._ActivatedRoute.snapshot.paramMap.get('id'); 
    console.log('room id from URL:', id);
  
    if (id) {
      this.getRoomDetails(id);
    }
}

getRoomDetails(id: string) {
  this._RoomDetailsService.roomDetails(id).subscribe({
    next: (res: any) => {
      console.log(res.data.room);
      this.roomDetails = res.data.room;
      this.price = this.roomDetails.price;
      this.capacity = this.roomDetails.capacity;
      this.images = this.roomDetails.images;
      this.discount = this.roomDetails.discount;
      this.roomNumber = this.roomDetails.roomNumber;
    },
    error: err => console.error(err),
  });
}
  explore(){
    console.log(this.date);
    console.log(this.capacity);
    // navigate to explore M with this ( date & capacity)
    this._Router.navigate(['landing/explore'])
  }



}
