import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFacilities } from '../../models/facilities';
import { IAdsCreate } from '../../modules/ads/Interfaces/ads';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private baseUrl = 'https://upskilling-egypt.com:3000/api/v0/';

  constructor(private _http: HttpClient) {}
  addFacilities(name: string): Observable<IFacilities> {
    return this._http.post<IFacilities>(
      `${this.baseUrl}admin/room-facilities`,
      name
    );
  }
  addAds(data: IAdsCreate): Observable<IAdsCreate> {
    return this._http.post<IAdsCreate>(`${this.baseUrl}admin/ads`, data);
  }
  getFacilities(id: string): Observable<any> {
    return this._http.get(`${this.baseUrl}admin/room-facilities/${id}`);
  }
  getAds(id: string): Observable<any> {
    return this._http.get(`${this.baseUrl}admin/ads/${id}`);
  }
  updateFacilities(id: string, name: string): Observable<IFacilities> {
    return this._http.put<IFacilities>(
      `${this.baseUrl}admin/room-facilities/${id}`,
      name
    );
  }
  updateAds(id: string, name: string): Observable<IAdsCreate> {
    return this._http.put<IAdsCreate>(`${this.baseUrl}admin/ads/${id}`, name);
  }
}
