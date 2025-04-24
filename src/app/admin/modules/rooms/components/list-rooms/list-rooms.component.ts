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
  rows: number = 5;
  currentPage: number = 0;
  totalCount: number = 0;
  roomsList :IRooms[] =[]
  loading: boolean = true
  ref!: DynamicDialogRef;


  constructor(private _RoomsService:RoomsService ,
    private _Router:Router ,
     private dialogService: DialogService ,
     private _ToastrService:ToastrService
  ){}

  ngOnInit(): void {
    this.onGettingAllRooms(this.currentPage, this.rows)
  }
  onPageChange(event: any): void {
    this.currentPage = event.page;
    this.rows = event.rows;
    console.log('Page Change Event:', event);
    this.onGettingAllRooms(this.currentPage, this.rows);
  }


  onGettingAllRooms(page: number, size: number):void{
    this._RoomsService.onGettingAllRooms( page + 1, size).subscribe({
      next :(res) =>{
        console.log(res);
        this.roomsList=res.data.rooms
        this.totalCount=res.data.totalCount
        this.loading = false
      },
      error :(err) =>{
        console.log(err);
        this.loading = false
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
            this.onGettingAllRooms(this.currentPage, this.rows)
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
