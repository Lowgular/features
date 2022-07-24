import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class IsNotLoggedInGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (localStorage.length === 0) {
      this.router.navigate(['/login']);
      return of(false);
    } else {
      return of(true);
    }
  }
}
