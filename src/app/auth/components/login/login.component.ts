import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isPasswordHidden: boolean = true;
  userID!: string | number;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private storgeServices:StorageService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/
      ),
    ]),
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.toastr.error('Please fill in all the required fields.');
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);

        this.toastr.success('login successfully');
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userRole', res.data.user.role);
        localStorage.setItem('userID', res.data.user._id);
        localStorage.setItem('userName', res.data.user.userName);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        if( localStorage.getItem('userRole')=='user'){
        localStorage.setItem('isUser', 'true');
        localStorage.setItem('isAdmin', 'false');
        }
        if( localStorage.getItem('userRole')=='admin'){
          localStorage.setItem('isAdmin', 'true');
          localStorage.setItem('isUser', 'false');
          }

        if (res.data.user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (res.data.user.role === 'user') {
          this.router.navigate(['/landing']);
        } else {
          this.toastr.error('Unknown role');
        }
      },
      error: (err) => {
        this.toastr.error(err.error.message || 'error');
      },
    });
  }
}
