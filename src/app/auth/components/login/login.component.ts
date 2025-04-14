import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isPasswordHidden: boolean = true;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/)
    ]),
  });
  
  onSubmit() {
    if (this.loginForm.invalid) {
      this.toastr.error('Please fill in all the required fields.');
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        if (res && res.success) {
          this.toastr.success('Login successfully');

          localStorage.setItem('userToken', res.data.token);
  
          if (res.data.user.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (res.data.user.role === 'user') {
            this.router.navigate(['/landing']);
          } else {
            this.toastr.error('Unknown role');
          }
        } else {
          this.toastr.error('Login failed. Please try again.');
        }
      },
      error: (err) => {
        this.toastr.error(err.error.message || 'An error occurred during login');
      }
    });
  }
  
}