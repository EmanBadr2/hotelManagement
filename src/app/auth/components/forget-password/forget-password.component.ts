import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPassword : FormGroup= new FormGroup({
    email :new  FormControl('' , [Validators.email , Validators.required ])
  })
  constructor(private _AuthService:AuthService ,
    private _ToastrService:ToastrService ,
    private _Router:Router
  ){ }

  sendData(form:FormGroup):void{

    console.log(form.value);

    this._AuthService.forgetPassword(form.value).subscribe({
      next :(res)=>{
        console.log(res);
         this._ToastrService.success('check You email..')
        this._Router.navigate(['auth/resetPassword'])
       } ,
       error :(err)=>{
        this._ToastrService.error(err.error.message)
        console.log(err);
       } ,
       complete :() =>{

       },
    })
  }

}
