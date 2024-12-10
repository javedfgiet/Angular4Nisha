// import { CanActivateFn } from '@angular/router';

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { JsonApiService } from "../services/json-api.service";
@Injectable({
  providedIn: 'root'
})


export class resolveGuard implements Resolve<any> {
  constructor(private users: JsonApiService) {

  }

  resolve() {
    return this.users.getAllUserList();
  }

}