import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  isPasswordHidden: boolean = true;
  isConfirmPasswordHidden: boolean = true;
  
  registerForm!: FormGroup;
  files: File[] = [];
  imagePreviews: string[] = [];
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      country: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    } , { validators: RegisterComponent.passwordMatchValidator }
  );
  } 
    static passwordMatchValidator(form: AbstractControl) {
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { mismatch: true };
    }
    onSelect(event: any) {
      for (let file of event.addedFiles) {
        this.files.push(file);
    
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviews.push(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }

    onRemove(file: File) {
      const index = this.files.indexOf(file);
      if (index >= 0) {
        this.files.splice(index, 1);
        this.imagePreviews.splice(index, 1);
      }
    }
  onSubmit(): void {
    if (this.registerForm.valid && this.files.length > 0) {
    // if (this.registerForm.valid) {

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
          this.toastr.success('Registration successful');
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.toastr.error(err.error.message || 'Registration failed.');
          // console.log(err);
        },
      });
    }
     else {
      this.registerForm.markAllAsTouched();
      if (this.files.length === 0) {
        alert('Please upload a profile image');
      }
    }
  }
  
}
