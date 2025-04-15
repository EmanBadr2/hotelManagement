import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';


const primeNgComponents = [
  ButtonModule,
  InputTextModule,
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
