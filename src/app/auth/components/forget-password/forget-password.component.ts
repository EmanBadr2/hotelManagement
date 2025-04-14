import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPassword:FormGroup= new FormGroup({
    email :new  FormControl('' , [Validators.email , Validators.required ])
  })
  constructor(){}

  onSubmit(form:any):void{
    console.log('done');
    console.log(form);
  }

}
