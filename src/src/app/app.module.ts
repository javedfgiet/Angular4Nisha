import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';

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
import { AboutComponent } from './Users/about/about.component';
import { ContactComponent } from './Users/contact/contact.component';
import { UserComponent } from './Users/user/user.component';

const route: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  { path: 'users', component: UserListComponent },
  {path:'user/:id',component:UserComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path:'**',redirectTo:'users'}

]


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ListEmployeeComponent,
    CountryCodeComponent,
    ParentComponent,
    ChildComponent,
    EmployeeTitlePipePipe,
    UserListComponent,
    AboutComponent,
    ContactComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(route)

  ],
  providers: [UsersService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
