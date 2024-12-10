import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AddUserComponent } from "../Users/add-user/add-user.component";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class unsavedChangesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component: CanComponentLeave) {
    if (component.canLeave) {
      return component.canLeave();

    }

    return true;
  }


}

export interface CanComponentLeave {
  canLeave: () => boolean;
}
