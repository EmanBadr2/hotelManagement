import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatsData, StatsResponse } from '../../models/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private baseUrl = 'https://upskilling-egypt.com:3000/api/v0/';


  constructor(private _http: HttpClient) { }

  chartService(): Observable<StatsResponse> {
    return this._http.get<StatsResponse>(`${this.baseUrl}admin/dashboard`);
  }

  getStats(): Observable<StatsResponse> {
    return this._http.get<StatsResponse>(`${this.baseUrl}admin/dashboard`);
  }
}
