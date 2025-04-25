import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoomsRes } from '../interfaces/IRooms';



@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _HttpClient:HttpClient) { }

  onGettingAllRooms( page: number = 1, size: number = 10 ):Observable<IRoomsRes>{
    return this._HttpClient.get<IRoomsRes>(`admin/rooms?page=${page}&size=${size}`)
  }

  addRoom(data:FormData):Observable<IRoomsRes>{
    return this._HttpClient.post<IRoomsRes>(`admin/rooms`, data)
  }


  viewRoomDetails(id : number |string):Observable<any>{
    return this._HttpClient.get<IRoomsRes>(`admin/rooms/${id}`)
  }

  updateRoom(id : number |string , data :any):Observable<IRoomsRes>{
    return this._HttpClient.put<IRoomsRes>(`admin/rooms/${id}` , data)
  }

 deleteRoom(id : number |string):Observable<any>{
    return this._HttpClient.delete(`admin/rooms/${id}`)
  }
}
