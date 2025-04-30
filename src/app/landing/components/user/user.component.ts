import { user } from './../../modules/details-page/interfaces/review';
import { Component, inject, OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';
import { IProfileRes, IUser } from 'src/app/shared/interfaces/profile';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  resourcePath = 'userProfile.';
  landingService = inject(LandingService);
  userId = localStorage.getItem('userID') || '';
  user!: IProfileRes;
  userProfile!: FormGroup;
  isEdit = false;
  constructor() {
    this.userProfile = new FormGroup({
      profileImage: new FormControl(''),
      userName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      country: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
    
  }
  ngOnInit(): void {
    this.landingService.getProfileDetails(this.userId).subscribe({
      next: (res) => {
        this.user = res;
        this.userProfile.patchValue({
          profileImage: res.data.user.profileImage,
          userName: res.data.user.userName,
          email: res.data.user.email,
          phoneNumber: res.data.user.phoneNumber,
          country: res.data.user.country,
        });
        if(!this.isEdit){
          this.userProfile.disable();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
    if (this.isEdit) {
      this.userProfile.enable();
    } else {
      this.userProfile.disable();
    }
  }
}
