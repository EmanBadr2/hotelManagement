import { SharedService } from './../shared.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

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
  id: string = '';

  ngOnInit(): void {
    this.fields = this.config.data?.fields || [];
    this.title = this.config.data?.header || '';
    this.id = this.config.data?.id;
    this.isView = this.config.data?.isView || false;
    this.isEdit = this.config.data?.isEdit || false;

    if (this.router.url.includes('facilities')) {
      this.isFacilities = true;
    }
    if (this.id) {
      if (this.isFacilities) {
        this.getFacilities(this.id);
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

  save() {
    if (this.isFacilities) {
      if (this.isEdit) {
        this.SharedService.updateFacilities(
          this.id,
          this.addForm.value
        ).subscribe({
          next: () => {
            this.toastr.success('Facilities Edit Success');
            this.ref.close(true);
          },
          error: () => {
            this.toastr.error('Failed to Update');
          },
        });
      } else {
        this.SharedService.addFacilities(this.addForm.value).subscribe({
          next: () => {
            this.toastr.success('New Facilities Added Success');
            this.ref.close(true); // ✅ ده بيبلغ الـ parent إن الحفظ تم بنجاح
          },
          error: () => {
            this.toastr.error('Failed to add facility');
          },
        });
      }
    }
  }
}
