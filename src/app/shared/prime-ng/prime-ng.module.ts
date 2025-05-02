import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { RatingModule } from 'primeng/rating';
import { ConfirmPopupModule } from 'primeng/confirmpopup';



const primeNgComponents = [
  ButtonModule,
  InputTextModule,
  ProgressSpinnerModule,
  DialogModule,
  DynamicDialogModule,
  DropdownModule ,
  MultiSelectModule ,
  CalendarModule ,
  RatingModule ,
  ConfirmPopupModule
];

@NgModule({
  declarations: [],
  imports: [primeNgComponents],
  exports: [primeNgComponents],
})
export class PrimeNgModule {}
