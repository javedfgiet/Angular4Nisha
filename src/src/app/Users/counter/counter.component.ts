import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,

  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent {
  counterInc: number = 0;

  Increment() {
    this.counterInc++;
  }

  Decrement() {
    this.counterInc--;
  }

}
