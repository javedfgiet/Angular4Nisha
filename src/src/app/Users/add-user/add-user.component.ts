import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../../RGuard/unsaved-changes.guard';

@Component({
  selector: 'app-add-user',
  standalone: false,

  templateUrl: './add-user.component.html',
  styles: ``
})
export class AddUserComponent implements CanComponentLeave {
  username: FormControl = new FormControl();
  constructor() { }
  canLeave(): boolean {
    if (this.username.dirty) {
      return window.confirm("You have some unsaved changes. Saveit before Leaving...");
    }
    return true;
  }

}
