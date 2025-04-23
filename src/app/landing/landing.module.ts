import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { LandingComponent } from './components/landing/landing.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CurdsComponent } from './components/curds/curds.component';


@NgModule({
  declarations: [
    LandingComponent,
    FooterComponent,
    NavbarComponent,
    UserComponent,
    DatePickerComponent,
    CurdsComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
