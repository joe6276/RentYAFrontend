import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Property } from '../Interfaces';
import { PropertiesService } from '../Services/properties.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-single-property',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './single-property.component.html',
  styleUrls: ['./single-property.component.css']
})
export class SinglePropertyComponent implements OnInit {
  property!:Observable<Property>
  constructor(private propertyService:PropertiesService,  public authService:AuthService ,private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.property= this.propertyService.getOneProperty(p['id'])
    })
  }

  ondelete(id:string){
    this.propertyService.deleteProperty(id).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/property'])
    })
  }
}
