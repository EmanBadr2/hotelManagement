import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavItemsRoutingModule } from './fav-items-routing.module';
import { FavItemsComponent } from './fav-items.component';
import { LandingModule } from "../../landing.module";
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    FavItemsComponent
  ],
  imports: [
    CommonModule,
    FavItemsRoutingModule,
    LandingModule,
    TranslateModule
]
})
export class FavItemsModule { }
