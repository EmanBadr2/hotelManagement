import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { FacilitiesService } from '../../../facilities/services/facilities.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacilitiesResponseData, Facility } from '../../../facilities/interfaces2/facilities';

interface FileWithPreview extends File {
  preview?: string;
}

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss']
})
export class AddRoomsComponent implements OnInit, OnDestroy {

  activeRoomID!: any;
  isEditMode: boolean = false;
  isViewMode: boolean = false;
  isFormDisabled: boolean = false;
  addRoomForm!: FormGroup;
  files: FileWithPreview[] = [];
  facilities: Facility[] = [];
  viewImg: string[] = [];

  constructor(
    private roomsService: RoomsService,
    private facilitiesService: FacilitiesService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) { }
  ngOnInit(): void {
    this.getAllFacilities();
    this.setupForm();
    this.checkMode();
  }
  setupForm(): void {
    this.addRoomForm = this.fb.group({
      roomNumber: ['', Validators.required],
      price: ['', Validators.required],
      capacity: ['', Validators.required],
      discount: [''],
      imgs: [[]],
      facilities: [[]],
    });
  }
  checkMode(): void {
    this.activeRoomID = this.activatedRoute.snapshot.paramMap.get('id');
    this.isFormDisabled = this.activatedRoute.snapshot.queryParamMap.get('isFormDisabled') === 'true';

    if (this.activeRoomID) {
      this.isEditMode = true;
      this.viewRoom(this.activeRoomID);

      if (this.isFormDisabled) {
        this.isViewMode = true;
        this.isEditMode = false;
      }
    }
  }
  submit(): void {
    const formData = this.subFormData();

    if (!this.activeRoomID) {
      this.addRoom(formData);
    } else {
      this.updateRoom(this.activeRoomID, formData);
    }
  }
  subFormData(): FormData {
    const formValues = this.addRoomForm.value;
    const formData = new FormData();

    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        if (key === 'facilities' && Array.isArray(formValues[key])) {
          formValues[key].forEach((facility: any) => {
            formData.append('facilities', facility._id);
          });
        } else if (key !== 'imgs') {
          formData.append(key, formValues[key]);
        }
      }
    }
    if (this.files.length > 0) {
      this.files.forEach(file => {
        formData.append('imgs', file);
      });
    }
    return formData;
  }
  addRoom(formData: FormData): void {
    this.roomsService.addRoom(formData).subscribe({
      next: () => {
        this.toastrService.success('Room added successfully');
        this.router.navigate(['/admin/rooms/rooms']);
      },
      error: (err) => {
        console.log(err);
        this.toastrService.error('Error in adding room');
      }
    });
  }
  updateRoom(id: number | string, formData: FormData): void {
    this.roomsService.updateRoom(id, formData).subscribe({
      next: () => {
        this.toastrService.success('Room updated successfully');
        this.router.navigate(['/admin/rooms/rooms']);
      },
      error: (err) => {
        console.log(err);
        this.toastrService.error('Error in updating room');
      }
    });
  }
  viewRoom(id: number | string): void {
    this.roomsService.viewRoomDetails(id).subscribe({
      next: (res) => {
        const room = res.data.room;

        this.addRoomForm.patchValue({
          roomNumber: room.roomNumber,
          price: room.price,
          capacity: room.capacity,
          discount: room.discount,
          facilities: room.facilities,
        });

        this.viewImg = room.images;

        if (this.isViewMode) {
          this.addRoomForm.disable();
        }
      },
      error: (err) => {
        console.log(err);
        this.toastrService.error('Error in viewing room');
      }
    });
  }

  getAllFacilities(): void {
    this.facilitiesService.getFacilities(1, 10).subscribe({
      next: (response) => {
        this.facilities = response.data.facilities;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onSelect(event: any): void {
    const selectedFiles = event.addedFiles;
    for (let file of selectedFiles) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        (file as FileWithPreview).preview = e.target.result;
        this.files.push(file);
        this.addRoomForm.patchValue({ images: this.files });
      };
      reader.readAsDataURL(file);
    }
  }

  onRemove(file: FileWithPreview): void {
    this.files = this.files.filter(f => f !== file);
    this.addRoomForm.patchValue({ images: this.files });
  }

  ngOnDestroy(): void {
    this.isViewMode = false;
    this.isEditMode = false;
  }
}