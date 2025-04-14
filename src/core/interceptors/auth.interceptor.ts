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
  BaseUrl : string = `https://upskilling-egypt.com:3000/api/v0/`

  constructor(private _StorageService:StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this._StorageService.token
    if (token) {
      request = request.clone({
        setHeaders: {
          url: `${this.BaseUrl}${request.url}`,
          Authorization: token
          // Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle errors globally
        console.error('Error from interceptor', error);
        return throwError(() => error);
      })
    );
  }
}



