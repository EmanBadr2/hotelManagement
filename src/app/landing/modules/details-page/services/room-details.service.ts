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


}



