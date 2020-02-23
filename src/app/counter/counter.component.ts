import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `Counter: {{counter}}`
})
export class CounterComponent {

  @Output() counterEmitter = new EventEmitter<number>();

  counter = 0;

 increment() {
   this.counter++;
   this.counterEmitter.emit(this.counter);
 }

 decrement() {
   this.counter--;
 }
}
