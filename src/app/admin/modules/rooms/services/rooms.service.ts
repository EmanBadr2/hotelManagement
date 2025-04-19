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


  viewRoomDetails(id : number |string):Observable<IRoomsRes>{
    return this._HttpClient.get<IRoomsRes>(`admin/rooms${id}`)
  }

  editRoom(id : number |string , data :any):Observable<IRoomsRes>{
    return this._HttpClient.put<IRoomsRes>(`admin/rooms${id}` , data)
  }

 deleteRoom(id : number |string):Observable<any>{
    return this._HttpClient.delete(`admin/rooms${id}`)
  }
}