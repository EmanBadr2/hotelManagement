import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    AdsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ]
})
export class AdsModule { }
