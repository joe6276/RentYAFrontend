import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LandordService } from '../Services/landord.service';
import { AuthService } from '../Services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State/appState';
import { LoginLandLord } from '../State/Actions/landLordActions';

@Component({
  selector: 'app-land-lord-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './land-lord-login.component.html',
  styleUrls: ['./land-lord-login.component.css']
})
export class LandLordLoginComponent implements OnInit {
  form!:FormGroup
  errorMessage=null
  constructor( private fb:FormBuilder, private store:Store<AppState>, private router:Router){}


ngOnInit(): void {
  this.form= this.fb.group({
    email:['', [Validators.required]],
    password:['', [Validators.required]],
  
  })
}
SubmitForm(){
// // console.log(this.form.value);
// this.landlordService.logLandlord(this.form.value).subscribe(res=>{
//  this.authService.login({...res, username:'Landlord'})  
//  this.router.navigate(['/property'])
//  this.errorMessage=null
// },
// err=>{
// this.errorMessage=err.error.message
// })
this.store.dispatch(LoginLandLord({landlord:this.form.value}))
this.router.navigate(['/property'])
}
 
}
