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
    return this._HttpClient.post(`admin/users/`,userId
    //   {
    //     "_id": "680397ae662a988e021f5dea",
    //     "userName": "Hnazeer001",
    //     "email": "h_khan4@outlook.com",
    //     "phoneNumber": 1111111111,
    //     "country": "egypt",
    //     "role": "admin",
    //     "profileImage": "http://res.cloudinary.com/dpa4yqvdv/image/upload/v1745065902/users/c8jpmk6hlatnajukuou0.jpg",
    //     "verified": false,
    //     "createdAt": "2025-04-19T12:31:42.596Z",
    //     "updatedAt": "2025-04-19T12:31:42.596Z"
    // }
     )
  }

}
