import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    public config: DynamicDialogConfig,
    private router: Router
  ) {}

  goToLogin() {
    this.ref.close(); // يقفل الدايالوج
    this.router.navigate(['/auth/login']); // يروح لصفحة تسجيل الدخول
  }

  goToRegister() {
    this.ref.close();
    this.router.navigate(['/auth/register']);
  }
  
}
