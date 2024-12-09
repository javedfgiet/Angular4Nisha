// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
@Injectable(
  {
    providedIn: 'root'
  })

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) { }

  canActivate() {
    if (this.auth.isUserLoggedIn()) {
      return true;
    }
    else {
      window.alert('Permission denied');
      return false;
    }
  }

}
