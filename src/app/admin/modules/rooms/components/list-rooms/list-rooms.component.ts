import { Component } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { IRooms } from '../../interfaces/IRooms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent {
  page :number=1
  size:number=10
  roomsList :IRooms[] =[]
  totalNumOfRooms !:number

  items = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      // command: () =>this.editFacility(facility.id),
    },
    {
      label: 'View',
      icon: 'pi pi-eye',
      command: () => this._Router.navigate(['/admin/rooms/add-rooms/:id']),
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      // command: () => this.openDeleteDialog(facility),
    },
  ];

  constructor(private _RoomsService:RoomsService ,
    private _Router:Router
  ){
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
}
