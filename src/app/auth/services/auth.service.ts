import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 

  constructor(private _HttpClient:HttpClient) { }
  register(data: FormData): Observable<any> {
    return this._HttpClient.post('portal/users', data);
  }
  login(data: any): Observable<any> {
    return this._HttpClient.post('portal/users/login', data);
  }


  resetPassword(data: FormGroup): Observable<any> {
    return this._HttpClient.post(
      'portal/users/reset-password',
      data
    );
  }

  forgetPassword(data: any): Observable<any> {
    return this._HttpClient.post(
      `portal/users/forgot-password`,
      data
    );
  }
}

