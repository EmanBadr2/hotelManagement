import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavItemsRoutingModule } from './fav-items-routing.module';
import { FavItemsComponent } from './fav-items.component';


@NgModule({
  declarations: [
    FavItemsComponent
  ],
  imports: [
    CommonModule,
    FavItemsRoutingModule
  ]
})
export class FavItemsModule { }
