import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BookingDataParams, CreateBookingRes  ,} from '../interfaces/booking';
import { BookingDetailsRes } from '../interfaces/bookingDetails';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private messageSource = new BehaviorSubject<string>(' ');
  stripToken = this.messageSource.asObservable();

  tokenFromStripe(token: string) {
    this.messageSource.next(token);
  }

  constructor(private _HttpClient:HttpClient) { }

  createBooking(data : BookingDataParams ):Observable<CreateBookingRes>{
    return this._HttpClient.post<CreateBookingRes>(`portal/booking` ,data)
  }

  getBookingDetails(data : any  , bookingID :string ):Observable<any>{
    return this._HttpClient.get(`portal/booking/${bookingID}` ,data)
  }

  getAllMyBooking(data : any ):Observable<any>{
    return this._HttpClient.get(`portal/booking/my` ,data)
  }
  // ---------
  //   data----> { "token": token }
  payBooking( bookingID :string , data : any  ):Observable<any>{
    return this._HttpClient.post(`portal/booking/${bookingID}/pay` , data )
  }



}
