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
    return this._HttpClient.get<IRoomsRes>(`admin/rooms` , {params : params})
  }

  onAddRoom(data:FormData):Observable<IRoomsRes>{
    return this._HttpClient.post<IRoomsRes>(`admin/rooms` , data)
  }


  viewRoomDetails(id : number |string):Observable<any>{
    return this._HttpClient.get<IRoomsRes>(`https://upskilling-egypt.com:3000/api/v0/admin/rooms/${id}`)
  }

  updateRoom(id : number |string , data :any):Observable<IRoomsRes>{
    return this._HttpClient.put<IRoomsRes>(`https://upskilling-egypt.com:3000/api/v0/admin/rooms/${id}` , data)
  }

 deleteRoom(id : number |string):Observable<any>{
    return this._HttpClient.delete(`https://upskilling-egypt.com:3000/api/v0/admin/rooms/${id}`)
  }
}
