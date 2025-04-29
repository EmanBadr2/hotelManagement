import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
})
export class AuthDialogComponent {
  resourcePath = 'authDialog.'
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}
  
}
