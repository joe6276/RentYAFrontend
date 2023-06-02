import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Store } from '@ngrx/store';
import { NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [IonicModule, RouterLink, NgIf, RouterOutlet]
})
export class AppComponent {
  count!:number
  constructor( public authService:AuthService,private store:Store<any>){}
  ngOnInit(): void {
    this.store.select('counter').subscribe(values=>{
      this.count= values.count
    })
  }
 
  title = 'RentYAfrontend';
 
}
