import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesService } from '../Services/properties.service';
import { Observable } from 'rxjs';
import { Property } from '../Interfaces';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-properties',
  standalone: true,
  imports: [CommonModule,IonicModule,RouterModule],
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {
  properties!:Observable<Property[]>
constructor(private propertyService:PropertiesService){}
ngOnInit(): void {
  this.properties = this.propertyService.getmyProperties()
}
}
