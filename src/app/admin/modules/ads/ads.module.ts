import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';


@NgModule({
  declarations: [
    AdsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule
  ]
})
export class AdsModule { }
