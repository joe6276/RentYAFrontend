import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Property } from '../Interfaces';
import { PropertiesService } from '../Services/properties.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { GetProperty, GetSingleProperty, deleteProperty } from '../State/Actions/propertyActions';
import { getProperty } from '../State/Reducers/propertyReducer';

@Component({
  selector: 'app-single-property',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './single-property.component.html',
  styleUrls: ['./single-property.component.css']
})
export class SinglePropertyComponent implements OnInit {
  property!:Observable<Property>
  constructor( private store:Store<AppState>,  public authService:AuthService ,private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.store.dispatch(GetProperty())
      this.store.dispatch(GetSingleProperty({id:p['id']}))
      this.property=this.store.select(getProperty)
    })
  }

  ondelete(id:string){
    this.store.dispatch(deleteProperty({id}))
    this.router.navigate(['/property'])
    // this.propertyService.deleteProperty(id).subscribe(res=>{
    //   console.log(res);
    //   this.router.navigate(['/property'])
    // })
  }
}
