import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { LandingComponent } from './components/landing/landing.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SharedModule } from '../shared/shared/shared.module';
import { CurdsComponent } from './components/curds/curds.component';
import { AdsCurdComponent } from './components/ads-curd/ads-curd.component';
import { TranslateModule } from '@ngx-translate/core';
import { HappyComponent } from './components/happy/happy.component';



@NgModule({
  declarations: [
    LandingComponent,
    FooterComponent,
    NavbarComponent,
    UserComponent,
    DatePickerComponent,
    CurdsComponent,
    AdsCurdComponent,
    HappyComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule ,
    SharedModule,
    TranslateModule
  ]
})
export class LandingModule { }
