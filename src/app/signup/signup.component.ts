import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { userRegistration } from '../State/Actions/userActions';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  form!:FormGroup
  errorMessage=null
  constructor( private fb:FormBuilder, private userService:UserService, private store:Store<AppState>){}


ngOnInit(): void {
  this.form= this.fb.group({
    email:['', [Validators.required]],
    name:['', [Validators.required]],
    password:['', [Validators.required]],
  
  })
}

SubmitForm(){
  this.userService.addUser(this.form.value).subscribe(res=>{
    console.log(res);
    
  })
  // this.store.dispatch(userRegistration({newUser:this.form.value}))
}
}
