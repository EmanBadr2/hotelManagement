import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatsData, StatsResponse } from '../../models/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
 


  constructor(private _http: HttpClient) { }

  chartService(): Observable<StatsResponse> {
    return this._http.get<StatsResponse>(`https://upskilling-egypt.com:3000/api/v0/admin/dashboard`);
  }

  getStats(): Observable<StatsResponse> {
    return this._http.get<StatsResponse>(`https://upskilling-egypt.com:3000/api/v0/admin/dashboard`);
  }
}
