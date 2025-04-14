import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  isPasswordHidden: boolean = true;
  isConfirmPasswordHidden: boolean = true;

  constructor(private authService: AuthService,
     private _ToastrService:ToastrService ,
      private router: Router) {}

  resetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required , Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
    seed: new FormControl('',[Validators.required] )
  }, { validators: ResetPasswordComponent.passwordMatchValidator });

  static passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  sendData(data: FormGroup) {
    if (this.resetPasswordForm.invalid) {
      this._ToastrService.error('Please fill in all required fields!', 'Validation Error');
      return;
    }

    this.authService.resetPassword(data.value).subscribe({
      next: () => {
        localStorage.setItem('resetDone', 'true');
        this._ToastrService.success(' Password updated successfully')
        this.router.navigate(['auth']);
      },
      error: (err) => {
        console.log(err.error);
        this._ToastrService.error(err.error.message);
      } ,
      complete:() => {
      },
    });


    console.log(data.value);
  }
}
