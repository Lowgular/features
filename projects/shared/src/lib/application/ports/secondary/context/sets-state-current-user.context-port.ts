import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const SETS_STATE_CURRENT_USER_CONTEXT =
  new InjectionToken<SetsStateCurrentUserContextPort>(
    'SETS_STATE_CURRENT_USER_CONTEXT'
  );

export interface SetsStateCurrentUserContextPort {
  setState(key: string, value: string): Observable<void>;
}
