import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  path: import('@angular/router').ActivatedRouteSnapshot[];
  route: import('@angular/router').ActivatedRouteSnapshot;



  constructor(private router: Router, private auth: AuthService) { }

  canActivate(): boolean {
    let auth;
    this.auth._isAuthenticated.subscribe( data => auth = data);
    if (!auth) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
