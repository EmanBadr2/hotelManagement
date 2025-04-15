import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AuthInputsComponent } from '../components/auth-inputs/auth-inputs.component';

@NgModule({
  declarations: [AuthInputsComponent],
  imports: [
    CommonModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthInputsComponent,
    PrimeNgModule,
    TooltipModule,
    ToolbarModule,
    SplitButtonModule
  ],
})
export class SharedModule {}
