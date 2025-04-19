import { Injectable } from '@angular/core';
import { BookingApiResponse } from '../interfaces/booking';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _HttpClient:HttpClient) { }
  getBookings(): Observable<BookingApiResponse> {
      return this._HttpClient.get<BookingApiResponse>(`admin/booking`);
    }
}
