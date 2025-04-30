import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { NgChartsModule } from 'ng2-charts'; 
import { AuthInputsComponent } from '../components/auth-inputs/auth-inputs.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';

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
    DialogModule,
    DynamicDialogModule,
    NgChartsModule,
    PaginatorModule,
    DropdownModule,
    TranslateModule,
    StepsModule,
    CardModule,

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
    MenuModule,
    ButtonModule,
    SplitButtonModule ,
    NgxDropzoneModule ,
    DialogModule,
    DynamicDialogModule,
    NgChartsModule,
    PaginatorModule,
    DropdownModule,
    TranslateModule,
    StepsModule,
    CardModule,

  ],
  providers: [DialogService],
})
export class SharedModule {}
