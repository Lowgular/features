import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const CLEARS_CURRENT_USER_CONTEXT =
  new InjectionToken<ClearsCurrentUserContextPort>(
    'CLEARS_CURRENT_USER_CONTEXT'
  );

export interface ClearsCurrentUserContextPort {
  clear(): Observable<void>;
}
