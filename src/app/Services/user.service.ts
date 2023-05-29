import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUserSuccess, LogUserSuccess, LoginUser, NewUser } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(newUser:NewUser):Observable<AddUserSuccess>{
    return this.http.post<AddUserSuccess>('http://localhost:8080/users',newUser)
  }


  loginUser(loginUser:LoginUser):Observable<LogUserSuccess>{
    return this.http.post<LogUserSuccess>('http://localhost:8080/users/login',loginUser)
  }


}
