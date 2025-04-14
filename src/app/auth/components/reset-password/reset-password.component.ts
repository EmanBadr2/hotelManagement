import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  isPasswordHidden: boolean = true;
  isConfirmPasswordHidden: boolean = true;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

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
      this.toastr.error('Please fill in all required fields!', 'Validation Error');
      return;
    }
  
    this.authService.resetPassword(data.value).subscribe({
      next: () => {
        this.toastr.success('Password Reset Successfully');
        localStorage.setItem('resetDone', 'true');
        this.router.navigate(['auth']);
      },
      error: (err) => {
        console.log(err.error);
        this.toastr.error(err.error.message);
      }
    });
  
    console.log(data.value);
  }
}
