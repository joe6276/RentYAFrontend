import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
form!:FormGroup
  SubmitForm(){

  }

  constructor( private fb:FormBuilder){}

  ngOnInit(): void {
    this.form= this.fb.group({
      name:['', [Validators.required]],
      location:['', [Validators.required]],
      images:['', [Validators.required]],
      video:['', [Validators.required]],
      price:['', [Validators.required]],
      condition:['', [Validators.required]]
    })
  }
}
