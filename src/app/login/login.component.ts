import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';
import { AuthService } from '../Services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State/appState';
import { userLogin } from '../State/Actions/userActions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!:FormGroup
  errorMessage=null
  constructor( private fb:FormBuilder,
     private authService:AuthService,
     private router:Router, 
     private store:Store<AppState>,
     private userService:UserService){}
ngOnInit(): void {
  this.form= this.fb.group({
    email:['', [Validators.required]],
    password:['', [Validators.required]],
  
  })
}

SubmitForm(){
// this.userService.loginUser(this.form.value).subscribe(
//   res=>{
//     this.errorMessage=null
//     this.authService.login(res)
//     this.router.navigate(['/property'])
//   },
//   err=>{
//     this.errorMessage= err.error.message
//   }
// )

this.store.dispatch(userLogin({user:this.form.value}))
this.router.navigate(['/property'])
}
 
}
