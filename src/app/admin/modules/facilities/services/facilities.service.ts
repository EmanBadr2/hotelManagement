import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacilitiesApiResponse } from '../interfaces2/facilities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {

  constructor(private _HttpClient: HttpClient) {}
  getFacilities(page: number = 1, size: number = 5): Observable<FacilitiesApiResponse> {
    return this._HttpClient.get<FacilitiesApiResponse>(`admin/room-facilities?page=${page}&size=${size}`);
  }
  deleteFacility(id: string) {
    return this._HttpClient.delete(`admin/room-facilities/${id}`);
  }
}
