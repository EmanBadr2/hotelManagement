import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitiesRoutingModule } from './facilities-routing.module';

import { AddEditComponent } from './components/add-edit/add-edit.component';
import { ListFacilitiesComponent } from './components/list-facilities/list-facilities.component';


@NgModule({
  declarations: [
    AddEditComponent,
    ListFacilitiesComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule
  ]
})
export class FacilitiesModule { }
