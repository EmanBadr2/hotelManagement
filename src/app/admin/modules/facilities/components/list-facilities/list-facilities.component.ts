import { FacilitiesService } from './../../services/facilities.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Facility } from '../../interfaces2/facilities';
import { DeleteComponent } from 'src/app/admin/components/delete/delete.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-list-facilities',
  templateUrl: './list-facilities.component.html',
  styleUrls: ['./list-facilities.component.scss']
})
export class ListFacilitiesComponent {
  ref!: DynamicDialogRef;
  facilitiesList: Facility[] = [];
  totalCount: number = 0;
  isLoading: boolean = false;
  error: string = '';

  constructor(
    private dialogService: DialogService,
    private facilitiesService: FacilitiesService,
    private toastr: ToastrService,
  ) {
   
  }

  openDeleteDialog(facility: Facility) {
    this.ref = this.dialogService.open(DeleteComponent, {
      header: 'Confirm Delete',
      width: '400px',
      data: {
        facility: facility
      }
    });

    this.ref.onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.facilitiesService.deleteFacility(facility._id).subscribe({
          next: () => {
            this.facilitiesList = this.facilitiesList.filter(f => f._id !== facility._id);
            this.toastr.success('Facility deleted successfully');
          },
          error: () => {
            this.toastr.error('Error deleting facility');
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.getAllFacilities();
  }
  getFacilityActions(facility: Facility) {
    return [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        // command: () => this.editFacility(facility.id)
      },
      {
        label: 'View',
        icon: 'pi pi-eye',
        // command: () => this.viewFacility(facility.id)
      },
        {
          label: 'Delete',
          icon: 'pi pi-trash',
          command: () => {
            this.openDeleteDialog(facility);
          }
        }
    ];
  }
  

  getAllFacilities(): void {
    this.isLoading = true;
    this.facilitiesService.getFacilities().subscribe({
      next: (response) => {
        this.facilitiesList = response.data.facilities;
        this.totalCount = response.data.totalCount;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error fetching facilities';
        this.isLoading = false;
      },
    });
  }



}
