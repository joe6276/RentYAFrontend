import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
