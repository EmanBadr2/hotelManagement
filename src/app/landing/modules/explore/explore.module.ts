import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { LandingModule } from '../../landing.module';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    ExploreComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule ,
    LandingModule
  ]
})
export class ExploreModule { }
