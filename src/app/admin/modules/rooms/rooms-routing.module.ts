import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoomsComponent } from './components/list-rooms/list-rooms.component';
import { AddRoomsComponent } from './components/add-rooms/add-rooms.component';


const routes: Routes = [
  { path: '', redirectTo :'rooms' , pathMatch : 'full'} ,
  { path: 'rooms', component: ListRoomsComponent } ,
  { path: 'add-rooms', component: AddRoomsComponent } ,
  { path: 'add-rooms/:id', component: AddRoomsComponent } ,
  { path: 'add-rooms/:id/:formDisabled', component: AddRoomsComponent } ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
