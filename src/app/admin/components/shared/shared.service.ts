import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFacilities } from '../../models/facilities';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private baseUrl = 'https://upskilling-egypt.com:3000/api/v0/';


constructor(private _http:HttpClient) { }
addFacilities(name:string):Observable<IFacilities>{
  return this._http.post<IFacilities>(`${this.baseUrl}admin/room-facilities`,name);
}

}
