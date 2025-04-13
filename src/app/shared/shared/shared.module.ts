import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { AuthInputsComponent } from '../components/auth-inputs/auth-inputs.component';

@NgModule({
  declarations: [AuthInputsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthInputsComponent,
    PrimeNgModule,
  ],
})
export class SharedModule {}
