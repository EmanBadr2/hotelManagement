import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFacilities } from '../../modules/rooms/interfaces/IRooms';

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
  getFacilities(id: string): Observable<any> {
    return this._http.get(`${this.baseUrl}admin/room-facilities/${id}`);
  }
  updateFacilities(id: string, name: string): Observable<IFacilities> {
    return this._http.put<IFacilities>(
      `${this.baseUrl}admin/room-facilities/${id}`,
      name
    );
  }
}
