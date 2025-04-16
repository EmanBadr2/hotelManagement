import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';




import { AuthInputsComponent } from '../components/auth-inputs/auth-inputs.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [AuthInputsComponent],
  imports: [
    CommonModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
    MenuModule,
    ButtonModule,
    SplitButtonModule ,
    NgxDropzoneModule ,
  ],
  exports: [
    CommonModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthInputsComponent,
    PrimeNgModule,
    MenuModule,
    ButtonModule,
    SplitButtonModule ,
    NgxDropzoneModule ,

  ],
})
export class SharedModule {}
