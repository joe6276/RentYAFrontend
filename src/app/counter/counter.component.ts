import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{
  show!:boolean
  constructor(private store:Store<any>){}
  count=0
  ngOnInit(): void {
    this.store.select('paragraph').subscribe(values=>{
      this.show= values.showParagraph
    })
    this.store.select('counter').subscribe(values=>{
      this.count= values.count
    })
  }
  toggleShow(){
    // this.show= !this.show
    this.store.dispatch({
      type:'SHOWP'
    })
  }
  decrement(){
    this.store.dispatch({
      type:'Decrement'
    })
  }

  increment(){
    this.store.dispatch({
      type:'Increment'
    })
  }
}
