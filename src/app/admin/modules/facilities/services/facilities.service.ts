import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacilitiesApiResponse } from '../interfaces/facilities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  private baseUrl = 'https://upskilling-egypt.com:3000/api/v0/';

  constructor(private _HttpClient:HttpClient) { }
  getFacilities(): Observable<FacilitiesApiResponse> {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this._HttpClient.get<FacilitiesApiResponse>(`${this.baseUrl}admin/room-facilities`, { headers });
  }
  deleteFacility(id: string) {
    return this._HttpClient.delete(`https://upskilling-egypt.com:3000/api/v0/admin/room-facilities/${id}`);
  }
}
