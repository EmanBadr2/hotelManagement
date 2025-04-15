import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  ngOnInit(): void {
    this.fields = this.config.data?.fields || [];
    this.title = this.config.data?.header || '';

    if (this.fields.length === 0) {
      throw new Error('Fields config is required');
    }

    const formGroupConfig: Record<string, any> = {};
    for (const field of this.fields) {
      formGroupConfig[field.name] = [''];
    }
    console.log(this.fields);
    this.addForm = this.fb.group(formGroupConfig);
  }

  closeDialog() {
    this.ref.close();
  }

  save() {
    this.ref.close(this.addForm.value);
  }
}
