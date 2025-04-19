import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  private baseUrl = 'https://upskilling-egypt.com:3000/api/v0/';

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    const updatedReq = req.url.startsWith('http')
      ? req.clone({
          setHeaders: token ? { Authorization: `${token}` } : {}
        })
      : req.clone({
          url: `${this.baseUrl}${req.url}`,
          setHeaders: token ? { Authorization: `${token}` } : {}
        });

    return next.handle(updatedReq);
  }
}
