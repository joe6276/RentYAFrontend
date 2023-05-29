import { Injectable } from '@angular/core';
import { LogUserSuccess } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role!:string|null
  token!:string|null
  constructor(){

   }
    login(res:LogUserSuccess){
      localStorage.setItem('token',res.token)
      localStorage.setItem('role', res.role)
      localStorage.setItem('username', res.username)
    }
   logout(){
    localStorage.clear()
   }

   isLoggedIn(){
    let role=localStorage.getItem('role')
    this.role= role? role:null
    let token=localStorage.getItem('token')
    this.token= token? token:null
    return  this.token? true :false
   }

   isLandlord(){
    let role=localStorage.getItem('role')
    return role==='landlord' || role==='admin' ?true :false
    
   }

   isAdmin(){
    let role=localStorage.getItem('role')
    return  role==='admin' ?true :false
   }
   getUsername(){
    let username=localStorage.getItem('username')
    return username
   }
}
