import { Component, OnInit } from '@angular/core';
import { NotiifcationServiesService } from '../../services/notiifcation-servies.service';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent implements OnInit {

  currentMessage: string = "";
  constructor(private notification: NotiifcationServiesService) {

  }
  ngOnInit(): void {
    this.notification.notificationSubject.subscribe(d => {
      this.currentMessage = d
    })
  }
  SendMessage(data: any) {
    this.notification.sendNotification(data.value);
  }
}
