
import { HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Access-Control-Allow-Origin';
@Injectable()
export class ServicesAuthInterceptorsService implements HttpInterceptor {

  constructor(private token: StorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
        authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq);
}
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass:  ServicesAuthInterceptorsService, multi: true }
];
