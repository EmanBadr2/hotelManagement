import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _HttpClient:HttpClient) { }

  onGettingProfile(userId:any):Observable<any>{
    return this._HttpClient.post(`/admin/users/`, userId)
  }

}
