import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  canactivatevalue:boolean=false
  logincanactivate:string=""
  loginguarddata!:boolean
  loginactivatedata!:boolean
  loginCanActivateData:string=""
  constructor(private routerref: Router) { 
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.loginCanActivateData=localStorage.getItem("activeData") as string
      this.loginactivatedata=(JSON.parse(this.loginCanActivateData));
      this.logincanactivate=localStorage.getItem("guardvalue") as string
      this.loginguarddata=(JSON.parse(this.logincanactivate));
      if(this.loginguarddata==false && this.loginactivatedata==true){
        localStorage.setItem("guardvalue","true")
        this.routerref.navigate(["home"])
        return false
      }
      else if(this.loginguarddata==true && this.loginactivatedata==false){     
        localStorage.setItem("guardvalue","false")                                   
          this.routerref.navigate([""])

          return false
        }
    return this.loginguarddata;
  }
  
}
