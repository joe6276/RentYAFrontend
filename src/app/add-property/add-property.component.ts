import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertiesService } from '../Services/properties.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
form!:FormGroup
id!:string
isUpdating=false
  constructor( private fb:FormBuilder, private route:ActivatedRoute, private propertyService:PropertiesService){}

  ngOnInit(): void {
    this.form= this.fb.group({
      name:['', [Validators.required]],
      location:['', [Validators.required]],
      images:['', [Validators.required]],
      video:['', [Validators.required]],
      price:['', [Validators.required]],
      condition:['', [Validators.required]]
    })

    this.route.params.subscribe((p:Params)=>{
      this.id=p['id']
           
      if(p['id']!=='1'){
        this.isUpdating=true
         this.propertyService.getOneProperty(p['id']).subscribe(res=>{
          console.log(res);
          this.form.setValue({
            name:res.name,
            location:res.location,
            images:res.images,
            video:res.videos,
            price:res.price,
            condition:res.condition
          })
         })
      }else{
        this.form.reset()
        this.isUpdating=false
      }
      // this.isUpdating=false
    })

  }

  SubmitForm(){
    console.log(typeof this.id, this.id);
    
  if(this.id==='1'){
    this.propertyService.addProperty(this.form.value).subscribe(
      res=>{
        console.log(res);
        
      }
    )
    
  }else{
    this.propertyService.updateProperty(this.id ,this.form.value).subscribe(
      res=>{
        console.log(res);
        
      }
    )
}
  }
}
