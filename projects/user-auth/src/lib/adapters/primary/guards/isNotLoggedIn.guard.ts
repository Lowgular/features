import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {
  SelectsCurrentUserContextPort,
  SELECTS_CURRENT_USER_CONTEXT,
} from '@shared';
import { map, Observable } from 'rxjs';

@Injectable()
export class IsNotLoggedInGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(SELECTS_CURRENT_USER_CONTEXT)
    private _selectsCurrentUserContext: SelectsCurrentUserContextPort
  ) {}

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._selectsCurrentUserContext.select('currentUserId').pipe(
      map((data) => {
        if (data) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
