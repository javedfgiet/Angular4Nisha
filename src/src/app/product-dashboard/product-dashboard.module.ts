import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ProductDashboardComponent}
]

@NgModule({
  declarations: [
    ProductDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductDashboardModule { }
