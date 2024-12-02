import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ListEmployeeComponent } from './Employees/list-employee/list-employee.component';
import { CountryCodeComponent } from './Switch/country-code/country-code.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ListEmployeeComponent,
    CountryCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
