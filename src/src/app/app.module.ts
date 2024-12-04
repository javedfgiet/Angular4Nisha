import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ListEmployeeComponent } from './Employees/list-employee/list-employee.component';
import { CountryCodeComponent } from './Switch/country-code/country-code.component';
import { ParentComponent } from './Nested/parent/parent.component';
import { ChildComponent } from './Nested/child/child.component';
import { EmployeeTitlePipePipe } from './Pipes/employee-title-pipe.pipe';
import { UsersService } from './services/users.service';
import { provideHttpClient } from '@angular/common/http';
import { UserListComponent } from './Users/user-list/user-list.component';




@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ListEmployeeComponent,
    CountryCodeComponent,
    ParentComponent,
    ChildComponent,
    EmployeeTitlePipePipe,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [UsersService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
