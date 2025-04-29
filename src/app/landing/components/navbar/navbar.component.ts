import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/core/services/storage.service';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  selectedLang = 'en';

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'en';
    this.selectedLang = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';


    // document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  changeLanguage(lang: string) {
    console.log('Selected lang:', lang);
    this.selectedLang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
  menuOpen = false;
  userName = '';
  isUser:boolean =false
  isUserLoggedIn: boolean = false; // Replace with actual user check
  serviceStorge = inject(StorageService);
  userId = localStorage.getItem('userID') || ''; // Get the user ID from local storage
  ngOnInit() {
    this.isUserLoggedIn =
      this.serviceStorge.isLogged ||
      localStorage.getItem('userRole') === 'user'; // Check if the user is logged in
    this.userName = this.serviceStorge.userName || ''; // Get the user name from the service
    if( this.serviceStorge.userRole == 'user'){
      this.isUser =true
    }
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logout(){
    // this.isUser =false
    // localStorage.clear()
  }

}




