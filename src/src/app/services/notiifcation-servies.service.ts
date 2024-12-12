import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotiifcationServiesService {

  //public notificationSubject = new Subject<string>();
  public notificationSubject = new BehaviorSubject<string>("Greeting from Javed Ahmad");
  constructor() { }

  sendNotification(data: any) {
    this.notificationSubject.next(data);
  }
}
