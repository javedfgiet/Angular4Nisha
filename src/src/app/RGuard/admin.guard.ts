// import { CanActivateChildFn } from '@angular/router';

// export const adminGuard: CanActivateChildFn = (childRoute, state) => {
//   return true;
// };

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {

  constructor(private auth: AuthService) { }

  canActivateChild() {
    if (this.auth.isAdminRole())
      return true;
    else
      return false;
  }
}
