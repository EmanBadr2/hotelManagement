import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


const primeNgComponents = [ButtonModule,
  InputTextModule];


@NgModule({
  declarations: [],
  imports: [
    primeNgComponents
    
  ],
  exports:[primeNgComponents]
})
export class PrimeNgModule { }
