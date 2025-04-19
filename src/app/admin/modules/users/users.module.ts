import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ViewUserDialogComponent } from './components/view-user-dialog/view-user-dialog.component';


@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUserDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
