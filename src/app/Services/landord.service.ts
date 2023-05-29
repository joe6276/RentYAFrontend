import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogLandlordSuccess, LoginUser } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandordService {

  constructor(private http:HttpClient) { }

  logLandlord(landlord:LoginUser):Observable<LogLandlordSuccess>{
    return this.http.post<LogLandlordSuccess>('http://localhost:8080/landlords/login', landlord)
  }
}
