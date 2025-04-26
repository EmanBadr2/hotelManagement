import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomDetailsService } from './services/room-details.service';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  // date: Date | undefined;
  images :string[] =[]
  roomId :string ='676785afc01e18566189c9d4'
  date: Date = new Date();
  minDate: Date = new Date();  // Today's date
  capacity :number =0
  stars = Array(5).fill(0);

  constructor( private _Router:Router ,
    private _RoomDetailsService:RoomDetailsService
  ){}
  ngOnInit(): void {
    this._RoomDetailsService.roomDetails(this.roomId).subscribe({
      next: (res: any) => {
       this.images = res.data.room.images
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
