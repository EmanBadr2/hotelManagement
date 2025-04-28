import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { DeleteComponent } from '../../components/delete/delete.component';
import { DialogAddComponent } from '../../components/shared/dialog-add-edit/dialog-add.component';

import { Ad } from './Interfaces/ads';
import { AdsService } from './ads.service';
import { RoomsService } from '../rooms/services/rooms.service';
import { IRooms } from '../rooms/interfaces/IRooms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent {
  adsList: Ad[] = [];
  roomsList: IRooms[] = [];
  rows: number = 5;
  currentPage: number = 0;
  totalCount: number = 0;
  loading: boolean = false;
  error: string = '';
  ref!: DynamicDialogRef;

  constructor(
    private adsService: AdsService,
    private roomService: RoomsService,
    private toastr: ToastrService,
    private dialogService: DialogService
  ) {}
  ngOnInit(): void {
    this.getAllAds(this.currentPage, this.rows);
  }
  
  onPageChange(event: any): void {
    this.currentPage = event.page;
    this.rows = event.rows;
    console.log('Page Change Event:', event);
    this.getAllAds(this.currentPage, this.rows);
  }
  getActions(ads: Ad) {
    return [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editFacility(ads._id), // if you implement edit
      },
      {
        label: 'View',
        icon: 'pi pi-eye',
        command: () => this.viewFacility(ads._id),
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.openDeleteDialog(ads), // if you implement delete
      },
    ];
  }
  editFacility(id: string) {
    this.ref = this.dialogService.open(DialogAddComponent, {
      header: 'Edit ADS',
      width: '30vw',
      data: {
        id,
        isEdit: true,
        fields: [
          {
            name: 'Name',
            placeholder: 'Room name',
            type: 'text',
          },
          {
            name: 'discount',
            placeholder: 'Discount',
            type: 'text',
          },
          {
            name: 'isActive',
            placeholder: 'ADS Active',
            type: 'select',
            options: [
              { label: 'Yes', value: true },
              { label: 'No', value: false },
            ],
          },
        ],
      },
    });

    this.ref.onClose.subscribe((result) => {
      if (result) {
        this.getAllAds(this.currentPage, this.rows);
      }
    });
  }

  // onGettingAllRooms(): void {
  //   const params: any = { page: this.page, size: this.size };
  //   this.roomService.onGettingAllRooms(params).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.roomsList = res.data.rooms;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  openAddDialog(): void {
    this.loading = true; // Start loading
    forkJoin({
      roomsResponse: this.roomService.onGettingAllRooms(),
    }).subscribe({
      next: ({ roomsResponse }) => {
        this.roomsList = roomsResponse.data.rooms;
        this.totalCount = roomsResponse.data.totalCount;
        this.loading = false; // Stop loading after dialog closed

        const roomOptions = this.roomsList.map((room) => ({
          label: room.roomNumber,
          value: room._id,
        }));

        this.ref = this.dialogService.open(DialogAddComponent, {
          header: 'Add ADS',
          width: '30vw',
          data: {
            fields: [
              {
                name: 'room',
                placeholder: 'Room name',
                type: 'select',
                options: roomOptions,
              },
              { name: 'discount', placeholder: 'Discount', type: 'text' },
              {
                name: 'isActive',
                placeholder: 'ADS Active',
                type: 'select',
                options: [
                  { label: 'Yes', value: true },
                  { label: 'No', value: false },
                ],
              },
            ],
          },
        });

        this.ref.onClose.subscribe((result) => {
          if (result) {
            this.getAllAds(this.currentPage, this.rows);
          }
        });
      },
      error: (err) => {
        this.loading = false; // Stop loading on error
        console.error('Error loading rooms:', err);
        this.toastr.error('Failed to load room data');
      },
    });
  }

  viewFacility(id: any): void {
    this.ref = this.dialogService.open(DialogAddComponent, {
      header: 'View ADS',
      width: '30vw',
      data: {
        id,
        isView: true,
        fields: [
          { name: 'Name', placeholder: 'room name', type: 'text' },
          { name: 'Discount', placeholder: 'Discount', type: 'text' },
          {
            name: 'Active',
            placeholder: 'ADS Active',
            type: 'select',
            options: [
              { label: 'Yes', value: true },
              { label: 'No', value: false },
            ],
          },
        ],
      },
    });
  }
  openDeleteDialog(ads: Ad) {
    this.ref = this.dialogService.open(DeleteComponent, {
      header: 'Confirm Delete',
      width: '400px',
      data: {
        ads: ads,
      },
    });

    this.ref.onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.adsService.deleteAds(ads._id).subscribe({
          next: () => {
            this.adsList = this.adsList.filter((f) => f._id !== ads._id);
            this.toastr.success('Facility deleted successfully');
          },
          error: () => {
            this.toastr.error('Error deleting facility');
          },
        });
      }
    });
  }

  getAllAds(page: number, size: number): void {
    this.loading = true;
    this.adsService.getAds(page + 1, size).subscribe({
      next: (response) => {
        this.adsList = response.data.ads;
        this.totalCount = response.data.totalCount;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error fetching facilities';
        this.loading = false;
      },
    });
  }
 
}
