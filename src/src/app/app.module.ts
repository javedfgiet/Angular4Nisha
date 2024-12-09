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
import { AddressComponent } from './Users/address/address.component';
import { CompanyComponent } from './Users/company/company.component';
import { FeedbackComponent } from './Users/feedback/feedback.component';
import { LocationComponent } from './Users/location/location.component';
import { AuthGuard } from './RGuard/auth.guard';
import { AuthService } from './services/auth.service';
import { AdminGuard } from './RGuard/admin.guard';

const route: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  {
    path: 'user/:id', component: UserComponent,
    canActivateChild: [AdminGuard],
    children: [
      { path: 'address', component: AddressComponent, pathMatch: 'full' },
      { path: 'company', component: CompanyComponent }
    ]
  },
  {
    path: 'about', component: AboutComponent,
    
    children: [
      { path: 'location', outlet: 'map', component: LocationComponent },
      { path: "feedback", outlet: 'feed', component: FeedbackComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'users' }

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
    UserComponent,
    AddressComponent,
    CompanyComponent,
    FeedbackComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(route)

  ],
  providers: [UsersService, provideHttpClient(), AuthGuard, AdminGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
