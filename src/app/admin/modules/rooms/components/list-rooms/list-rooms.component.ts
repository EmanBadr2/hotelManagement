import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { IRooms } from '../../interfaces/IRooms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent implements OnInit {
  page :number=1
  size:number=10
  roomsList :IRooms[] =[]
  totalNumOfRooms !:number

  constructor(private _RoomsService:RoomsService ,
    private _Router:Router ,
  ){}

  ngOnInit(): void {
    this.onGettingAllRooms()
  }


  onGettingAllRooms():void{
    const params :any = { page :this.page , size:this.size }
    this._RoomsService.onGettingAllRooms( params ).subscribe({
      next :(res) =>{
        console.log(res);
        this.roomsList=res.data.rooms
        this.totalNumOfRooms=res.data.totalCount
      },
      error :(err) =>{
        console.log(err);
      },
    })
  }


  getActions(item: any): any[] {
    return [
      {
        label: 'View',
        icon: 'pi pi-eye',
        command: () => {this._Router.navigate(['/admin/rooms/add-rooms/', item], {
          queryParams: { isFormDisabled: 'true' } })
        },
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this._Router.navigate(['/admin/rooms/add-rooms/', item])
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this._Router.navigate(['/view', item]),
      },
    ];
  }


}
