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
    return this._HttpClient.post(
      'https://upskilling-egypt.com:3000/api/v0/portal/users',
      data
    );
  }
  login(data: any): Observable<any> {
    return this._HttpClient.post('https://upskilling-egypt.com:3000/api/v0/admin/users/login', data);
  }


  resetPassword(data: FormGroup): Observable<any> {
    return this._HttpClient.post(
      'https://upskilling-egypt.com:3000/api/v0/portal/users/reset-password',
      data
    );
  }

  forgetPassword(data: any): Observable<any> {
    return this._HttpClient.post(
      `https://upskilling-egypt.com:3000/api/v0/portal/users/forgot-password`,
      data
    );
  }
}

