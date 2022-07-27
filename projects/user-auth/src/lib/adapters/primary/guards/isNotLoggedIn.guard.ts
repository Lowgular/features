import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import {
  SelectsLocalStorageContextPort,
  SELECTS_LOCAL_STORAGE_CONTEXT,
} from '../../../application/ports/secondary/context/selects-local-storage.context-port';

@Injectable()
export class IsNotLoggedInGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(SELECTS_LOCAL_STORAGE_CONTEXT)
    private _selectsLocalStorageContext: SelectsLocalStorageContextPort
  ) {}

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._selectsLocalStorageContext.isLoggedIn().pipe(
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
