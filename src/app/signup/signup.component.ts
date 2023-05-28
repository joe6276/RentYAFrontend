import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form!:FormGroup

  constructor( private fb:FormBuilder){}
  SubmitForm(){

  }

ngOnInit(): void {
  this.form= this.fb.group({
    email:['', [Validators.required]],
    name:['', [Validators.required]],
    password:['', [Validators.required]],
  
  })
}
}
