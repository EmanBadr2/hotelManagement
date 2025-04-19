import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IChangePassword } from './interface/change-password';
import { ChangePasswordService } from './services/changePassword.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  isLoading = false;
  changePasswordForm!: FormGroup;
  fb = inject(FormBuilder);
  passwordService = inject(ChangePasswordService);
  toastr = inject(ToastrService);

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  changePassword(): void {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    const formValue: IChangePassword = this.changePasswordForm.value;

    if (formValue.newPassword !== formValue.confirmPassword) {
      this.toastr.error("New password and confirm password don't match");
      return;
    }

    this.isLoading = true;

    this.passwordService.changePassword(formValue).subscribe({
      next: () => {
        this.toastr.success('Password changed successfully!');
        this.changePasswordForm.reset();
      },
      error: () => {
        this.toastr.error('Failed to change password');
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
