import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';

import { ListRoomsComponent } from './components/list-rooms/list-rooms.component';
import { AddRoomsComponent } from './components/add-rooms/add-rooms.component';


@NgModule({
  declarations: [
    ListRoomsComponent,
    AddRoomsComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
