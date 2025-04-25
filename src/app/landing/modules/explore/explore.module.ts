import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { DesplayComponent } from './desplay/desplay.component';


@NgModule({
  declarations: [
    ExploreComponent,
    DesplayComponent,
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
