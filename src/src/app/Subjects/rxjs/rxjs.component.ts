import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-rxjs',
  standalone: false,

  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Create Onservable
    // const observable = new Observable(obj => obj.next(Math.random()));

    // //Subscriber 1
    // observable.subscribe({
    //   next: (data) => { console.log(data) }
    // })

    // //Subscriber 2
    // observable.subscribe(d => console.log(d));

    //Subject 
    // const subject = new Subject();


    // //Consumes Subject 1
    // subject.subscribe(d => console.log(d));

    // //Consumes Subject 1
    // subject.subscribe(d=>console.log(d))

    // subject.next(Math.random());

    // const subject = new Subject();

    // const data = ajax('https://jsonplaceholder.typicode.com/users');

    // subject.subscribe(d => console.log(d))
    // subject.subscribe(d => console.log(d))
    // data.subscribe(subject)

    const subject = new Subject();
    subject.subscribe(d => console.log(`Subject Subscriber1 : ${d}`));

    subject.subscribe(d => console.log(`Subject Subscriber2 : ${d}`));
    subject.next(Math.random())


    const bSubject = new BehaviorSubject<number>(100)
    bSubject.subscribe(d => console.log(`Behavior Subject Subscriber2 : ${d}`));
    bSubject.subscribe(d => console.log(`Behavior Subject Subscriber2 : ${d}`));

    bSubject.next(2024);


  }

}
