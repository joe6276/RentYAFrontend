import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminSuccess } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http:HttpClient) { }

  approveLandLord(id:string):Observable<AdminSuccess>{
      return this.http.put<AdminSuccess>(`http://localhost:8080/admin/${id}`,{})
  }
}
