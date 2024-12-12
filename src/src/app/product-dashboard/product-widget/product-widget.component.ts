import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  standalone: false,
  
  templateUrl: './product-widget.component.html',
  styles: ``
})
export class ProductWidgetComponent {
  @Input()
  products:any[]=[]

}
