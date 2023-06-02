import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token') as string
   if(req.url !== 'http://localhost:8080/users/login' && 
   req.url!=='http://localhost:8080/landlords/login' && req.url!=='http://localhost:8080/users' && req.url!=='http://localhost:8080/landlords'){
    let modifiedrequest =req.clone({headers: new HttpHeaders().append('token', token)})
    return next.handle(modifiedrequest)
   }
   return next.handle(req)
  }
}
