import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoomsRes } from '../interfaces/IRooms';
import { IAddRoomRes } from '../interfaces/IAddRooms';



@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _HttpClient:HttpClient) { }

  onGettingAllRooms( params :any ):Observable<IRoomsRes>{
    return this._HttpClient.get<IRoomsRes>(`https://upskilling-egypt.com:3000/api/v0/admin/rooms` , {params : params})
  }

  onAddRoom(data:FormData):Observable<IAddRoomRes>{
    return this._HttpClient.post<IAddRoomRes>(`https://upskilling-egypt.com:3000/api/v0/admin/rooms` , data)
  }

  viewRoom(id : number |string):Observable<IRoomsRes>{
    return this._HttpClient.get<IRoomsRes>(`https://upskilling-egypt.com:3000/api/v0/admin/rooms${id}`)
  }

  editRoom(id : number |string , data :any):Observable<IAddRoomRes>{
    return this._HttpClient.put<IAddRoomRes>(`https://upskilling-egypt.com:3000/api/v0/admin/rooms${id}` , data)
  }

 deleteRoom(id : number |string):Observable<any>{
    return this._HttpClient.delete(`admin/rooms${id}`)
  }

}
