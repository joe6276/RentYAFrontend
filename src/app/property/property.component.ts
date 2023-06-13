import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Property } from '../Interfaces';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { GetProperty } from '../State/Actions/propertyActions';
import { getProperties } from '../State/Reducers/propertyReducer';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule,IonicModule,RouterModule],
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
   properties!:Observable<Property[]>
   constructor(private store:Store<AppState> , private router:Router){}

   ngOnInit(): void {
      this.properties= this.store.select(getProperties)
      this.store.dispatch(GetProperty())
     console.log( this.router);
     
   }
}
