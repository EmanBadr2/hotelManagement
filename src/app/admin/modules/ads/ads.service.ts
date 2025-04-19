import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdResponse } from './Interfaces/ads';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  private baseUrl = 'https://upskilling-egypt.com:3000/api/v0/';

constructor(private _HttpClient:HttpClient) { }
  getAds(): Observable<AdResponse> {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this._HttpClient.get<AdResponse>(
      `${this.baseUrl}admin/ads`,
      { headers }
    );
  }
  deleteAds(id: string) {
    return this._HttpClient.delete(
      `https://upskilling-egypt.com:3000/api/v0/admin/ads/${id}`
    );
  }

}
