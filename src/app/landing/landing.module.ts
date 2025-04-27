import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { LandingComponent } from './components/landing/landing.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SharedModule } from '../shared/shared/shared.module';
import { AdsCurdComponent } from './components/ads-curd/ads-curd.component';
import { TranslateModule } from '@ngx-translate/core';
import { HappyComponent } from './components/happy/happy.component';
import { CardsComponent } from './components/cards/cards.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';



@NgModule({
  declarations: [
    LandingComponent,
    FooterComponent,
    NavbarComponent,
    UserComponent,
    DatePickerComponent,
    AdsCurdComponent,
    HappyComponent,
    CardsComponent,
    AuthDialogComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule ,
    SharedModule,
    TranslateModule
  ] ,
  exports :[
    FooterComponent,
    NavbarComponent,

  ]
})
export class LandingModule { }
