import { SharedService } from './../shared.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Ad } from 'src/app/admin/modules/ads/Interfaces/ads';

export interface FormFieldConfig {
  name: string;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'select' | 'textarea';
  options?: { label: string; value: any }[];
}

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
})
export class DialogAddComponent implements OnInit {
  addForm!: FormGroup;
  fields: FormFieldConfig[] = [];
  adsList: any;
  title: string = '';
  isView: boolean = false;
  isEdit: boolean = false;
  fb = inject(FormBuilder);
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);
  router = inject(Router);
  SharedService = inject(SharedService);
  toastr = inject(ToastrService);
  isFacilities: boolean = false;
  isAds: boolean = false;
  id: string = '';

  ngOnInit(): void {
    this.fields = this.config.data?.fields || [];
    this.adsList = this.config.data?.ads || [];
    
    this.title = this.config.data?.header || '';
    this.id = this.config.data?.id;
    this.isView = this.config.data?.isView || false;
    this.isEdit = this.config.data?.isEdit || false;

    if (this.router.url.includes('facilities')) {
      this.isFacilities = true;
    }
    if (this.router.url.includes('Ads')) {
      this.isAds = true;
    }
    if (this.id) {
      if (this.isFacilities) {
        this.getFacilities(this.id);
      }
      if (this.isAds) {
        this.getAds(this.id);
      }
    }
    if (this.fields.length === 0) {
      throw new Error('Fields config is required');
    }

    const formGroupConfig: Record<string, any> = {};
    for (const field of this.fields) {
      formGroupConfig[field.name] = [''];
    }
    this.addForm = this.fb.group(formGroupConfig);
  }

  closeDialog() {
    this.ref.close();
  }
  getFacilities(id: string) {
    this.SharedService.getFacilities(id).subscribe({
      next: (res) => {
        const facilityName = res.data?.facility?.name;
        if (facilityName) {
          this.addForm.patchValue({ name: facilityName });
        }
        if (this.isView) {
          this.addForm.disable();
        }
      },
      error: () => {
        this.toastr.error('Failed to fetch facility');
      },
    });
  }
  getAds(id: string) {
    this.SharedService.getAds(id).subscribe({
      next: (res) => {
        console.log(res);
        const adsName = res.data?.ads?.room.roomNumber;
        const adsDiscount = res.data?.ads?.room.discount;
        const adsActive = res.data?.ads?.isActive;
        console.log(adsName);

        if (adsName&&this.isView) {
          this.addForm.patchValue({
            Name: adsName,
            Discount: adsDiscount,
            Active: adsActive,
          });
        }
        if (adsName&&this.isEdit) {
          this.addForm.patchValue({
            Name: adsName,
            discount: adsDiscount,
            isActive: adsActive,
          });
          this.addForm.get('Name')?.disable();
        }
        if (this.isView) {
          this.addForm.disable();
        }
      },
      error: () => {
        this.toastr.error('Failed to fetch facility');
      },
    });
  }

  save() {
    if (this.isEdit) {
      if (this.isFacilities) {
        this.SharedService.updateFacilities(
          this.id,
          this.addForm.value
        ).subscribe({
          next: () => {
            this.toastr.success('Facilities Edit Success');
            this.ref.close(true);
          },
          error: () => {
            this.toastr.error('Failed to update facility');
          },
        });
      } else if (this.isAds) {
        this.SharedService.updateAds(this.id, this.addForm.value).subscribe({
          next: () => {
            this.toastr.success('Ads Edit Success');
            this.ref.close(true);
          },
          error: () => {
            this.toastr.error('Failed to update ad');
          },
        });
      }
    } else {
      if (this.isFacilities) {
        this.SharedService.addFacilities(this.addForm.value).subscribe({
          next: () => {
            this.toastr.success('New Facility Added Successfully');
            this.ref.close(true);
          },
          error: () => {
            this.toastr.error('Failed to add facility');
          },
        });
      } else if (this.isAds) {
        this.SharedService.addAds(this.addForm.value).subscribe({
          next: () => {
            this.toastr.success('New Ad Added Successfully');
            this.ref.close(true);
          },
          error: () => {
            this.toastr.error('Failed to add ad');
          },
        });
      }
    }
  }
}
