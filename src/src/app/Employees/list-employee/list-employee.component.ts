import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-list-employee',
    standalone: false,
    templateUrl: 'list-employee.component.html'

})
export class ListEmployeeComponent implements OnInit {
    employees: any[] = []
    constructor(private userservice: UsersService) {

    }
    ngOnInit(): void {
        this.employees = this.userservice.GetUserList();
    }
    getEmployees(): void {
        this.employees = this.userservice.GetUserList();

    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code
    }

}
