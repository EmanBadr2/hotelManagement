import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared/shared.module';
=======
// import { SharedModule } from 'primeng/api';
import { SharedModule } from '../shared/shared/shared.module';

>>>>>>> main


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule ,
    SharedModule
  ]
})
export class AuthModule { }
