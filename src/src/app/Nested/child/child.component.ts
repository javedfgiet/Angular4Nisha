import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,

  templateUrl: './child.component.html',
  styles: ``
})
export class ChildComponent {
  @Input()
  uname: string = ""

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>;

  PassData() {
    this.notify.emit('This is message from Child Comonent');
  }
}
