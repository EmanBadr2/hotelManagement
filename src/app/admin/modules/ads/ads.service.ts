import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdResponse } from './Interfaces/ads';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private _HttpClient: HttpClient) { }
  getAds(page: number = 1, size: number = 5): Observable<AdResponse> {
    return this._HttpClient.get<AdResponse>(
      `admin/ads?page=${page}&size=${size}`,
    );
  }
  deleteAds(id: string) {
    return this._HttpClient.delete(
      `admin/ads/${id}`
    );
  }

}
