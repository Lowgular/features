import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserContext } from './current-user.context';

export const SELECTS_CURRENT_USER_CONTEXT = new InjectionToken<SelectsCurrentUserContextPort>('SELECTS_CURRENT_USER_CONTEXT');

export interface SelectsCurrentUserContextPort {
  select(): Observable<Partial<CurrentUserContext>>;
}
