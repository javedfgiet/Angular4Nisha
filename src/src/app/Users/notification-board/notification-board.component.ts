import { Component, OnInit } from '@angular/core';
import { NotiifcationServiesService } from '../../services/notiifcation-servies.service';

@Component({
  selector: 'app-notification-board',
  standalone: false,

  templateUrl: './notification-board.component.html',
  styles: ``
})
export class NotificationBoardComponent implements OnInit {

  message: string = "";
  constructor(private notificatioS: NotiifcationServiesService) {

  }
  ngOnInit(): void {
    this.notificatioS.notificationSubject.subscribe(d => {
      this.message = d
    })
  }

}
