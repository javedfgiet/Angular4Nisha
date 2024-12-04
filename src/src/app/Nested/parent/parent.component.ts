import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,

  templateUrl: './parent.component.html',
  styles: ``
})
export class ParentComponent {
  userName: string = "John Smith";
  message:string="";

  ShowChildMesage(data:any){
this.message=data;
  }
}
