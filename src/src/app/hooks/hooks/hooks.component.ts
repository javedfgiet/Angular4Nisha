import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  standalone: false,

  templateUrl: './hooks.component.html',
  styles: ``
})
export class HooksComponent {
  data: string = "";
  constructor() {

  }

  handleData(e: any) {
    this.data = e.target.value;
  }
}
