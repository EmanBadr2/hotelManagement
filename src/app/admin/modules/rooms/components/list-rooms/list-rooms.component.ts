import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { IRooms } from '../../interfaces/IRooms';
import { Router } from '@angular/router';


import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { DeleteComponent } from 'src/app/admin/components/delete/delete.component';
import { ToastrService } from 'ngx-toastr';

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
  ref!: DynamicDialogRef;


  constructor(private _RoomsService:RoomsService ,
    private _Router:Router ,
     private dialogService: DialogService ,
     private _ToastrService:ToastrService
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


  getActions(room: IRooms): any[] {
    return [
      {
        label: 'View',
        icon: 'pi pi-eye',
        command: () => {this._Router.navigate(['/admin/rooms/add-rooms/', room._id], {
          queryParams: { isFormDisabled: 'true' } })
        },
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this._Router.navigate(['/admin/rooms/add-rooms/', room._id])
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.openDeleteDialog(room),
      },
    ];
 }

 openDeleteDialog(rooms:IRooms ) {
    this.ref = this.dialogService.open(DeleteComponent, {
      header: 'Confirm Delete',
      width: '400px',
      data: {
        rooms:rooms ,
      },
    });

    this.ref.onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._RoomsService.deleteRoom(rooms._id).subscribe({
          next: (res) => {
            console.log(res);
            this.onGettingAllRooms()
            this._ToastrService.success('Room deleted successfully');
          },
          error: (err) => {
            console.log(err);
            this._ToastrService.error('Error in deleting Room');
          },
        });
      }
    });
  }


}
