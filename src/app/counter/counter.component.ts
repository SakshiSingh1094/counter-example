import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{
  counter : number=0;
  ngOnInit(): void {}
  constructor(){}

  onIncrement(){
    this.counter++;
  }

  onDecrement(){
    this.counter--;
  }

  onReset(value :number){
    console.log(value);
    this.counter=0;
  }
}
