import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacilitiesApiResponse } from '../interfaces2/facilities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  private baseUrl = 'https://upskilling-egypt.com:3000/api/v0/';

  constructor(private _HttpClient: HttpClient) {}
  getFacilities(): Observable<FacilitiesApiResponse> {
    return this._HttpClient.get<FacilitiesApiResponse>(`admin/room-facilities`);
  }
  deleteFacility(id: string) {
    return this._HttpClient.delete(`admin/room-facilities/${id}`);
  }
}
