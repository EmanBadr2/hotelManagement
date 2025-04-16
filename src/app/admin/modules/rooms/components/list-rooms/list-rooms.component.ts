import { Component } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { IRooms } from '../../interfaces/IRooms';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent {
  page :number=1
  size:number=10
  allRooms :IRooms[] =[]
  totalNumOfRooms !:number

  constructor(private _RoomsService:RoomsService){
    this.onGettingAllRooms()
  }

  onGettingAllRooms():void{
    const params :any = { page :this.page , size:this.size }
<<<<<<< HEAD
    // this._RoomsService.onGettingAllRooms( params ).subscribe({
    //   next :(res) =>{
    //     console.log(res);
    //   },
    //   error :(err :any) =>{
    //     console.log(err);
    //   },
    // })
=======
    this._RoomsService.onGettingAllRooms( params ).subscribe({
      next :(res) =>{
        console.log(res);
        this.allRooms=res.data.rooms
        this.totalNumOfRooms=res.data.totalCount
      },
      error :(err) =>{
        console.log(err);
      },
    })
>>>>>>> main
  }
}
