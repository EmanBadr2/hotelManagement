import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared/shared.module';
import { DialogAddComponent } from './components/shared/dialog-add-edit/dialog-add.component';
import { LogoutDialogComponent } from './components/logout-dialog/logout-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    DeleteComponent,
    DashboardComponent,
    DialogAddComponent,
    LogoutDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
