import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonApiService } from '../../services/json-api.service';

@Component({
  selector: 'app-user',
  standalone: false,

  templateUrl: './user.component.html',
  styles: ``
})
export class UserComponent implements OnInit {

  users: any[] = [];
  statusMessage: string = "Loading.....!"
  constructor(private route: ActivatedRoute, private user: JsonApiService) {

  }
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.user.getUsers(id).subscribe({
      next: response => this.users = response as any[],
      error: err => this.statusMessage="Something bad happened; please try again later.",
      complete:()=>this.statusMessage="Completed"
    })
  }


}
