import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomDetailsService } from './services/room-details.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  // date: Date | undefined;
    date: Date = new Date();
    minDate: Date = new Date();
    roomID !:any
    capacity :number =0

  constructor( private _Router:Router ,
    private _RoomDetailsService:RoomDetailsService ,
    private _ActivatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.roomID = this._ActivatedRoute.snapshot.paramMap.get('id');
    console.log('room id from URL:', this.roomID );
      //  this.getRoomDetails(this.roomID );
}

  explore(){
    console.log(this.date);
    console.log(this.capacity);
    // navigate to explore M with this ( date & capacity)
    this._Router.navigate(['landing/explore'])
  }



}
