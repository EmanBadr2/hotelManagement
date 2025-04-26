import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { DesplayComponent } from './desplay/desplay.component';
import { LandingModule } from '../../landing.module';


@NgModule({
  declarations: [
    ExploreComponent,
    DesplayComponent,
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule ,
    LandingModule
  ]
})
export class ExploreModule { }
