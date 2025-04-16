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
  fb = inject(FormBuilder);
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);
  router = inject(Router);
  SharedService=inject(SharedService);
  toastr=inject(ToastrService)
  isFacilities:boolean=false;

  ngOnInit(): void {
    this.fields = this.config.data?.fields || [];
    this.title = this.config.data?.header || '';
    if(this.router.url.includes('facilities')){
      this.isFacilities=true;
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

  save() {
    if (this.isFacilities) {
      this.SharedService.addFacilities(this.addForm.value).subscribe({
        next: () => {
          this.toastr.success('New Facilities Added Success');
          this.ref.close(true); // ✅ ده بيبلغ الـ parent إن الحفظ تم بنجاح
        },
        error: () => {
          this.toastr.error('Failed to add facility');
        }
      });
    }
  }
  
}
