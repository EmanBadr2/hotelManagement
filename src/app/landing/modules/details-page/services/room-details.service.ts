import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pageDetailsRes } from 'src/app/landing/interface/pageDetals';

@Injectable({
  providedIn: 'root'
})
export class RoomDetailsService {

  constructor( private _HttpClient:HttpClient) { }

  roomDetails(id:string):Observable<any>{
    return this._HttpClient.get(`portal/rooms/${id}`)
  }

  allRoomComments(roomID:string):Observable<any>{
    return this._HttpClient.get(`portal/room-comments/${roomID}`)
  }
  createComment(data:any):Observable<any>{
    return this._HttpClient.get(`portal/room-comments` , data)
  }
  deleteComment(commentID:string ,roomID:string ):Observable<any>{
    return this._HttpClient.get(`portal/room-comments/${commentID}` ,{params : {"roomId": roomID}})
  }

}


