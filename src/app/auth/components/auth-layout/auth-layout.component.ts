import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {
  imageUrl: string = '';
  isLoginPage: boolean = false;


  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url.includes('/login');
    });
    this.setImage();
    this.router.events.subscribe(() => {
      this.setImage();
    });
  }

  setImage() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('login')) {
      this.imageUrl = '../../../../assets/img/login.png';
    } else if (currentUrl.includes('register')) {
      this.imageUrl = '../../../../assets/img/register.png';
    } else if (currentUrl.includes('forgetPassword')) {
      this.imageUrl = '../../../../assets/img/foget-password.png';
    } else if (currentUrl.includes('resetPassword')) {
      this.imageUrl = '../../../../assets/img/foget-password.png';
    }
  }
}
