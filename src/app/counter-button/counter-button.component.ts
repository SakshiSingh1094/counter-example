import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export default class CounterButtonComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(){}

  @Output() increment =new EventEmitter<void>();
  @Output() decrement =new EventEmitter<void>();
  @Output() reset =new EventEmitter<number>();

  onIncrement(){
    this.increment.emit();
  }

  onDecrement(){
    this.decrement.emit();
  }

  onReset(){
    this.reset.emit(5);
  }
}
