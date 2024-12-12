import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  standalone: false,

  templateUrl: './product-dashboard.component.html',
  styles: ``
})
export class ProductDashboardComponent implements OnInit {

  public salesProducts = [
    { id: 1, name: 'Phone', price: 100 },
    { id: 2, name: 'Acs', price: 200 },
    { id: 3, name: 'Fashion', price: 300 },
    { id: 4, name: 'Electronic', price: 500 }

  ];

  public topProducts = [
    { id: 1, name: 'Phone', price: 100 },
    { id: 2, name: 'Acs', price: 200 },
    { id: 3, name: 'Fashion', price: 300 },
    { id: 4, name: 'Electronic', price: 500 }

  ];
  constructor() {
    console.log("Product Dashboard Loading..");
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
