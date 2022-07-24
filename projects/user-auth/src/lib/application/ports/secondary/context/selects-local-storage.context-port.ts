import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const SELECTS_LOCAL_STORAGE_CONTEXT =
  new InjectionToken<SelectsLocalStorageContextPort>(
    'SELECTS_LOCAL_STORAGE_CONTEXT'
  );

export interface SelectsLocalStorageContextPort {
  isLoggedIn(): Observable<boolean>;
}
