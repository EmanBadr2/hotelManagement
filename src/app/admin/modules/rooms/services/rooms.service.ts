import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoomsRes } from '../interfaces/IRooms';



@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _HttpClient:HttpClient) { }

  onGettingAllRooms( params :any ):Observable<IRoomsRes>{
    return this._HttpClient.get<IRoomsRes>(`https://upskilling-egypt.com:3000/api/v0/admin/rooms` , {params : params})
  }

}
