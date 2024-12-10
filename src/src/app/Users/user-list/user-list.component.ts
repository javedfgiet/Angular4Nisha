import { Component, OnInit } from '@angular/core';
import { JsonApiService } from '../../services/json-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: false,

  templateUrl: './user-list.component.html',
  styles: ``
})
export class UserListComponent implements OnInit {
  employees: any[]=[];
  statusMessage: string = "Loading.....!"

  constructor(private users: JsonApiService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.employees=this.activatedRoute.snapshot.data['data'];
    // this.users.getAllUserList().subscribe(
    //  {
    //   next:response=>this.employees=response as any[],
    //   error:err=>this.statusMessage="Something bad happened; please try again later.",
    //   complete:()=>this.statusMessage="Process Completed"
    //  }
    //)
  }
  trackByEmpCode(index: number, employee: any): string {
    return employee.index
  }

}
