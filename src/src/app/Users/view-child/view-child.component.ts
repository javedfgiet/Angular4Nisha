import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { ChildComponent } from '../../Nested/child/child.component';

@Component({
  selector: 'app-viewChild',
  standalone: false,

  templateUrl: './view-child.component.html',
  styles: ``
})
export class ViewChildComponent implements AfterViewInit {
  
  @ViewChild("counter")child: ChildComponent|any;

  inc()
  {
    this.child.Increment();
    console.log(this.child.counterInc)
  }
  dec()
  {
    this.child.Decrement();
    console.log(this.child.counterInc)
  }
  
  constructor() {

  }



  @ViewChildren('highlight') markers: QueryList<any> | any;

  ngAfterViewInit(): void {
    console.log(this.markers)
    // this.marker.nativeElement.style.color = 'red';
    // this.marker.first.nativeElement.style.color="red";
    // this.marker.last.nativeElement.style.color="green";
    this.markers.forEach((d: any) => {
      console.log(d);
    });
  }

  

}
