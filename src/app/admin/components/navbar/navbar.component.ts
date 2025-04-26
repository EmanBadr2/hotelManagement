import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ProfileComponent } from '../../../shared/components/profile/profile.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userName: string = 'User';
  userMail: string = 'upskilling@gmail.com';
  defaultImage = '../../../../assets/img/user.png';
  @Output() toggleSidebar = new EventEmitter<void>();

  userMenuItems: MenuItem[] = [];

  constructor(private _Router: Router ,
    // private translate: TranslateService
  ) {}
  //  {
  //   const lang = localStorage.getItem('lang') || 'en'; 
  //   this.selectedLanguage = lang;
  //   this.translate.setDefaultLang(lang);
  //   this.translate.use(lang);
  
  //   // document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // }

  ngOnInit(): void {
    this.initMenu();
  }
  

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

  // languages = [
  //   { label: 'English', value: 'en' },
  //   { label: 'العربية', value: 'ar' }
  // ];

  // selectedLanguage: string = 'en';

  // changeLanguage(lang: string) {
  //   console.log('Selected lang:', lang);
  //   this.selectedLanguage = lang;
  //   localStorage.setItem('lang', lang);
  //   this.translate.setDefaultLang(lang);
  //   this.translate.use(lang);
  // }


}
