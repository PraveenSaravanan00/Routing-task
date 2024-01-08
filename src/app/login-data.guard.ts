import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataGuard implements CanActivate {
  loginCanActivateData: string = ""
  logindata!:boolean
  constructor(private routerref: Router) {


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.loginCanActivateData = localStorage.getItem("activeData") as string
    this.logindata = (JSON.parse(this.loginCanActivateData));
    if (this.logindata) {
      this.routerref.navigate(["home"])
      return false
    }
    return true;
  }

}
