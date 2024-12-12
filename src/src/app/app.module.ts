import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { AddUserComponent } from './Users/add-user/add-user.component';
import { unsavedChangesGuard } from './RGuard/unsaved-changes.guard';
import { resolveGuard } from './RGuard/resolve.guard';
import { RxjsComponent } from './Subjects/rxjs/rxjs.component';
import { NotificationBoardComponent } from './Users/notification-board/notification-board.component';
import { ViewChildComponent } from './Users/view-child/view-child.component';
import { CounterComponent } from './Users/counter/counter.component';
import { headersInterceptor } from './headers.interceptor';

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
    LocationComponent,
    AddUserComponent,
    RxjsComponent,
    NotificationBoardComponent,
    ViewChildComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: headersInterceptor, multi: true },
    UsersService, AuthService, provideHttpClient(withInterceptorsFromDi()),
    AuthGuard, AdminGuard, unsavedChangesGuard, resolveGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
