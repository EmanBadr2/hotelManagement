import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelManagement';
  value: string | undefined;
  usernameValue:string|undefined;
  
  // constructor(private translate: TranslateService) {
  //   const lang = localStorage.getItem('lang') || 'en';
  //   this.translate.setDefaultLang(lang);
  //   this.translate.use(lang);
  // }
}
