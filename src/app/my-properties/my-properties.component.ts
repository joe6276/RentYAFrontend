import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Property } from '../Interfaces';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppState } from '../State/appState';
import { Store } from '@ngrx/store';
import { getMyProperties } from '../State/Reducers/propertyReducer';
import { GetMyProperty } from '../State/Actions/propertyActions';

@Component({
  selector: 'app-my-properties',
  standalone: true,
  imports: [CommonModule,IonicModule,RouterModule],
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {
  properties!:Observable<Property[]>
constructor(private store:Store<AppState>){}
ngOnInit(): void {
  this.store.dispatch(GetMyProperty())
  this.properties = this.store.select(getMyProperties)
}
}
