import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: false,

  templateUrl: './binding.component.html',
  

  styleUrl: './binding.component.css'
})
export class BindingComponent {
  pageTitle: string = "Angular Binding Works ......!"
  imageUrl: string = "header.JPG"
  isDisabled:boolean=false
  username:string="hello"

  changeTitle(){
    this.pageTitle="Page Title has been changed.................!"
  }

}
