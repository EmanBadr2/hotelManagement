import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DeleteComponent } from './components/delete/delete.component';
import { SharedModule } from '../shared/shared/shared.module';
import { DialogViewEditComponent } from './components/shared/dialog-view-edit/dialog-view-edit.component';
import { DialogAddComponent } from './components/shared/dialog-add-edit/dialog-add.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    DeleteComponent,

    DialogViewEditComponent,
    DialogAddComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  exports: [DialogAddComponent],
})
export class AdminModule {}
