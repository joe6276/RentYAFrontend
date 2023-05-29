import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';

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
  constructor( private fb:FormBuilder, private userService:UserService){}


ngOnInit(): void {
  this.form= this.fb.group({
    email:['', [Validators.required]],
    name:['', [Validators.required]],
    password:['', [Validators.required]],
  
  })
}

SubmitForm(){
  this.userService.addUser(this.form.value).subscribe(
    res=>{
     console.log( res.message);
    },
    err=>{
      this.errorMessage= err.message
    }
  )
}
}
