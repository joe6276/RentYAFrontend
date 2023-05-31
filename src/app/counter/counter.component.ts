import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as CounterActions from '../State/Actions/counterActions'
import { AppState } from '../State/appState';
import { getCounter } from '../State/Reducers/counterReducer';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{
  show!:boolean
  constructor(private store:Store<AppState>){}
  count!:any
  ngOnInit(): void {
    this.store.select('paragraph').subscribe(values=>{
      this.show= values.showParagraph
    })
    // this.store.select('counter').subscribe(values=>{
    //   this.count= values.count
    // })

    this.count=this.store.select(getCounter)
  }
  toggleShow(){
    // this.show= !this.show
    // this.store.dispatch(CounterActions.)
  }
  decrement(){
  this.store.dispatch(CounterActions.Decrement({decrementBy:2}))
  }

  increment(){
    this.store.dispatch(CounterActions.Increment({incrementBy:4}))
  }
}
