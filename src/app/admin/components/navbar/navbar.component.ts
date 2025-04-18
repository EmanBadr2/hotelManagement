import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: string = 'User';
  userMail: string = 'upskilling@gmail.com';
  defaultImage = '../../../../assets/img/user.png';

  @Output() toggleSidebar = new EventEmitter<void>();

  userMenuItems: MenuItem[] = [];

  constructor(private _Router: Router) {}

  ngOnInit(): void {}

  logOut(): void {
    localStorage.clear();
    this._Router.navigate(['/auth']);
  }

  initMenu(): void {
    this.userMenuItems = [
      {
        label: 'Profile',
        icon: 'pi pi-user',
        // routerLink: ['/dashboard/profile', this.user?.id, true],
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.logOut(),
      },
    ];
  }
}
