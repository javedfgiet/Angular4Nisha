import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hookchild',
  standalone: false,

  templateUrl: './hookchild.component.html',
  styles: ``
})
export class HookchildComponent implements OnInit ,OnChanges{
@Input()
  parentData:any;
  constructor() {
    console.log("Constructor is called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called",changes);
  }
  ngOnInit(): void {
    console.log("OnInit is Called");
  }


}
