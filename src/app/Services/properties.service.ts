import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProperty, AddPropertySuccess, Property } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http:HttpClient) {}

  getProperties():Observable<Property[]>{
    return this.http.get<Property[]>('http://localhost:8080/property')
  }

  getmyProperties():Observable<Property[]>{
    return this.http.get<Property[]>('http://localhost:8080/property/my/property')
  }
  addProperty(property:AddProperty):Observable<AddPropertySuccess>{
    return  this.http.post<AddPropertySuccess>('http://localhost:8080/property', property)
  }

  getOneProperty(id:string):Observable<Property>{
    return this.http.get<Property>(`http://localhost:8080/property/${id}`)
  }

  updateProperty(id:string ,property:AddProperty):Observable<AddPropertySuccess>{
      return this.http.put<AddPropertySuccess>(`http://localhost:8080/property/${id}`, property)
  }

  deleteProperty(id:string):Observable<AddPropertySuccess>{
    return this.http.delete<AddPropertySuccess>(`http://localhost:8080/property/${id}`)
  }
}
