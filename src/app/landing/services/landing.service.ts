import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ads, Curd } from '../interface/curd';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private _HttpClient:HttpClient) { }



  getAvailableRooms(): Observable<Curd[]> {
    return this._HttpClient.get<any>('portal/rooms/available?page=1&size=13')
    .pipe(map((res) => res.data.rooms));
  }

  getAdsAll(): Observable<Ads[]> {
    return this._HttpClient.get<any>('portal/ads?page=1&size=3')
    .pipe(map((res) => res.data.ads));
  }
}
