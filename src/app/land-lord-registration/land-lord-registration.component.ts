import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LandordService } from '../Services/landord.service';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { CreateALandLord } from '../State/Actions/landLordActions';

@Component({
  selector: 'app-land-lord-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './land-lord-registration.component.html',
  styleUrls: ['./land-lord-registration.component.css']
})
export class LandLordRegistrationComponent implements OnInit {
  form!:FormGroup

  constructor( private fb:FormBuilder,private store:Store<AppState>){}
 

ngOnInit(): void {
  this.form= this.fb.group({
    email:['', [Validators.required]],
    name:['', [Validators.required]],
    propertyDocs:['', [Validators.required]],
    password:['', [Validators.required]],
  
  })
}

SubmitForm(){
// this.landlordService.addLandlord(this.form.value).subscribe()
this.store.dispatch(CreateALandLord({newLandLord:this.form.value}))
}
}
