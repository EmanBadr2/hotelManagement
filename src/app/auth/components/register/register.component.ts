import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  files: File[] = [];
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      country: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onSubmit(): void {
    if (this.registerForm.valid && this.files.length > 0) {
      const formData = new FormData();
  
      // Add form fields
      Object.entries(this.registerForm.value).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
  
      // Add role
      formData.append('role', 'user');
  
      // Add the image file (assuming only one file allowed)
      formData.append('profileImage', this.files[0]);
  
      this.authService.register(formData).subscribe({
        next: (res) => {
          console.log('Registration successful:', res);
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.error('Registration error:', err);
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
      if (this.files.length === 0) {
        alert('Please upload a profile image');
      }
    }
  }
  
}
