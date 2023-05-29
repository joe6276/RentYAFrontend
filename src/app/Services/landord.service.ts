import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddLandlord, LandLord, LandLordSuccess, LogLandlordSuccess, LoginUser } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandordService {

  constructor(private http:HttpClient) { }

  addLandlord(landlord:AddLandlord):Observable<LandLordSuccess>{
    return this.http.post<LandLordSuccess>('http://localhost:8080/landlords', landlord)
  }
  logLandlord(landlord:LoginUser):Observable<LogLandlordSuccess>{
    return this.http.post<LogLandlordSuccess>('http://localhost:8080/landlords/login', landlord)
  }

  getUnapprovedLandlords():Observable<LandLord[]>{
    return this.http.get<LandLord[]>('http://localhost:8080/landlords/unapproved')
  }

  getapprovedLandlords():Observable<LandLord[]>{
    return this.http.get<LandLord[]>('http://localhost:8080/landlords/approved')
  }

  deleteLandLord(id:string):Observable<LandLordSuccess>{
    return this.http.delete<LandLordSuccess>(` http://localhost:8080/landlords/${id}`)
  }

}
