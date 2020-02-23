import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter',
  template: `Counter: {{counter}}`
})
export class CounterComponent {

  public form: FormGroup;

  counter = 0;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    });
  }

  @Output() counterEmitter = new EventEmitter<number>();

 increment() {
   this.counter++;
   this.counterEmitter.emit(this.counter);
 }

 decrement() {
   this.counter--;
 }
}
