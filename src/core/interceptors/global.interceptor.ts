import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  private baseUrl = 'https://upskilling-egypt.com:3000/api/v0/';

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    // if (req.url.includes('/assets/i18n/')) {
    //   return next.handle(req);
    // }

    const updatedReq = req.url.startsWith('http')
      ? req.clone({
          setHeaders: token ? { Authorization: `${token}` } : {},
        })
      : req.clone({
          url: req.url.includes('assets')
            ? `${req.url}`
            : `${this.baseUrl}${req.url}`,
          setHeaders: token ? { Authorization: `${token}` } : {},
        });

    return next.handle(updatedReq);
  }
}
