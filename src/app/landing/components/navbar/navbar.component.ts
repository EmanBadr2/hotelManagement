import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/core/services/storage.service';


@Component({
  selector: 'app-landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  selectedLang = 'en';
  menuOpen = false;
  userName = '';
  isUser: boolean = false;
  isUserLoggedIn: boolean = false; // Replace with actual user check
  userId = localStorage.getItem('userID') || ''; // Get the user ID from local storage

  constructor(
    private translate: TranslateService,
    private route: Router,
    private serviceStorage: StorageService
  ) {
    const testUser = localStorage.getItem('userRole');
    console.log(testUser);

    const lang = localStorage.getItem('lang') || 'en';
    this.selectedLang = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  ngOnInit() {
    this.serviceStorage.loadFromLocalStorage(); // Refresh service values
    this.userName = this.serviceStorage.userName || '';
    this.isUser = this.serviceStorage.isUser;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logout() {
    this.serviceStorage.logout()
    this.isUser = false;
    // localStorage.clear();
    // this.route.navigate(['/auth/login']);
    this.route.navigate(['/landing']);

  }
  changeLanguage(lang: string) {
    console.log('Selected lang:', lang);
    this.selectedLang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
