import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfileRes } from '../interfaces/profile';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _HttpClient:HttpClient) { }

  onGettingProfile(userId:any , userName :any ):Observable<any>{
    return this._HttpClient.post(`admin/users/`, {"_id": userId, "userName" : userName} )
  }

}
