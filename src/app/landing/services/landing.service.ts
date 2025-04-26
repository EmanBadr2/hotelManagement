import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ads, Card } from '../interface/card';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private _HttpClient:HttpClient) { }



  getAvailableRooms(): Observable<Card[]> {
    return this._HttpClient.get<any>('portal/rooms/available?page=1&size=13')
    .pipe(map((res) => res.data.rooms));
  }
  getExploreRooms(): Observable<Card[]> {
    return this._HttpClient.get<any>('portal/rooms/available?page=1&size=27')
    .pipe(map((res) => res.data.rooms));
  }

  getAdsAll(): Observable<Ads[]> {
    return this._HttpClient.get<any>('portal/ads?page=1&size=4')
    .pipe(map((res) => res.data.ads));
  }
}
