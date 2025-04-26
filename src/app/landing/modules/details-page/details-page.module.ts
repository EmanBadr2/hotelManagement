import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsPageComponent } from './details-page.component';
import { LandingModule } from '../../landing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ContentComponent } from './components/content/content.component';



@NgModule({
  declarations: [
    DetailsPageComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    DetailsPageRoutingModule ,
    LandingModule ,
    SharedModule
  ]
})
export class DetailsPageModule { }
