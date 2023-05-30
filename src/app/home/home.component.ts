import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,IonicModule,FooterComponent,RouterModule],
  templateUrl: './home.component.html',
 
})
export class HomeComponent implements OnInit {
count!:number
constructor( private store:Store<any>){}
ngOnInit(): void {
  this.store.select('counter').subscribe(values=>{
    this.count= values.count *1000
  })
}
}
