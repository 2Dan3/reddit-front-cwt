import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
// import { _throw } from 'rxjs/observable/throw';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.isTokenPresent()) {
      console.log("Request to API intercepted; authToken: " + this.authService.getToken() );
      console.log("REQ Value: " + JSON.stringify(request));
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}` 
        }
      });
    }
    
    return next.handle(request);
  }
}