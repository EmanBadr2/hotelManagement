import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';

import { ListRoomsComponent } from './components/list-rooms/list-rooms.component';
import { AddRoomsComponent } from './components/add-rooms/add-rooms.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    ListRoomsComponent,
    AddRoomsComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule ,
    SharedModule
  ]
})
export class RoomsModule { }
