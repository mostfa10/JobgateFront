import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem("state")=="0") //ychouf state f localstorge li sajelnaha kn 0 t3adih lil hajtou kn lee m t3adihch tb9a f login
        return true;
      else {
      this.route.navigateByUrl('/')
      return false;
      }

    }
  
}

