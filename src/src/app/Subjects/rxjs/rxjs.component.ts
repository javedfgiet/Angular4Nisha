import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
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

    // const subject = new Subject();
    // subject.subscribe(d => console.log(`Subject Subscriber1 : ${d}`));

    // subject.subscribe(d => console.log(`Subject Subscriber2 : ${d}`));
    // subject.next(Math.random())


    // const bSubject = new BehaviorSubject<number>(100)
    // bSubject.subscribe(d => console.log(`Behavior Subject Subscriber2 : ${d}`));
    // bSubject.subscribe(d => console.log(`Behavior Subject Subscriber2 : ${d}`));

    // bSubject.next(2024);

    // const $message = new ReplaySubject(2);
    // $message.next('Hello...');
    // $message.next('How Are You ...');
    // $message.next('From Where you are ?');
    // $message.next('Stay at home...')
    // $message.subscribe(d=>{console.log(`User 1 : ${d}`)});
    //  $message.next('Get Vaccinated...');
    // $message.next('Keep warning ...');
    //  $message.subscribe(msg=>{console.log(`User 2 : ${msg}`)});

    // const $SubjectAsync=new AsyncSubject();
    // $SubjectAsync.next("Value 1");
    // $SubjectAsync.next("Value 2");
    // $SubjectAsync.next("Value 3");

    // $SubjectAsync.subscribe(d=>{console.log(`User 1 ${d}`)});
    // $SubjectAsync.complete();
    // $SubjectAsync.next("Value 4");
    // $SubjectAsync.next("Value 5")
    // $SubjectAsync.complete();

    // $SubjectAsync.subscribe(d=>{console.log(`User 2 ${d}`)});


    const url: string = "https://jsonplaceholder.typicode.com/posts/1/comments";
    const cache: any = {}
    function GetCountries(url: any): Observable<any> {
      if (!cache[url]) {
        cache[url] = new AsyncSubject();
        fetch(url).then(res => res.json).then(d => {
          cache[url].next(d);
          cache[url].complete();
        })

      }

      return cache[url].asObservable();

    }
    GetCountries(url).subscribe(d => console.log(d))
  }

}
