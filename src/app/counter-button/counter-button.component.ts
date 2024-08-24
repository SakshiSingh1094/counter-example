import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export default class CounterButtonComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(private store:Store<AppState>){}
  onIncrement(){
   this.store.dispatch(increment({value:6})) 
  }

  onDecrement(){
    this.store.dispatch(decrement({value:3}))  
  }

  onReset(){
    this.store.dispatch(reset())  
  }
}
