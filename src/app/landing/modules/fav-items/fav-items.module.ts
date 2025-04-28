import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavItemsRoutingModule } from './fav-items-routing.module';
import { FavItemsComponent } from './fav-items.component';
import { LandingModule } from "../../landing.module";


@NgModule({
  declarations: [
    FavItemsComponent
  ],
  imports: [
    CommonModule,
    FavItemsRoutingModule,
    LandingModule
]
})
export class FavItemsModule { }
