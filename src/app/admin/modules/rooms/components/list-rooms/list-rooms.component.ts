import { Component } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent {
  page :number=1
  size:number=10

  constructor(private _RoomsService:RoomsService){
    console.log(localStorage.getItem('token'));

    this.onGettingAllRooms()
  }


  onGettingAllRooms():void{
    const params :any = { page :this.page , size:this.size }
    // this._RoomsService.onGettingAllRooms( params ).subscribe({
    //   next :(res) =>{
    //     console.log(res);
    //   },
    //   error :(err :any) =>{
    //     console.log(err);
    //   },
    // })
  }
}
