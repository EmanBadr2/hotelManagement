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
  testIsUser:any

  constructor(private translate: TranslateService ,private _Router:Router) {
   this.testIsUser = localStorage.getItem('isUser')

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
  // isUser:boolean =false
  isUserLoggedIn: boolean = false; // Replace with actual user check
  serviceStorage = inject(StorageService);
  userId = localStorage.getItem('userID') || ''; // Get the user ID from local storage
  ngOnInit() {
    this.userName = this.serviceStorage.userName || ''; // Get the user name from the service
    if( this.serviceStorage.isUser){
      this.testIsUser ='true'
    }
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logout(){
    localStorage.clear()
    this.isUser()
    this._Router.navigate(['/landing'])
  }

  isUser():boolean{
      if (this.testIsUser == 'true') {
        return true
      }
      else{
        return false
      }
  }

}




