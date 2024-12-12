import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  standalone: false,
  
  templateUrl: './product-widget.component.html',
  styles: ``
})
export class ProductWidgetComponent implements OnInit, AfterContentInit {
  constructor(){}
  ngOnInit(): void {
  
  }
 


  @Input()
  products:any[]=[]

  @ContentChild("head")contentheader:ElementRef|any;
  ngAfterContentInit(): void {
    console.log(this.contentheader);
    this.contentheader.nativeElement.setAttribute('style','color:red');
  }

}
