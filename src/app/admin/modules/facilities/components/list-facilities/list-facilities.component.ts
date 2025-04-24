import { FacilitiesService } from './../../services/facilities.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Facility } from '../../interfaces2/facilities';
import { DialogAddComponent } from 'src/app/admin/components/shared/dialog-add-edit/dialog-add.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeleteComponent } from 'src/app/admin/components/delete/delete.component';

@Component({
  selector: 'app-list-facilities',
  templateUrl: './list-facilities.component.html',
  styleUrls: ['./list-facilities.component.scss'],
  providers: [DialogService],
})
export class ListFacilitiesComponent {
  facilitiesList: Facility[] = [];
  rows: number = 5;
  currentPage: number = 0;
  totalCount: number = 0;
  loading: boolean = false;
  error: string = '';
  ref!: DynamicDialogRef;
  constructor(
    private facilitiesService: FacilitiesService,
    private toastr: ToastrService,
    private dialogService: DialogService
  ) {}
  ngOnInit(): void {
    this.getAllFacilities(this.currentPage, this.rows);
  }
  onPageChange(event: any): void {
    this.currentPage = event.page;
    this.rows = event.rows;
    console.log('Page Change Event:', event);
    this.getAllFacilities(this.currentPage, this.rows);
  }
  getActions(facility: Facility) {
    return [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editFacility(facility._id), // if you implement edit
      },
      {
        label: 'View',
        icon: 'pi pi-eye',
        command: () => this.viewFacility(facility._id),
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.openDeleteDialog(facility), // if you implement delete
      },
    ];
  }
  editFacility(id: string) {
    this.ref = this.dialogService.open(DialogAddComponent, {
      header: 'View Facility',
      width: '30vw',
      data: {
        id,
        isEdit: true,
        fields: [{ name: 'name', placeholder: 'Facility name', type: 'text' }],
      },
    });
    this.ref.onClose.subscribe((result) => {
      if (result) {
        this.getAllFacilities(this.currentPage, this.rows);
      }
    });
  }

  openAddDialog(): void {
    this.ref = this.dialogService.open(DialogAddComponent, {
      header: 'Add Facility',
      width: '30vw',
      data: {
        fields: [{ name: 'name', placeholder: 'Facility name', type: 'text' }],
      },
    });

    this.ref.onClose.subscribe((result) => {
      if (result) {
        this.getAllFacilities(this.currentPage, this.rows);
      }
    });
  }
  viewFacility(id: any): void {
    this.ref = this.dialogService.open(DialogAddComponent, {
      header: 'View Facility',
      width: '30vw',
      data: {
        id,
        isView: true,
        fields: [{ name: 'name', placeholder: 'Facility name', type: 'text' }],
      },
    });
  }
  openDeleteDialog(facility: Facility) {
    this.ref = this.dialogService.open(DeleteComponent, {
      header: 'Confirm Delete',
      width: '400px',
      data: {
        facility: facility,
      },
    });

    this.ref.onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.facilitiesService.deleteFacility(facility._id).subscribe({
          next: () => {
            this.facilitiesList = this.facilitiesList.filter(
              (f) => f._id !== facility._id
            );
            this.toastr.success('Facility deleted successfully');
          },
          error: () => {
            this.toastr.error('Error deleting facility');
          },
        });
      }
    });
  }

  getAllFacilities(page: number, size: number): void {
    this.loading = true;
    this.facilitiesService.getFacilities(page + 1, size).subscribe({
      next: (response) => {
        this.facilitiesList = response.data.facilities;
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
