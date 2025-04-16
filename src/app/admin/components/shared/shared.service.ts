import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFacilities } from '../../models/facilities';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

constructor(private _http:HttpClient) { }
addFacilities(name:string):Observable<IFacilities>{
  return this._http.post<IFacilities>(`api/v0/admin/room-facilities`,name);
}

}
