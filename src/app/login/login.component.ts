import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!:FormGroup

  constructor( private fb:FormBuilder){}
  SubmitForm(){

  }

ngOnInit(): void {
  this.form= this.fb.group({
    email:['', [Validators.required]],
    password:['', [Validators.required]],
  
  })
}
 
}
