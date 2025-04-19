import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



const primeNgComponents = [
  ButtonModule,
  InputTextModule,
  ProgressSpinnerModule,
  DialogModule,
  DynamicDialogModule,
  DropdownModule
];

@NgModule({
  declarations: [],
  imports: [primeNgComponents],
  exports: [primeNgComponents],
})
export class PrimeNgModule {}
