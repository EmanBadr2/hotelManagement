import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ads, Card } from '../interface/card';
import { HttpClient } from '@angular/common/http';
import { FavoriteRoom, FavoriteRoomResponse } from '../interface/fav';
import { IProfileRes, IUser } from 'src/app/shared/interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private _HttpClient:HttpClient) { }



  getAvailableRooms(): Observable<Card[]> {
    return this._HttpClient.get<any>('portal/rooms/available?page=1&size=13')
    .pipe(map((res) => res.data.rooms));
  }
  getExploreRooms(page: number, size: number, start: any, end: any): Observable<Card[]> {
    return this._HttpClient.get<any>('portal/rooms/available', 
      {params: {page: page,size: size,startDate: start,endDate: end}
    }).pipe(
      map((res) => res.data.rooms)
    );
  }
  

  getAdsAll(): Observable<Ads[]> {
    return this._HttpClient.get<any>('portal/ads?page=1&size=4')
    .pipe(map((res) => res.data.ads));
  }

  getAllFavRooms(): Observable<FavoriteRoomResponse> {
    return this._HttpClient.get<FavoriteRoomResponse>('portal/favorite-rooms');
  }
  addToFav(roomId: string): Observable<FavoriteRoom> {
    return this._HttpClient.post<FavoriteRoom>('portal/favorite-rooms', { roomId });
  }
  removeFromFav(roomId: string, favoriteRoomId: string): Observable<FavoriteRoomResponse> {
    return this._HttpClient.delete<FavoriteRoomResponse>(`portal/favorite-rooms/${ roomId}`,
      { body: { roomId: favoriteRoomId }
  });
  }
  getProfileDetails(id:string):Observable<IProfileRes>{
    return this._HttpClient.get<IProfileRes>(`admin/users/${id}`)
    
  }
  
}
