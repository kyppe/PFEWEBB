import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService  implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    // Modify the request if needed
      let token =localStorage.getItem("accessToken")
      
    const modifiedRequest = request.clone({
    
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });

    // Pass the modified request on to the next interceptor or to the HTTP call
    return next.handle(modifiedRequest);
  }
}