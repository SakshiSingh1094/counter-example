import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { AppState } from '../store/app.state';
import { counterReducer } from '../store/counter.reducer';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
counter=0;
constructor(private store:Store<AppState>){}
  ngOnInit(): void {
    // .select is used to read data from store, "counter" is anme of reducer registeres in app.modules.ts
    this.store.select("counter").subscribe(data => {
    console.log(data.counter);
    this.counter=data.counter;
    }); 
  }
 

}
