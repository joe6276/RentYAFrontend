import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PropertiesService } from '../Services/properties.service';
import { Property } from '../Interfaces';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule,IonicModule,RouterModule],
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
   properties!:Observable<Property[]>
   constructor(private propertyService:PropertiesService){}
 

   ngOnInit(): void {
      this.properties= this.propertyService.getProperties()
   }
}
