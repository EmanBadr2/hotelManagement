import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPassword : FormGroup= new FormGroup({
    email :new  FormControl('' , [Validators.email , Validators.required ])
  })
  constructor(private _AuthService:AuthService){}

  onSubmit(form:any):void{
    console.log('done');
    console.log(form);
    this._AuthService.forgetPassword(form).subscribe({
      next :(res)=>{
        console.log(res);
       } ,
       error :(err)=>{
        console.log(err);
       } ,
    })
  }

}
