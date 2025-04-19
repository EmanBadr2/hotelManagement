import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { StorageService } from 'src/core/services/storage.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userName: string = 'User';
  userMail: string = 'upskilling@gmail.com';
  defaultImage = '../../../../assets/img/user.png';
  userID :string| null = this._StorageService.userID

  @Output() toggleSidebar = new EventEmitter<void>();

  userMenuItems: MenuItem[] = [];

  constructor(private _Router: Router ,
    private _ProfileService  :ProfileService  ,
     private _StorageService : StorageService ,
  ) {}

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


  getProfile():void{
    this._ProfileService.onGettingProfile(this.userID).subscribe({
      next(res) {
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    })
  }
}
