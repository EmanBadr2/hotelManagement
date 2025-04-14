import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  login(data: any): Observable<any> {
    return this._HttpClient.post('https://upskilling-egypt.com:3000/api/v0/admin/users/login', data);
  }
  forgetPassword(data:any):Observable<any>{
    return this._HttpClient.post(`portal/users/forgot-password` , data )
  }

}
