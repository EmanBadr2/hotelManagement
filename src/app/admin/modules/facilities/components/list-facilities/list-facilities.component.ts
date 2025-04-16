import { FacilitiesService } from './../../services/facilities.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Facility } from '../../interfaces2/facilities';
import { DialogAddComponent } from 'src/app/admin/components/shared/dialog-add-edit/dialog-add.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-list-facilities',
  templateUrl: './list-facilities.component.html',
  styleUrls: ['./list-facilities.component.scss'],
  providers: [DialogService],
})
export class ListFacilitiesComponent {
  facilitiesList: Facility[] = [];
  totalCount: number = 0;
  isLoading: boolean = false;
  error: string = '';
  ref!: DynamicDialogRef;

  constructor(
    private facilitiesService: FacilitiesService,
    private toastr: ToastrService,
    private dialogService: DialogService
  ) {}
  ngOnInit(): void {
    this.getAllFacilities();
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
        // بعد الإضافة الناجحة يتم عمل refresh
        this.getAllFacilities();
      }
    });
  }

  openDeleteDialog(facility: Facility) {
    console.log('Delete facility:', facility);
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
        this.getAllFacilities();
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
