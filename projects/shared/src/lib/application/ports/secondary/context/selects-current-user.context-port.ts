import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const SELECTS_CURRENT_USER_CONTEXT =
  new InjectionToken<SelectsCurrentUserContextPort>(
    'SELECTS_CURRENT_USER_CONTEXT'
  );

export interface SelectsCurrentUserContextPort {
  select(key: string): Observable<string | null>;
}
