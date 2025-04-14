import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable , throwError  } from 'rxjs';

import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private BaseUrl : string = `https://upskilling-egypt.com:3000/api/v0`
  private  token = this._StorageService.token

  constructor(private _StorageService:StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

     let  myRequest = request.clone({
        setHeaders: {
          url: `${this.BaseUrl}/${request.url}`,
          // Authorization: this.token
          Authorization: `Bearer ${this.token}`
        }
      });

      return next.handle(myRequest);



  }
}



